import React, {useState} from "react";
import axios from 'axios';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const body = { useremail: details.email,
                   password: details.password};
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",
        'Content-Type': 'application/json'
        }

    const submitHandler = e => {
        e.preventDefault();
        //localhost:8080/login
        axios.post("http://localhost:8080/login", {
            
                // "headers": headers,
                "body": body
        })
        .then(response => {
            if(response.status == 200) {
                console.log("LOGINATION SUCCESSFUL");
            } else {
                console.log("LOGINATION NO SUCCESSFUL");
            }
            console.log("BODY", JSON.stringify(body))
            console.log("response", response)
        })
        
        console.log("BODY", JSON.stringify(body))

        
    
    }

     return (<form onSubmit={submitHandler} className='form-position'>
        <div className='position-centr'>
            <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
            <input type="submit" value="LOGIN" className="btn"></input>
            </div>
        </div>
    </form>)
        
}

export default LoginForm