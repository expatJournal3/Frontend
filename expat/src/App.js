import React, {useState} from 'react';
import RegisterForm from "./components/Register";
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Profile from './components/Profile';
import Header from './components/Header';
import DashBoard from './components/Dashboard';


function App() {

  const [users, setUsers] = useState([]);

  const addNewUser = user => {
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password
    };
    setUsers([...users, newUser]);
    console.log(newUser);
  }

  return (
    <div className="App">
      <RegisterForm addNewUser={addNewUser} />
    <Switch>
        <PrivateRoute exact path='/dashboard' component={DashBoard}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/header" component={Header} />
        
  <Link to="/login">Login</Link>
  {/* <li><Link to="/header">Header</Link></li> */}

      </Switch>  
      <Profile/>
      <DashBoard/>
    </div>
  );
}

export default App;
