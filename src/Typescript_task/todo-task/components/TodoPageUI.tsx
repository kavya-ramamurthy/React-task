import React, { useEffect, useState } from 'react'
import { getTodos } from '../services/todoService'
import { Todo } from '../models/todo'
import { Todolist } from './TodoList'



function TodoPageUI() {
    const [todos, setTodos]= useState <Todo[]>([])


    useEffect(()=>{
        const response = getTodos()
        setTodos(response.data)
    }



)



  return (
    <div>
        <h1>Type-Safe Todo App</h1>
        <Todolist  todos ={todos}/>
      
    </div>
  )
}

export default TodoPageUI
