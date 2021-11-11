import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import './App.css';
import RoutesComponents from './RoutesComponents';
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
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  //load user info from Api if user has the token 

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          let user = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(user.username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
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
  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyForJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }
  console.log(`In APP JS CurrentUSer ${currentUser} `);
  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
          <main>
            <NavBar logout={logout} />
            <RoutesComponents login={login} signUp={signUp} />
          </main>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
