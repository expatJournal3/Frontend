import React, {useState} from 'react';
import styled from 'styled-components';


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

    const sendUser = e => {
        e.preventDefault();
        props.addNewUser(user);
        setUser({ name: "", email: "", password: "" });
    };

    return (
        <RegForm>
            <H2>Register</H2>
            <form onSubmit={sendUser}>
                <div>
                <Labels htmlFor="name">
                    name {" "}
                    <RegInput id="name" type="text" name="name" onChange={handleChange} value={user.name} />
                </Labels>
                </div>
                <br />
                <div>
                <Labels htmlFor="email">
                    email {" "}
                    <RegInput id="email" type="email" name="email" onChange={handleChange} value={user.email} />
                </Labels>
                </div>
                <br />
                <div>
                <Labels htmlFor="password">
                    password {" "}
                    <RegInput id="password" type="password" name="password" onChange={handleChange} value={user.password} />
                </Labels>
                </div>
                <br />
                <button type="submit">Register!</button>
            </form>
        </RegForm>
    );
};

export default RegisterForm;