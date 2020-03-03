import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
    <Switch>
        <PrivateRoute exact path='/' component={Profile}/>
        <Route exact path="/login" component={Login} />
      </Switch>  
    </div>
  );
}

export default App;
