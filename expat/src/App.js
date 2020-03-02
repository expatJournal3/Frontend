import React, {useState} from 'react';
import RegisterForm from "./Register";
import './App.css';


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
      <header>
        <RegisterForm addNewUser={addNewUser} />
      </header>
    </div>
  );
}

export default App;
