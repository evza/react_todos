import './App.css';
import { Todo } from './Todo'
import { useState} from 'react'
 
function App() {
  const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState([]);
 
  function handleClick(event) {
    event.preventDefault()
    setTodos([...todos, todo])
    setTodo({text: ''})
  }
 
  function handleChangeTodo(event) {
    setTodo({id: todos.length + 1, text: event.target.value})
  } 
 
  return (
  <>
    <form >
    <input onChange={handleChangeTodo} value={todo.text}></input>
    <button type="submit" onClick={handleClick}>Save todo</button>
    </form>     
    <Todo/>
  </>
 );
}
 
export default App;