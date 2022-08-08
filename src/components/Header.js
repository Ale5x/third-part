import React from 'react';
import { useNavigate  } from 'react-router-dom';

import LoginForm from './LoginForm'


export default function Header() {
  const navigate = useNavigate();
 
  

  const Logout = () => {
    console.log("Logout");
    localStorage.clear();
    window.location.reload();
    // localStorage.setItem("access_token", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjU5OTE2Mzc0fQ.YashG68FOaW2yFUJM8fLKhpNg_y8vCgdhWEwsAMF8PE");
    // localStorage.setItem("refresh_token", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjU5OTE3NTc0fQ.VXUuYf4syW5cK7qiJoY7VbWx0DlUcvOCYgcICGpAcaE");
  }

  return (
      <div className='header'>
        
        <nav className='header-content'>
          <div className='logo'> Store...</div>
          <ui>
              <li onClick={() => navigate("/")}>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
              <li><img src='https://img.icons8.com/windows/344/shopping-cart.png'></img></li>
          </ui>
          
          <div className='logination'>
            {(localStorage.getItem("access_token") === null || localStorage.getItem("access_token") == "") ? (
              <ui>
                <li onClick={() => navigate("login")}>Sing in</li>
                <li onClick={() => navigate("registration")}>Sign up</li>
              </ui>
            ) : (
              <ui>
                <li onClick={Logout}>Logout</li>
              </ui>
            )}
          </div>
      </nav>
      </div>
  )
}

