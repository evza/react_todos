import './App.css';
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

  function Todo() {

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