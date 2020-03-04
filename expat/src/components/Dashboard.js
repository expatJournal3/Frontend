import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';  





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
        {users.map(user=>{
            return(
                <div>
                    <p>test</p>
                    <p>{user.email}</p>
                </div>
            )
        })}
    </div>
    )}; 
    export default Dashboard