import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';  
import styled from 'styled-components';
import Header from "./Header";

const DashDiv = styled.div`
  width: 25%;
  height: auto;
  margin: 0 auto;
  border: 2px solid #1978a5;
  margin-bottom: 20px;
  background-color: #1fbfb8;
   p {
    font-size: 0.7rem;
    font-weight: 750;
    color: white;
  }

  img {
    width: 100%;
  }
`;
const H1 = styled.h1 `
    color: #1978a5;
`;



const Dashboard = () =>{
    const [users, setUsers]=useState([]);
    

    useEffect(()=>{
        axiosWithAuth()
        .get('https://expath.herokuapp.com/api/paths')
        .then(response =>{
            console.log('Get everyones data',response.data)
            setUsers(response.data)
        })
        .catch(error => console.log('Get users error',error))
    },[])
    return (
    
    <div> 
        <Header />
        <H1>Dashboard</H1>
        {users.map(user=>{
            return(
                <DashDiv key={user.id}>
                    <p>{user.title}</p>
                    <p>{user.body}</p>
                    <img src={user.imgUrl} alt=""/>
                    <p>{user.timestamp}</p>
                </DashDiv>
            )
        })}
    </div>
    )}; 
    export default Dashboard