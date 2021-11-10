import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import './App.css';
import Routes from './Routes';
import JoblyApi from './api';
import UserContext from './UserContext';
import jwt from "jsonwebtoken";
import useLocalStorage from './useLocalStorage';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "jobly-token";

function App() {

  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState(false);

  //load user info from Api if user has the token 

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          let user = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(user.username);
          setCurrentUser(currentUser);
        } catch (error) {
          console.log(error);
          setCurrentUser(null);
        }
      }
      setUserInfo(true);
    }
    setUserInfo(false);
    getCurrentUser();
  }, [token])

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (error) {
      console.error("login failed", error);
      return { success: false, error };
    }
  }

  async function signUp(signUpData) {
    try {
      let token = await JoblyApi.signup(signUpData);
      setToken(token);
      return true;
    } catch (error) {
      console.error("login failed", error);
      return false;
    }
  }

  // Handle logout
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser }}>
          <main>
            <NavBar logout={logout} />
            <Routes login={login} signUp={signUp} />
          </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
