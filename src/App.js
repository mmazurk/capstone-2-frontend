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
  const [token, setToken] = useState(localStorage.getItem("myAItoken"))
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    // this was added
  useEffect(
    function loadUserInfo() {
      console.log("loadUserInfo just ran");
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
            console.log("You just failed with these errors:", err)
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
      if(token) {
        localStorage.setItem("myAItoken", token);
        setToken(token);
        setIsLoggedIn(true);
      }
      return { status: true };
    } catch (err) {
      console.error("signup() failed with these errors:", err);
      return { status: false, err };
    }
  }

  async function logout() {
    localStorage.removeItem("myAItoken")
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
        localStorage.setItem("myAItoken", token)
        return "success";
      }
    } catch (err) {
      return err; 
    }
  }

  async function edit(user, formData) {
    try {
      const reply = await MyPhotoAPI.patchUser(user, formData);
      if(reply) {
        return {status: true};
      }
    }
    catch(err) {
      console.error("edit() failed wiith error(s)", err);
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
            <Route path="/profile" element={<ProfileForm edit={edit} user={user} />} />
            <Route path="/logout" element={<Logout logout={logout} />} />
            <Route path="/signup" element={<SignUpForm signUp={signUp} />} />
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
