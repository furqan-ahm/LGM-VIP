
import {FiUsers, FiMail} from 'react-icons/fi'
import React from 'react'



const UserCard=({user})=>{
    return (
      <div className='card'>
        <img className='avatar' src={user.avatar} alt={user.first_name}/>
        <h3><FiUsers style={{alignSelf:'center', marginRight:10}}/>Name: {user.first_name} {user.last_name}</h3>
        <h3><FiMail style={{alignSelf:'center', marginRight:10}}/>Email: {user.email}</h3>
        
      </div>
    )
  }


  export default UserCard