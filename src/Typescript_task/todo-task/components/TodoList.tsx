   
import {Todo} from "../models/todo"


interface TodoListProps{
    todos : Todo[]
}

  export function Todolist({todos}: TodoListProps){
    return (
        <>
        
        <ul>
            { todos.map(todo =>(
                <li key ={todo.id}>
                    {todo.title} -{todo.completed? "Yes" : " NO"}

                </li>
            ))

            }
        </ul>
        
        
        </>
    )
   }