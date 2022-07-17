import React, {useState, useEffect, useRef} from 'react'


function TodoForm(props) {

  const [input, setInput] = useState(props.edit? props.edit.value:'');
  const [id, setId] = useState(0);
  
  const inputRef=useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
  })

  const giveId=()=>{
      setId(id + 1)
      return id;
  }

  const handleChange = e =>{
    setInput(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
        id: (props.edit? props.edit.id : giveId()),
        text: input
    });

    setInput('')
  }

  return (
    <form className='todo-form'  onSubmit={handleSubmit}>
        <input
            type='text' 
            placeholder={props.edit?'Update your todo':'Add a todo'}
            value={input} 
            name='text' 
            className=  {props.edit?'todo-input edit':'todo-input'}
            onChange={handleChange}
            ref={inputRef}
        />
        <button className={props.edit?'todo-button edit':'todo-button'}>
            {props.edit?'Update':'Add Todo'}
        </button>
    </form>
  )
}

export default TodoForm