import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, MemoryRouter } from "react-router-dom";
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

const Router = process.env.NODE_ENV === 'test' ? MemoryRouter : BrowserRouter;

function App() {
  const [infoLoaded, setInfoLoaded] = useState(true);
  const [user, setUser] = useState({});
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
            delete currentUser.prompts; // I don't use these for anything
            setUser(currentUser);
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
      if(reply.username) {
        return "success";
      }
    }
    catch(err) {
      return err; 
    }
  }

  function updateUser(newUserDetails) {
    setUser(newUserDetails);
  }


  if(infoLoaded) {
  return (
    <div>
      <UserContext.Provider value={{user: user}}>
      <Router> 
        <Navigation isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<UserLibrary promptList={userPrompts} />} />
            <Route path="/searches" element={<SearchPage />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/profile" element={<ProfileForm edit={edit} user={user} updateUser={updateUser} />} />
            <Route path="/logout" element={<Logout logout={logout} />} />
            <Route path="/signup" element={<SignUpForm signUp={signUp} />} />
            <Route
              path="*"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Routes>
        </main>
      </Router>
      </UserContext.Provider>
    </div>
  )}
  else return (
    <div>
      <Router>
      <Navigation isLoggedIn={isLoggedIn} />
      <LoadingIconHome />
      </Router>
    </div>
  )
}

export default App;
