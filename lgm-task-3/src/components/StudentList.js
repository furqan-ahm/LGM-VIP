import React from 'react'
import StudentTile from './StudentTile'




const StudentList=({data})=>{
    console.log(data);
    return (
        <div className='list'>
          <h2>Registered Students</h2>
          {data.map((item)=>{return (<StudentTile student={item}/>)})}
        </div>
    )
}


export default StudentList