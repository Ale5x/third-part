import React, {useEffect, useState} from 'react';

function RegistartionForm({Registration}) {
  const [user, setUser] = useState({email: "", firstName: "", secondName: "", password: "", repeatPassword: ""});
  const [placeholderStatus, setPlaceholderStatus] = useState({emailStatus: false, firstNameStatus: false, 
    secondNameStatus: false, passwordStatus: false, repeatPasswordStatus: false});
  const [error, setError] = useState({emailError: "Email cannot be empty", 
                                        firstNameError: "First name cannot be empty", 
                                        secondNameError: "Second name be empty",  
                                        setPasswordError: "Password cannot be empty", 
                                        repeatPasswordError: "Passwords do not match"});


  const [formValid, setFormValid] = useState(false);

  useEffect( () => {
    if(placeholderStatus.emailStatus && placeholderStatus.firstNameStatus && placeholderStatus.secondNameStatus && 
        placeholderStatus.passwordStatus && placeholderStatus.repeatPasswordStatus) {
            setFormValid(true);
    } else {
        checkPassword();
        console.log("PASSSWORD 3")
        setFormValid(false);
    }
  }, [error.emailError, error.firstNameError, error.secondNameError, error.passwordError, error.repeatPasswordError])

  function checkPassword() {
    if(user.password === user.repeatPassword) {
        console.log("PASSSWORD")
        setFormValid(true);
    } else {
        console.log("PASSSWORD 2")
        placeholderStatus.repeatPasswordStatus = false;
        setError({repeatPasswordError: "Passwords do not match"});
        setFormValid(false);
    }
  }
  

  console.log("Valid form",formValid)

  const emailHandler = (e) => {
    const REGEX_EMAIL = "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\\b";
    if(e.target.value !== "") {
        setError({emailError: ""});
        user.email = e.target.value;
    } else {
        setError({emailError: "Email cannot be empty"});
    }
  }

  const firstNameHandler = (e) => {
    if(e.target.value !== "") {
        setError({firstNameError: ""});
        user.firstName = e.target.value;
    } else {
        setError({firstNameError: "First name cannot be empty"});
    }
  }

  const secondNameHandler = (e) => {
    if(e.target.value !== "") {
        setError({secondNameError: ""});
        user.secondName = e.target.value;
    } else {
        setError({secondNameError: "Second name be empty"});
    }
  }

  const paswwordHandler = (e) => {
    if(e.target.value !== "") {
        setError({passwordError: ""});
        user.password = e.target.value;
    } else {
        setError({passwordError: "Password cannot be empty"});
    }
  }

  const repeatPasswordHandler = (e) => {
    console.log("repeatPasswordHandler")

    if(e.target.value !== "" && user.password === e.target.value) {
        setError({repeatPasswordError: ""});
        user.repeatPassword = e.target.value;
    } else {
        setError({repeatPasswordError: "Passwords do not match"});
    }
  }
  console.log("STAUSES", placeholderStatus)

  const bluerHubdler = (e) => {
    switch(e.target.name) {
      case "email":
        placeholderStatus.emailStatus = true;
        break;
      case "first-name":
        placeholderStatus.firstNameStatus = true;
        break;
      case "second-name":
        placeholderStatus.secondNameStatus = true;
        break;
      case "password":
        placeholderStatus.passwordStatus = true;
        break;
      case "repeat-password":
        placeholderStatus.repeatPasswordStatus = true;
        break;
    }
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log("User details", user);
    Registration(user);
}

  return (
    <form onSubmit={submitHandler}>
        <div>
          <h1>Registration</h1>
          <div>
            {(placeholderStatus.emailStatus && error.emailError) && <div style={{color:'red'}}>{error.emailError}</div>} 
            <label htmlFor='email'>Email:</label>
            <input  onChange={e => emailHandler(e)} onBlur={e => bluerHubdler(e)} type="text" name="email" id='email' placeholder='Enter email'/>
          </div>
          <div>
            {(placeholderStatus.firstNameStatus && error.firstNameError) && <div style={{color:'red'}}>{error.firstNameError}</div>}
            <label htmlFor='first-name'>First name:</label>
            <input onChange={e => firstNameHandler(e)}  onBlur={e => bluerHubdler(e)} type="text" name="first-name" id='first-name' placeholder='Enter first name'/>
          </div>
          <div>
            {(placeholderStatus.secondNameStatus && error.secondNameError) && <div style={{color:'red'}}>{error.secondNameError}</div>}
            <label htmlFor='second-name'>Second name:</label>
            <input onChange={e => secondNameHandler(e)} onBlur={e => bluerHubdler(e)} type="text" name="second-name" id='second-name' placeholder='Enter second name'/>
          </div>
          <div>
            {(placeholderStatus.passwordStatus && error.passwordError) && <div style={{color:'red'}}>{error.passwordError}</div>}
            <label htmlFor='password'>Password:</label>
            <input onChange={e => paswwordHandler(e)} onBlur={e => bluerHubdler(e)} type="password" name="password" id='password' placeholder='Enter password'/>
          </div>
          <div>
            {(placeholderStatus.repeatPasswordStatus && error.passwordError) && <div style={{color:'red'}}>{error.repeatPasswordError}</div>}
            <label htmlFor='repeat-password'>Repeat Password:</label>
            <input onChange={e => repeatPasswordHandler(e)} onBlur={e => bluerHubdler(e)} type="password" name="repeat-password" id='repeat-password' placeholder='Repeat password'/>
          </div>
          <button disabled={!formValid} type='submit'>REGISTARTION</button>
        </div>
    </form>
  );
};

export default RegistartionForm;

