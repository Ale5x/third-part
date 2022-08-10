import React from 'react';
import { useNavigate  } from 'react-router-dom';

function AdminHeader() {
    const navigate = useNavigate();

    console.log(localStorage.getItem("access_token"))

    const Logout = () => {
        localStorage.clear();
        navigate("/");
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