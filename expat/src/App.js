import React from 'react';
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
        <PrivateRoute exact path='/profile' component={Profile}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/header" component={Header} />
        
  <Link to="/login">Login</Link>
  {/* <li><Link to="/header">Header</Link></li> */}

      </Switch>  
      <DashBoard/>
    </div>
  );
}

export default App;
