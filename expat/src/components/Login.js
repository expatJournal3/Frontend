import React, { useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

const RegForm = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  border: 2px dashed #05716c;
  padding: 2%;
  flex-direction: column;
  margin: 2%;
`;
const H2 = styled.h2`
  font-size: 1.8rem;
  color: #05716c;
`;
const RegInput = styled.input`
  width: 150px;
  height: 30px;
  border: 2px solid #1fbfb8;
  margin: 2%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login(props) {
   
    const [login, setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange=event=>{
        setLogin({...login, [event.target.name]: event.target.value})
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
      <Container>
        <RegForm>
          <H2>LogIn</H2>
          <form onSubmit={handleSubmit}>
            <div>
              <RegInput
                type="text"
                name="email"
                placeholder="email"
                value={login.email}
                onChange={handleChange}
                className="input"
              />
            </div>
            <br />
            <div>
              <RegInput
                type="password"
                name="password"
                placeholder="password"
                value={login.password}
                onChange={handleChange}
                className="input"
              />
            </div>
            <br />
            <button className="login-button">Log In</button>
          </form>
        </RegForm>
      </Container>
    );
}