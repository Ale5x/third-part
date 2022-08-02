import React, {useState} from 'react';
import LoginForm from './componets/LoginForm';
import RegistartionForm from './componets/RegistrationForm';
import Header from './componets/Header';
import Footer from './componets/footer';
import MainContent from './componets/main-content';
import Test from './componets/test';
import TestMainContent from './componets/testMainContent';
import PhotosContent from './componets/test/PhotosContent';
// import './main-content.css';

import CertificatreCatalog from './componets/certificatreCatalog';



function App() {


  return (

    <div className="container">
      <Header/>
      {/* <MainContent/> */}
      {/* <Footer/> */}
      {/* <TestMainContent/> */}
      {/* <Test/> */}
      {/* <PhotosContent/> */}
      {/* <CertificatreCatalog/> */}
    </div>
  );
}



/*
REGISTRATION

function App() {
const [users, setUser] = useState({email: ""})
const [error, setError] = useState("");


const Registration = user => {
    console.log(user);


    setUser({
      email: user.email
    })
  }

  const Logout = () => {
    console.log("Logout");

  }

  return (

    <div className="App">

    {(users.email != "") ? (
      <div className='welcome'>
        <h2>Welcome, Registartion SuccessFull</h2>
        <button onClick={Logout}>Logout</button>
      </div>
      ) : (<RegistartionForm Registration={Registration}/>)}

    </div>
  );
}


/*

LOGIN

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
