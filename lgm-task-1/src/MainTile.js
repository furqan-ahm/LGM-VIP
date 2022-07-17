import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import {BiSad} from 'react-icons/bi'
import {FaClipboardList} from 'react-icons/fa'


import { useState } from 'react'

function MainTile() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
      if(!todo.text){
          return
      }
  
      const newTodos=[todo, ...todos];
  
      setTodos(newTodos);
      console.log(...todos);
    }
  
    const updateTodo = (todoId, newValue) => {
      if(!newValue.text){
        return
      }
  
      setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue : item)))
    }
  
  
    const removeTodo=id=>{
      const remainingTodos=[...todos].filter(todo=>todo.id!==id);
  
      setTodos(remainingTodos)
    }
  
  
    const completeTodo= id => {
      let updatedTodos = todos.map(todo=>{
          if(todo.id===id){
              todo.isComplete=!todo.isComplete;
          }
          return todo;
      })
  
      setTodos(updatedTodos)
    }
  

  return (
    <div>
        <div className='rounded-container'>
            <FaClipboardList size={54} color='white' alignmentBaseline='central'/>          
            <h1>LGM To-Do List Web App</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
        <div className='rounded-container'>
            {(todos.length!==0)?<div/>:<BiSad color='white' size={49}/>}
            <h2>{(todos.length===0)?'Got nothing to do!':'Things you have to do'}</h2>
            <TodoList
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    </div>
  )
}

export default MainTile