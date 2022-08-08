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

        axios.post("http://localhost:8080/login1", {
                email: details.useremail,
                password: details.password,
            }, 
            {headers})
            .then(response  => {
               if(response.status === 200){
                    localStorage.setItem("access_token", response.data.access_token)
                    localStorage.setItem("refresh_token", response.data.refresh_token)
                    console.log("roles", response.data.roles);
                    navigate("/");
                }
            }
            )
        .catch(() => {

            axios.get(`http://localhost:8080/store/user/existUser?email=${details.useremail}`)
                .then(response => {
                console.log("CHECK EMAIL RESPONSE")
                    if(response.status === 200) {
                        console.log("EMAIL EXIST Invalid password")
                        setError("Invalid password.")
                    }
                })
                .catch(error => {
                    setError("User not found.")
                })
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