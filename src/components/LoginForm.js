import React, {useState} from "react";
import axios from 'axios';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const body = { useremail: details.email,
                   password: details.password};
    const headers = {
        'Access-Control-Allow-Credentials':true,
        'Content-Type': 'application/json'
        }

    const submitHandler = e => {
        e.preventDefault();
        console.log("START LOGINATION")
        //localhost:8080/login
        axios.get("http://localhost:8080/store/tag/get?id=5", {
            useremail: details.email,
            password: details.password}, {headers}
        )
        .then(response => {
            if(response.status == 200) {
                console.log("LOGINATION SUCCESSFUL");
            } else {
                console.log("LOGINATION NO SUCCESSFUL");
            }
            console.log("BODY", JSON.stringify(body))
            console.log("response status", response.status)
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