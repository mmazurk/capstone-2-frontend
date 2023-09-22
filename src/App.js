import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import Navigation from "./navigation/Navigation";
import HomePage from "./homepage/HomePage";
import UserLibrary from "./user-library/UserLibrary";
import SearchPage from "./searches/SearchPage";
import LoginForm from "./auth/LoginForm";
import Logout from "./auth/LogOut";
import SignUpForm from "./auth/SignUpForm";
import ProfileForm from "./profiles/ProfileForm";
import MyPhotoAPI from "./api/api";
import UserContext from "./auth/userContext";
import LoadingIconHome from "./common/LoadingIconHome";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(true);
  const [user, setUser] = useState(null);
  const [userPrompts, setUserPrompts] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null)

  useEffect(() => {
  console.log("Current user", user);
  console.log("Current userPrompts", userPrompts);
  console.log("Current isLoggedIn", isLoggedIn)
  console.log("Current token: ", token);
}, [token])

    // this was added
  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwtDecode(token);
            MyPhotoAPI.token = token;
            let currentUser = await MyPhotoAPI.getUser(username);
            setUser(currentUser.username);
            let currentPrompts = await MyPhotoAPI.getPrompts();
            setUserPrompts(currentPrompts);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setUser(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  // this was changed
  async function signUp(formData) {
    try {
      let token = await MyPhotoAPI.signUpUser(formData);
      debugger;
      setToken(token);
      return { status: true };
    } catch (error) {
      console.error("The sign-in did not work.");
      return { status: false, error };
    }
  }

  async function logout(user) {
    setToken(null);
    setIsLoggedIn(false);
    setUserPrompts([]);
    setUser(null);
  }

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

  if(infoLoaded) {
  return (
    <div>
      <UserContext.Provider value={{token: token, user: user}}>
      <BrowserRouter> 
        <Navigation isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<UserLibrary promptList={userPrompts} />} />
            <Route path="/searches" element={<SearchPage />} />
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
  )}
  else return (
    <div>
      <BrowserRouter>
      <Navigation isLoggedIn={isLoggedIn} />
      <LoadingIconHome />
      </BrowserRouter>
    </div>
  )
}

export default App;
