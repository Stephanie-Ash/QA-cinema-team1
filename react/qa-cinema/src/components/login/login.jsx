import './login.css'
import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios';
import { set } from 'date-fns';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [isLoggedin, setisLoggedin] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //console.log(username)

    const handleLogin = (e) => 
    {e.preventDefault()   
        
        axios
            .get(`http://localhost:3001/UIDs/login/${username}`)
            .then(res => res)
            .then((result) => {
                if (result.data.password === password && result.data.username === username){
                    setisLoggedin(true)
                    navigate("/loggedin", { state: { isLoggedin: true } })
                } else {

                    alert('Credentials are incorrect, administration has been informed')
                }
            }, (error) => {
              console.log(error)
            });
    }    

  return (

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit = {handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="username"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username} onChange = {e => setUsername (e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password} onChange = {e => setPassword (e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">         
          </p>
        </div>
      </form>
    </div>
  )


}
export default Login;