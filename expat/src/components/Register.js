import React, {useState} from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegForm = styled.div `
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    border: 2px dashed #05716c;
    padding: 2%;
    flex-direction: column;
`
const Labels = styled.label `
    color: #05716c;
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
          })
          .catch(error => {
            console.log("sorrey", error);
          });     
    }

    return (
      <RegForm>
        <H2>Register</H2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <div>
            <Labels htmlFor="email">
              email{" "}
              <RegInput
                id="email"
                type="email"
                name="email"
                ref={register({ required: true })}
                onChange={handleChange}
                value={user.email}
              />
              {errors.email && <p>This field is required!</p>}
            </Labels>
          </div>
          <br />
          <div>
            <Labels htmlFor="password">
              password{" "}
              <RegInput
                id="password"
                type="password"
                name="password"
                ref={register({ required: true, minLength: 5 })}
                onChange={handleChange}
                value={user.password}
              />
              {errors.password && (<p>This field is required!</p>)}
              {errors.password && errors.password.type === "minLength" && (<p>This field requires a minimum length of 5 characters!</p>)}
            </Labels>
          </div>
          <br />
          <button type="submit">Register!</button>
        </form>
      </RegForm>
    );
};

export default RegisterForm;