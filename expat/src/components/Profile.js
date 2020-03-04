import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import  styled  from "styled-components";


const ProfileDiv=styled.div`
display: flex;
flex-direction: column;

form{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 40%;   
}
textarea{
    height: 150px;
    margin-top: 20px;
}
button{
    width: 25%;
    margin: 0 auto;
    margin-top: 20px;
}
`;
const initialPost = {
    title:'',
    body:''
    // imgUrl:'',
    // timestamp:''
}

const Profile = () =>{
const [newPost, setNewPost]=useState(initialPost);
const id = window.localStorage.getItem("id");

    const handleChange=event=>{
        setNewPost({...newPost, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
    axiosWithAuth()
    .post(`https://expath.herokuapp.com/api/users/${id}/paths`,newPost)
    .then(response=>{
        console.log('Profile page',response) 
        setNewPost(response.data)
       
    })
    .catch(error=>console.log('Create post error',error))
    
}
   
    return (
        <div className="story-container">
    <ProfileDiv> 
        <Link to="/dashboard">Back to Dashboard</Link>
         <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} placeholder="Title"/>
        
          <textarea type="text" name="body" onChange={handleChange} placeholder="Tell your story here"></textarea>
          
          <button className='addStory-button'>Add Story</button>
          {/* <button className='signout-button'onClick={signOut}>Sign Out</button> */}
          </form> 
    </ProfileDiv>
    <div className="title-story-div">
    <h2>{newPost.title}</h2>
    <h3>{newPost.body}</h3>
    </div>
    </div>
    
    )}; 
    
    
    export default Profile