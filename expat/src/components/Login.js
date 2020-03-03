import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function Login(props) {
   
    const [login, setLogin]=useState({
        username:'',
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
            localStorage.setItem('token', response.data.payload)
            props.history.push('/');
        })
        .catch(error=>console.log('This is an error',error))
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
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