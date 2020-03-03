import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';  



const Dashboard = () =>{
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        axiosWithAuth()
        .get('https://expath.herokuapp.com/api/paths/placeholder')
        .then(response =>{
            console.log(response.data)
            setUsers(response.data)
        })
        .catch(error => console.log('Get users error',error))
    },[])
    return (
    
    <div> 
        {users.map(user=>{
            return(
                <div>

                </div>
            )
        })}
    </div>
    )}; 
    export default Dashboard