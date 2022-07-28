import React, {useState} from 'react';
import LoginForm from './componets/LoginForm';
import RegistartionForm from './componets/RegistrationForm';


function App() {
console.log("Registration form");
const [users, setUser] = useState({email: ""})
const [error, setError] = useState("");

console.log("1");

const Registration = user => {
    console.log(user);
    console.log("Starting Registration");

    if(user.password === user.repeatPassword) {
      console.log("Password equalss")
      user.email = "Password equalss";
      
    } else {
      setError("Password dont match");
      user.email = "Password dont match";
    }
  }

  const Logout = () => {
    console.log("Logout");

  }

  console.log("App finishing");

  return (
    
    <div className="App">
      
    {(users.email == true) ? (
      <div className='welcome'>
        <h2>Welcome, Registartion SuccessFull</h2>
        <button onClick={Logout}>Logout</button>
      </div>
      ) : (<RegistartionForm Registration={Registration}/>)}
  
    </div>
  );
}




/*

{/* function App() {
console.log("App form");
  const adminUser = {
    email: "admin@g.com",
    password: "password"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Log In")
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({name: "", email: ""});
  }

  return (
    
    <div className="App">
      
      {(user.email !== "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (<LoginForm Login={Login} error={error}/>)} 
    </div>
  );
}

*/

export default App; 
