import './App.css';
import React, { useState } from 'react';
import getAllUsers from './apis/UserApi';
import UserCard from './components/UserCard';




function App() {


  const[users, setUsers]=useState([]);
  const[loading, setLoading]=useState(false);


  const getUsers=()=>{
    setLoading(true);
    getAllUsers().then((res)=>{
      console.log(res)
      setUsers(res)
      setTimeout(()=>{setLoading(false)},2000)
    })
  }

  return (
    <div className="App">
      <header className="navbar">
        <h1>GetYourUsers.com</h1>
        <div className='iconbutton' onClick={getUsers} >Get Users</div>
      </header>
      {(!loading)?<div className='grid-container'>
        {users.map((user)=>UserCard({user}))}
      </div>
      :
      <div className='loader'/>
    }
    </div>
  );
}

export default App;
