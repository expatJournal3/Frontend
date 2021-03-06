import React from 'react';
import RegisterForm from "./components/Register";
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Profile from './components/Profile';
import Header from './components/Header';
import DashBoard from './components/Dashboard';


function App() {

  return (
    <div className="App">
    <Switch>
        <PrivateRoute exact path='/dashboard' component={DashBoard}/>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/" component={RegisterForm} />
  <Link to="/login">Login</Link>
  {/* <li><Link to="/header">Header</Link></li> */}
      </Switch>  
    </div>
  );
}

export default App;
