import { useState } from 'react'
import {Todo} from '../components/Todo'

// lets create a simple todo app that renders 3 todos.
/*
1. Create a todo component that accepts title, description as input.
2. Initialise a state array that has 3 todos.
3. Iterate over the array to render all the TODOs.
4. A button in the top level App component to add a new TODO.
*/

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Morning routine",
      description: "I will go for walk.",
    },
    {
      id: 2,
      title: "Evening routine",
      description: "Go a swimming."
    }
  ]);

  function createTodo() {
    // shorter way: using spread operator.
    setTodos([...todos, {
      id: todos.length+1,
      title: "Added new routine",
      description: "Full day routine."
    }])
    
    // lengthy way to doing this.

    // const newTodos = [];
    // for(let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   title: "new title",
    //   description: "new description"
    // })
    // setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={createTodo}>Click me to add TODO</button>
      {/* {todos.map(todo => <Todo todo={todo} />)} when we are rendering a list, then there should be a unique *key* to every object. suppose, we sorted, inserted or deleted some data, so react should know using those unique key id to re-render those updated data only. So, add key as done below. Try to remove that key expresssion. */}
      {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </div>
  )
}

export default App