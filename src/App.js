import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import HomePage from "./homepage/HomePage";
import UserLibrary from "./user-library/UserLibrary";
import SearchPage from "./searches/SearchPage";
import SearchPhotoResult from "./searches/SearchPhotoResult";
import LoginForm from "./auth/LoginForm";
import Logout from "./auth/LogOut";
import SignUpForm from "./auth/SignUpForm";
import ProfileForm from "./profiles/ProfileForm";
import MyPhotoAPI from "./api/api";
import OpenAiAPI from "./api/externalApi";
import UserContext from "./auth/userContext";

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null)

  async function login(formData) {
    try {
      const token = await MyPhotoAPI.authUser(formData);
      if (token) {
        setToken(token);
        setIsLoggedIn(true);
        return "success";
      }
    } catch (err) {
      return err; 
    }
  }

  async function logout(userData) {
    setToken(null);
    setIsLoggedIn(false);
  }

  async function signUp(formData) {
    const token = await MyPhotoAPI.signUpUser(formData);
    if(token) {
      setToken(token);
    } 
  }

  return (
    <div>
      <UserContext.Provider value={{token: token}}>
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<UserLibrary itemList={userData.searches} />} />
            <Route path="/searches" element={<SearchPage />} />
            <Route path="/searches/:searchId" element={<SearchPhotoResult />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/logout" element={<Logout logout={logout} />} />
            <Route path="/signup" element={<SignUpForm signUp={signUp} />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route
              path="*"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Routes>
        </main>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
