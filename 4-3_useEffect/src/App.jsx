/*

import {useState, useEffect} from 'react'

const count = 1;

function App() {

  const [todos, setTodos] = useState([]);

  // useEffect(setup, [dependencies])
  // using useEffect, the data is only render when the todos is empty(as we have set dependency to fetch only when the todos is empty[]).
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
   .then(async (res) => {
      const value = await res.json();
      setTodos([value]);
      console.log('value:');
      console.log(value);
   })
  }, [])

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title, description}) {
  return (
    <div>
      {console.log("Title: " + title)};
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
    </div>
  )
}

export default App;

*/



import {useState, useEffect} from 'react'
import axios from'axios'

function App() {
  const [todos, setTodos] = useState([]);

  // This App() will keep getting called. So, to stop fetching the data again and again, we are using useEffect() hook. So, the empty array dependency defines only run the first time when App() renders. Without useEffect(), the fetch() data will stuck in an infinite loop. As, setTodos will keep changing and when state changes, the App() will get rendered.


  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
     .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
      console.log("json Value", json);
     })
  }, [])

  // another way to fetching the data is using axios library.
  /* // npm i axios
  
  axios.get("fetch data link")
   .then( (res) => {              // we don't required to async await in axios, as it automatically detects the delay.
    const json = res.data.todos;
    setTodos(json);
    console.log(json);
   })


   // more simpler way to write it of axios http request.
     
  useEffect( () => {
    axios.get("https://sum-server.100xdevs.com/todos")
     .then( (res) => {
      setTodos(res.data.todos);
      console.log(res.data.todos);
     })
  }, [])


  */

  return (
    <div>
      {todos.map(todo => <div>
        <h1>Title: {todo.title}</h1>
        <h3>Description: {todo.description}</h3>
      </div>)}
    </div>
  )
}


// function RenderTodos({todos}) {
//   return (
//     <div>
      
//     </div>
//   )
// }


export default App