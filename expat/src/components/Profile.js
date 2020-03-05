import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import  styled  from "styled-components";
import Header from "./Header";
import cuid from 'cuid';

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
const initialPost = {
    title:'',
    body:''
    // imgUrl:'',
    // timestamp:''
}

const Profile = () =>{
const [newPost, setNewPost]=useState(initialPost);
const [myStories, setMyStories]=useState([]);
const id = window.localStorage.getItem("id");

useEffect(()=>{
    axiosWithAuth()
    .get(`https://expath.herokuapp.com/api/users/${id}/paths`)
    .then(response=>{
        console.log("My Profile page",response.data)
        setMyStories(response.data)
    })
    .catch(error=>console.log('My profile error', error))
},[id])



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
        <Header />
        <h1>Profile</h1>
         <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleChange} placeholder="Title"/>
        
          <textarea type="text" name="body" onChange={handleChange} placeholder="Tell your story here"></textarea>
          
          <button className='addStory-button'>Add Story</button>
          </form> 
        <h2>Your Posts</h2>
    </ProfileDiv>
    <div key={cuid()}>
        <p>{newPost.story}</p>
        <p></p>
    </div>
    {/* <div className="title-story-div">
    {myStories.map(story=>{
        return(
            <div key={cuid()}>
                <p>{story.title}</p>
                <p>{story.body}</p>
            </div>
        )
    })}
    </div> */}
    </div>
    
    )}; 
    
    
    export default Profile