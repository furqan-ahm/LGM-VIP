import { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';



function App() {

  const [students, setStudents]=useState([])


  const addStudents=data=>{
    console.log(data);
    setStudents([...students,data])
  }


  return (
    <div className="App ">
      <div className='rounded-container'>
        <StudentForm addStudents={addStudents}/>
        <div className='divider'/>
        <StudentList data={students}/>
      </div>
    </div>
  );
}

export default App;
