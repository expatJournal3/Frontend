import React, {useState} from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

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
        name: "",
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
        setUser({ name: "", email: "", password: "" });
    }

    return (
      <RegForm>
        <H2>Register</H2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Labels htmlFor="name">
              name{" "}
              <RegInput
                id="name"
                type="text"
                name="name"
                ref={register({ required: true })}
                onChange={handleChange}
                value={user.name}
              />
              {errors.name && <p>This field is required!</p>}
            </Labels>
          </div>
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

  // const sendUser = e => {
    //     e.preventDefault();
    //     props.addNewUser(user);
        // setUser({ name: "", email: "", password: "" });
    // };