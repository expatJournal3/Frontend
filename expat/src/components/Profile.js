import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import  styled  from "styled-components";
import Header from "./Header";

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 40%;
  }
  textarea {
    height: 150px;
    margin-top: 20px;
  }
  button {
    width: 25%;
    margin: 0 auto;
    margin-top: 20px;
  }
  h1 {
    color: #1978a5;
  }
  h2 {
    color: #1978a5;
  }
`;
 

const Profile = () =>{
const [newPost, setNewPost]=useState([]);

    const handleChange=event=>{
        setNewPost({...newPost, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    axiosWithAuth()
    .post('https://expath.herokuapp.com/api/users/:id/paths')
    .then(response=>{
        console.log('Profile page',response.data)
        setNewPost(response.data)
    })
    .catch(error=>console.log('Create post error',error))
}
   
    return (
        
    <ProfileDiv> 
        <Header />
        <h1>Profile</h1>
         <form onSubmit={handleSubmit}>
          <textarea type="text" id="search"  onChange={handleChange} placeholder="Tell your story here"></textarea>
          <button className='addStory-button'>Add Story</button>
          </form> 
        <h2>Your Posts</h2>
    </ProfileDiv>
    
    )}; 
    
    export default Profile