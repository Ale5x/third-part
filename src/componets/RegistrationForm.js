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
    if(user.email != "" && user.firstName != "" && user.secondName != "" && 
    user.password != "" && user.repeatPassword != "" && user.password === user.repeatPassword) {
            setFormValid(true);
    } else {
        checkPassword();
        setFormValid(false);
    }
  }, [error.emailError, error.firstNameError, error.secondNameError, error.passwordError, error.repeatPasswordError])

  function checkPassword() {
    if(user.password === user.repeatPassword) {
        setFormValid(true);
    } else {
        placeholderStatus.repeatPasswordStatus = false;
        setError({repeatPasswordError: "Passwords do not match"});
        setFormValid(false);
    }
  }

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
    console.log("status", placeholderStatus.passwordStatus)
    if(e.target.value !== "") {
        setError({passwordError: ""});
        user.password = e.target.value;
    } else {
      console.log("setError")
        setError({passwordError: "Password cannot be empty"});
    }
  }

  const repeatPasswordHandler = (e) => {

    if(e.target.value !== "" && user.password === e.target.value) {
        setError({repeatPasswordError: ""});
        user.repeatPassword = e.target.value;
    } else {
        setError({repeatPasswordError: "Passwords do not match"});
    }
  }

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
        <div className="form-inner">
          <h2>Registration</h2>
          {(placeholderStatus.emailStatus && error.emailError) && <div className='error_message'>{error.emailError}</div>}
          <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input onChange={e => emailHandler(e)} onBlur={e => bluerHubdler(e)} type="email" name="email" id='email' placeholder='Enter email'/>
          </div>
          {(placeholderStatus.firstNameStatus && error.firstNameError) && <div className='error_message'>{error.firstNameError}</div>}
          <div className="form-group">
            <label htmlFor='first-name'>First name:</label>
            <input onChange={e => firstNameHandler(e)}  onBlur={e => bluerHubdler(e)} type="text" name="first-name" id='first-name' placeholder='Enter first name'/>
          </div>
          {(placeholderStatus.secondNameStatus && error.secondNameError) && <div className='error_message'>{error.secondNameError}</div>}
          <div className="form-group">
            <label htmlFor='second-name'>Second name:</label>
            <input onChange={e => secondNameHandler(e)} onBlur={e => bluerHubdler(e)} type="text" name="second-name" id='second-name' placeholder='Enter second name'/>
          </div>
          {(placeholderStatus.passwordStatus && error.passwordError) && <div className='error_message'>{error.passwordError}</div>}
          <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input onChange={e => paswwordHandler(e)} onBlur={e => bluerHubdler(e)} type="password" name="password" id='password' placeholder='Enter password'/>
          </div>
          <div className="form-group">
          {(placeholderStatus.repeatPasswordStatus && error.repeatPasswordError) && <div className='error_message'>{error.repeatPasswordError}</div>}
            <label htmlFor='repeat-password'>Repeat Password:</label>
            <input onChange={e => repeatPasswordHandler(e)} onBlur={e => bluerHubdler(e)} type="password" name="repeat-password" id='repeat-password' placeholder='Repeat password'/>
          </div>
          <button disabled={!formValid} type='submit'>REGISTARTION</button>
        </div>
    </form>
  );
};



/*

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Registration</h2>
          {(error.emailError === "") ? (<div className="error_message">{error.emailError}</div>) : ""}
          <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input onChange={e => setUser({...user, email: e.target.value})} value={user.name} type="email" name="email" id='email' placeholder='Enter email'/>
          </div>
          {(error.firstNameError != "") ? (<div className="error_message">{error.firstNameError}</div>) : ""}
          <div className="form-group">
            <label htmlFor='first-name'>First name:</label>
            <input onChange={e => setUser({...user, firstName: e.target.value})} value={user.firstName} type="text" name="first-name" id='first-name' placeholder='Enter first name'/>
          </div>
          {(error.secondNameError != "") ? (<div className="error_message">{error.secondNameError}</div>) : ""}
          <div className="form-group">
            <label htmlFor='second-name'>Second name:</label>
            <input onChange={e => setUser({...user, secondName: e.target.value})} value={user.secondName} type="text" name="second-name" id='second-name' placeholder='Enter second name'/>
          </div>
          {(error.passwordError != "") ? (<div className="error_message">{error.passwordError}</div>) : ""}
          <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input onChange={e => setUser({...user, password: e.target.value})} value={user.password} type="password" name="password" id='password' placeholder='Enter password'/>
          </div>
          <div className="form-group">
          {(error.repeatPasswordError != "") ? (<div className="error_message">{error.repeatPasswordError}</div>) : ""}
            <label htmlFor='repeat-password'>Repeat Password:</label>
            <input onChange={e => setUser({...user, repeatPassword: e.target.value})} value={user.repeatPassword} type="password" name="repeat-password" id='repeat-password' placeholder='Repeat password'/>
          </div>
          <button type='submit'>REGISTARTION</button>
        </div>
    </form>
  );
};
*/
export default RegistartionForm