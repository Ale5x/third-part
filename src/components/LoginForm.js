import React, {useState} from "react";
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

 function LoginForm() {
    const [details, setDetails] = useState({useremail: "", password: ""});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const headers = { 
        'Content-Type': 'application/json'
    };
        
    const submitHandler = e => {
        e.preventDefault();

        axios.post("http://localhost:8080/login", {
                email: details.useremail,
                password: details.password,
            }, 
            {headers})
            .then(response  => {
               if(response.status === 200){
                    localStorage.setItem("access_token", "Bearer " + response.data.access_token)
                    localStorage.setItem("refresh_token", "Bearer " + response.data.refresh_token)
                    localStorage.setItem("roles", response.data.roles)
                    console.log("localStorage.setItem(roles", localStorage.getItem("roles"));
                    navigate("/");
                }
            }
            )
        .catch((e) => {
            setError("Invalid password or email.")
        })
    }

     return (<form onSubmit={submitHandler} className='form-position'>
        <div className='position-centr'>
            <div className="form-inner">
            <h2>Login</h2>
            {(error != "") ? (<div className="error_message">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, useremail: e.target.value})} value={details.useremail}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
            <div className='position-btn'>
                <input type="submit" value="LOGIN" className="btn"></input>
                <button onClick={() => navigate("/")} type='submit' className='cancel-btn'>CANCEL</button>
            </div>
            </div>
        </div>
    </form>)

}

export default LoginForm