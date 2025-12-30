
import { Todo } from "../models/todo"
import { ApiResponse } from "../models/ApiResponse"
import { createResponse } from "../utils/createResponse"



export function getTodos(): ApiResponse<Todo[]>{
    return createResponse([
        {id : 1, title : " Learn Typescript" , completed : false},
        {id : 2, title : "Build React UI" , completed: true},
        {id : 2, title : "Build React UI" , completed: true}

    ])
}