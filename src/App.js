import './App.css';
import { useState, useEffect } from 'react'
 
function getTodoFromLocalStorage() {
  console.log('get from local storage')
  return localStorage.getItem('todo') || ''
}

function App() {
 
 const [todo, setTodo] = useState(getTodoFromLocalStorage)
 const [todos, setTodos] = useState([]);
 
 useEffect(() => {
 console.log('todo changed')
 localStorage.setItem('todo', todo)
 },[todo])
 
 useEffect(()=> {
   console.log('changed todos')
 },[todos])

 function handleClick(event) {
 event.preventDefault()
 setTodos([...todos, {id: todos.length + 1, text: todo}])
 setTodo('')
 }
 
 function handleChangeTodo(event) {
 setTodo(event.target.value)
 }
 
 function handleDeleteTodo(todoToDelete) {
 
 const filteredTodos = todos.filter(todo => todo.id !== todoToDelete.id )
 setTodos(filteredTodos)
 }
 
 return (
 <div>
 <form >
 <input onChange={handleChangeTodo} value={todo}></input>
 <button type="submit" onClick={handleClick}>Save todo</button>
 </form>
 
 <ul>
 {todos.map((todo) => <>
 <li key={todo.id}>{todo.text}</li>
 <button onClick={() => handleDeleteTodo(todo)}>delete</button>
 </>)}
 </ul>
 </div>
 );
}
 
export default App;