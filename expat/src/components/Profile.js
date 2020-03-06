import React, { useState, useEffect} from 'react';
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
    
}

const Profile = () =>{
    
const [newPost, setNewPost]=useState(initialPost);
const [myStories, setMyStories]=useState([]);
const [editing, setEditing] = useState(false);
const userid = window.localStorage.getItem("id");


const editStory = story => {
    setEditing(true);
    setNewPost(story);
  };

useEffect(()=>{
    axiosWithAuth()
    .get(`https://expath.herokuapp.com/api/users/${userid}/paths`, myStories)
    .then(response=>{
        console.log("My posts",response.data)
        setMyStories(response.data)
    })
    .catch(error=>console.log('My profile error', error))
},[userid])



    const handleChange=event=>{
        setNewPost({...newPost, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(newPost)
    axiosWithAuth()
    .post(`https://expath.herokuapp.com/api/users/${userid}/paths`,newPost)
    .then(response=>{
        console.log('Profile page',response) 
        setNewPost(response.data)
        window.location.reload()
       
    })
    .catch(error=>console.log('Create post error',error))
    
}
const deletePost = (id) =>{
    axiosWithAuth()
    .delete(`https://expath.herokuapp.com/api/users/${userid}/paths/${id}`)
    .then(response=>{
        console.log('Response from delete', response.data)
        window.location.reload()
    })
    .catch(error=>console.log('Delete Error',error))
}
const saveEdit = (e) => {
    
    e.preventDefault();
    console.log('Save edit',newPost)
    axiosWithAuth()
      .put(`https://expath.herokuapp.com/api/users/${userid}/paths/${newPost.id}`, newPost)
      .then(response => {
        console.log(response.data);
        setNewPost(response.data)
        setEditing(false);
        window.location.reload()
      })
      .catch(error => {
        console.log(`error with PUT ${error.response}`);
      });
  };
   
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
        <p>{newPost.title}</p>
        <p>{newPost.body}</p>
    </div>
    <div className="title-story-div">
    {myStories.map(story=>{
        return(
            <div key={cuid()}>
                <p>{story.title}</p>
                <p>{story.body}</p>
                <button className='delete-button'onClick={()=>deletePost(story.id)}>Delete Story</button>
                <button className='edit-button'onClick={()=>editStory(story)}>Edit Story</button>
            </div>
        )
    })}
    </div>
    {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit story</legend>
          <label>
            Change Title:
            <input
              onChange={e =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              value={newPost.title}
            />
          </label>
          <label>
            Change Story:
            <input
              onChange={e =>
                setNewPost({
                  ...newPost,
                  body: e.target.value 
                })
              }
              value={newPost.body}
            />
          </label>
          <div className="button-row">
            <button type="submit" >save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
    </div>
    
    )}; 
    
    
    export default Profile