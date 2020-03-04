import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';


export default function Login(props) {
   
    const [login, setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange=event=>{
        setLogin({...login, [event.target.name]: event.target.value})
    }
    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        axiosWithAuth().post('https://expath.herokuapp.com/api/auth/login', login)
        .then(response=>{
            console.log('response',response)
            console.log("Token",response.data.token)
            localStorage.setItem('token', response.data.token)
            props.history.push('/dashboard');
        })
        .catch(error=>console.log('This is an error',error))
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={login.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
            className="input"
          />
          <button className='login-button'>Login</button>
          <button className='signout-button'onClick={signOut}>Sign Out</button>
        </form>
        </div>
    )
}