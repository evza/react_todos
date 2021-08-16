import './App.css';
import { useState } from 'react'
 
function App() {
 const [todo, setTodo] = useState('')
 const [todos, setTodos] = useState([]);
 
 function handleSubmit(event) {
 event.preventDefault()
 setTodos([...todos, todo])
 setTodo('')
 }
 
 function handleChangeTodo(event) {
 
 setTodo(event.target.value)
 }
 return (
 <>
 <form >
 <input onChange={handleChangeTodo} value={todo}></input>
 <button onClick={handleSubmit}>Save todo</button>
 </form>
 <ul>
 {todos.map((todo) => <li key={todo}>{todo}</li>)}
 </ul>
 </>
 );
}
 
export default App;
