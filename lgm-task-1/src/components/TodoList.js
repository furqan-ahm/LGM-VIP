import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoTile from './TodoTile'


function TodoList({todos, completeTodo, removeTodo, updateTodo}) {
  
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id||edit.id===0) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => TodoTile({todo, index, setEdit, removeTodo, completeTodo}));
}

export default TodoList