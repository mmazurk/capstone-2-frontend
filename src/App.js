import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import HomePage from "./homepage/HomePage";
import UserLibrary from "./user-library/UserLibrary";
import SearchList from "./searches/SearchList";
import SearchCardDetail from "./searches/SearchCardDetail";
import LoginForm from "./auth/LoginForm";
import Logout from "./auth/LogOut";
import SignUpForm from "./auth/SignUpForm";
import ProfileForm from "./profiles/ProfileForm";
import MyPhotoAPI from "./api/api";
import OpenAiAPI from "./api/externalApi";

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(userData) {
    console.log("Login!")
  }

  async function logout(userData) {
    console.log("Logout!")
  }

  async function signUp(formData) {
    console.log("Signup!")
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<UserLibrary itemList={userData.searches} />} />
            <Route path="/searches" element={<SearchList />} />
            <Route path="/searches/:searchId" element={<SearchCardDetail />} />
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
    </div>
  );
}

export default App;
