import React from 'react'
import { IndivTodo } from './IndivTodo'

export const Todos = ({todos, deleteTodo, editModal}) => {
    return todos.map((individualTodo)=>(
        <IndivTodo individualTodo={individualTodo} 
        key={individualTodo.id} deleteTodo={deleteTodo}
            editModal={editModal}
        />
    ))
}