import React from 'react'
import {RiAccountCircleFill} from 'react-icons/ri'


const StudentTile=({student})=>{
    console.log(student);
    return(
      <div className='tile' key={student.id}>
        <RiAccountCircleFill size={102} color='white' style={{padding:20}}/>
        <form>
          <div className='text-row'>
            <h3>ID:</h3>
            <p>{student.id}</p>
          </div>
          
          <div className='text-row'>
            <h3>Name:</h3>
            <p>{student.name}</p>
          </div>
          
          <div className='text-row'>
            <h3>Email:</h3>
            <p>{student.email}</p>
          </div>
  
          <div className='text-row'>
            <h3>Phone:</h3>
            <p>{student.phone}</p>
          </div>
          
        </form>
      </div>
    )
  }


  export default StudentTile