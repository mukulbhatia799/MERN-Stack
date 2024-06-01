
// export function Todos(props) {
// modern way to take props is array destructing as we will have array of objects of todos.
export function Todos({todos}) {
    return (
        <div>
            {todos.map((todo) => {
                // inline styling in react.
                return <div style={{border: "1px solid black", backgroundColor: "lightblue",  margin: "15px"}}>
                    <h1>Title: {todo.title}</h1>
                    <h3>Description: {todo.description}</h3>
                    <button>{todo.completed? "Completed":"Mark as complete"}</button>
                </div>
            })}
        </div>
    )
}