import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth';  
import styled from 'styled-components';

const DashDiv= styled.div`
width: 25%;
height: auto;
margin: 0 auto;
border: 2px solid black;
margin-bottom: 20px;
p{
    font-size: 0.7rem;
    font-weight: 750;
}

img {
    width: 100%;
}
`;




const Dashboard = () =>{
    const [users, setUsers]=useState([]);
    

    useEffect(()=>{
        axiosWithAuth()
        .get('https://expath.herokuapp.com/api/paths')
        .then(response =>{
            console.log('User data',response.data)
            setUsers(response.data)
        })
        .catch(error => console.log('Get users error',error))
    },[])
    return (
    
    <div> 
        <Link to='/profile'>Profile Page</Link>
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