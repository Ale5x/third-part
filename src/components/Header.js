import React from 'react'

import LoginForm from './LoginForm'


export default function Header() {

  console.log("TOKENS - access_token", localStorage.getItem("access_token"))
  console.log("TOKENS - refresh_token", localStorage.getItem("refresh_token"))

  const Logout = () => {
    console.log("Logout");
    localStorage.setItem("access_token", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjU5OTE2Mzc0fQ.YashG68FOaW2yFUJM8fLKhpNg_y8vCgdhWEwsAMF8PE");
    localStorage.setItem("refresh_token", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luIiwiZXhwIjoxNjU5OTE3NTc0fQ.VXUuYf4syW5cK7qiJoY7VbWx0DlUcvOCYgcICGpAcaE");
  }

  return (
      <div className='header'>
        
        <nav>
          <div className='logo'> Store...</div>
          <ui>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
          </ui>
          <div className='logination'>
            {(localStorage.getItem("access_token") === null || localStorage.getItem("access_token") == "") ? (
              <ui>
                <li>Sing in</li>
                <li>Sign out</li>
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

