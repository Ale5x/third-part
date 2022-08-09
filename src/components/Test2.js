import React from 'react'
import { useNavigate  } from 'react-router-dom';

function Test2() {
    console.log("Test2")
    console.log("Test2 ROLES ->", localStorage.getItem("roles"))
    console.log("Test2")

    console.log("window.onload")
    const navigate = useNavigate();
const LoginOut= () => {
    console.log("DELETE ROLES")
    localStorage.clear()
    console.log("ROLES ->", localStorage.getItem("roles"))
    navigate('/test')
    
}
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  
  return (
    <div><h1>Test2
        <button onClick={LoginOut}>LOGIN OUT</button></h1></div>
  )
}

export default Test2