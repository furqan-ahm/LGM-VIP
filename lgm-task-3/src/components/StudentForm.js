import React from 'react'
import { useState } from 'react';



const StudentForm=({addStudents})=>{
    
    
    const [id, setId]=useState('')
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')

    
    const register=()=>{
        if(id&&name&&email&&phone){
            addStudents({
                'name':name,
                'id':id,
                'email':email,
                'phone':phone
            });
            setId('')
            setName('')
            setEmail('')
            setPhone('')
        }
    }
    
    return (
        <form>
          <h2>Student Registration Form</h2>
          <div className='input-row'><p>Student Id:</p><input className='text-box' type='text' value={id} onChange={(val)=>setId(val.currentTarget.value)}/></div>
          <div className='input-row'><p>Student Name:</p><input className='text-box' type='text' value={name} onChange={(val)=>setName(val.currentTarget.value)}/></div>
          <div className='input-row'><p>Student Email:</p><input className='text-box' type='text' value={email} onChange={(val)=>setEmail(val.currentTarget.value)}/></div>
          <div className='input-row'><p>Student Phone:</p><input className='text-box' type='text' value={phone} onChange={(val)=>setPhone(val.currentTarget.value)}/></div>
          <div className='button' onClick={()=>{register()}}>
            <p>Register</p>
          </div>        
        </form>
    )
}



export default StudentForm