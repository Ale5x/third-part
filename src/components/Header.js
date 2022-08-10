import React from 'react';
import { useNavigate  } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
 
  console.log(localStorage.getItem("access_token"))

  const Logout = () => {
    console.log("Logout");
    localStorage.clear();
    // window.location.reload();
    navigate("/");
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
              <li><img src='https://img.icons8.com/windows/344/shopping-cart.png' className='cart-icon'></img></li>
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

