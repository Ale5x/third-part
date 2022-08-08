import React from 'react';
import { useNavigate  } from 'react-router-dom';

function AdminHeader() {
    const navigate = useNavigate();

    localStorage.setItem("access_token", "test value")
    console.log("LOOK", localStorage.getItem("access_token"))

    const Logout = () => {
        console.log("Logout");
        localStorage.clear();
        console.log("LOOK AFTER CLEAR", localStorage.getItem("access_token"))
        window.location.reload();
      }

  return (
    <div className='header'>
        
   
        <nav className='header-content'>
          <div className='logo'> Store...</div>
          <ui>
              <li onClick={() => navigate("certificate-catalog")}>Certificate</li>
              <li>Tags</li>
              <li>Orders</li>
              <li>Users</li>
          </ui>
          {/* <div className='logo'> Adminstter action...</div> */}
          <ui className='logout'>
            <li onClick={Logout}>Logout</li>
        </ui>
        </nav>
      </div>
  )
}

export default AdminHeader