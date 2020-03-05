import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styled from 'styled-components';


const NavBar = styled.nav`
  display: flex;
  width: 20%;
  border: 1px solid #1978a5;
  justify-content: space-between;
`;


export default function Header() {
    
    const signOut = () => {
      window.localStorage.removeItem("token");
      
    };
    

    return (
      <div className="header">
        <NavBar>
          <Link className="nav-links" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-links" to="/profile">
            Profile
          </Link>
          <Link className="nav-links" onClick={signOut}>
            Sign Out
          </Link>
        </NavBar>
      </div>
    );
}