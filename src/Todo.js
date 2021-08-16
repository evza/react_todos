import './App.css';
import React from 'react'
import  {todos, setTodos} from './App.js'


export default function Todo() {

    function handleDeleteTodo(todoToDelete) {
        const filteredTodos = todos.filter(todo => todo.id !== todoToDelete.id )
        setTodos(filteredTodos)
       }

    return (
      <ul>
        {todos.map((todo) => <>
        <li key={todo.id}>{todo.text}</li>
        <button onClick={() => handleDeleteTodo(todo)}>delete</button>
        </>)}
    </ul>
    )
}
