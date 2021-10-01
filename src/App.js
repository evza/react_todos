import './App.css';
import React, { useState, useEffect } from 'react'
 
function getTodoFromLocalStorage() {
  console.log('get from local storage')
  return localStorage.getItem('todo') || ''
}

function getTodos() {
  // return fetch('http://...') или
  return Promise.resolve([{id:1, text:'Lean React'}, {id:2, text:'Learn Redux'}])
  // заглушка для fetch данных из backend
}

function App() {
 
 const [todo, setTodo] = useState(getTodoFromLocalStorage)
 const [todos, setTodos] = useState([]);
//  const[loading, setLoading] = useState(false)

//  useEffect(() => {
//   setLoading(true)
//   // fetch('hhtp').then(data =>setState(data))data.json()
//   getTodos().then(data => setTodos(data))
//  },[])
 
 useEffect(() => {
 console.log('todo changed')
 localStorage.setItem('todo', todo)
 },[todo])
 
//  useEffect(()=> {
//    console.log('changed todos')
//  },[todos])


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
 
// if(loading) {
//   return <div>Loading...</div>
// }

 return (
 <div>
 <form >
 <input onChange={handleChangeTodo} value={todo}></input>
 <button type="submit" onClick={handleClick}>Save todo</button>
 </form>
 
  {/* key повесили на реакт фрагмент */}

 <ul>
 {todos.map((todo) => <React.Fragment key = {todo.id}>
 <li>{todo.text}</li>
 <button onClick={() => handleDeleteTodo(todo)}>delete</button>
 </React.Fragment>)}
 </ul>
 </div>
 );
}
 
export default App;