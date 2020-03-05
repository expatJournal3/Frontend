import React, {useState} from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import axios from 'axios';

const RegForm = styled.div `
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    border: 2px dashed #05716c;
    padding: 2%;
    flex-direction: column;
    margin: 2%;
`
const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const H2 = styled.h2 `
    font-size: 1.8rem;
    color: #05716c;
`
const RegInput = styled.input `
    width: 150px;
    height: 30px;
    border: 2px solid #1fbfb8;
`

const RegisterForm = props => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    //onChange handler to control inputs
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        //console.log(user);
    };

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        console.log(data);
        setUser({ email: "", password: "" });
        axios
          .post("https://expath.herokuapp.com/api/auth/register", user)
          .then(response => {
            console.log(response);
            props.history.push('/login');
          })
          .catch(error => {
            console.log("sorrey", error);
          });     
    }

    return (
      <div>
        <Container>
          <RegForm>
            <H2>Register</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <br />
              <div>
                <RegInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  ref={register({ required: true })}
                  onChange={handleChange}
                  value={user.email}
                />
                {errors.email && <p>This field is required!</p>}
              </div>
              <br />
              <div>
                <RegInput
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  ref={register({ required: true, minLength: 5 })}
                  onChange={handleChange}
                  value={user.password}
                />
                {errors.password && <p>This field is required!</p>}
                {errors.password && errors.password.type === "minLength" && (
                  <p>This field requires a minimum length of 5 characters!</p>
                )}
              </div>
              <br />
              <button type="submit">Sign Up!</button>
            </form>
          </RegForm>
        </Container>
        <div>
          <Link to="/login">Already have an account? Log In</Link>
        </div>
      </div>
    );
};

export default RegisterForm;