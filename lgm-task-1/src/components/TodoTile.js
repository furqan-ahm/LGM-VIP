import React from 'react'

import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function TodoTile({todo, index, setEdit, removeTodo, completeTodo}) {
  return (
    <div
      className={todo.isComplete?'todo-row complete':'todo-row'}
      key={index}    
    >
        <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine
              onClick={()=>{removeTodo(todo.id)}}
              className='delete-icon'
            />
            <TiEdit
              onClick={()=>{console.log('hehe');setEdit({id: todo.id, value: todo.text})}}
              className='edit-icon'
            />
        </div>
    </div>
  )
}

export default TodoTile