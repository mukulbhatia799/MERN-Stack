import {useState, useEffect} from 'react';
import axios from 'axios';

let count = 0;

function App2() {
    const [todoID, setTodoID] = useState(1);
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <button onClick={() => {
                setTodoID(1)
            }}>1</button>
            <button onClick={() => {
                setTodoID(2)
            }}>2</button>
            <button onClick={() => {
                setTodoID(3)
            }}>3</button>
            <button onClick={() => {
                setTodoID(4)
            }}>4</button>
            <Todo todoID={todoID} todos={todos} setTodos={setTodos} />
        </div>
    )
}

function Todo({todoID, todos, setTodos}) {
    // const [todo, setTodo] = useState({});
    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${todoID}`)
         .then(res => {
            // setTodo(res.data.todo);
            setTodos([...todos, {
                title: res.data.todo.title,
                description: res.data.todo.description
            }])
         })
    }, [todoID])

    return (
        <div>
            {/* <h1>{todo.title}</h1>
            <p>{todo.description}</p> */}
            {todos.map(todo => <div>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
            </div>)}
        </div>
    )
}


export default App2