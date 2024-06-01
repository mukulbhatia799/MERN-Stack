import { useState } from 'react'    // here useState is a hook.
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';


function App() {
  const [todos, setTodos] = useState([]);

  // this is not the right way to send the request in an express application. Right way** is using useEffect hook.
  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);   // using fetch() is not the right way because when setTodos gets called, the App() gets renders again and again.
    })
  return (
    <div>
      <CreateTodo />    {/* Creating the todo */}
      {/* or <CreateTodo></CreateTodo> */}
      <Todos todos={todos}></Todos>   {/* rendering the todos. */}
    </div>
  )
}

export default App
