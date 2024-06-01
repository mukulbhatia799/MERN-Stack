

export function Todo({todo}) {
    return (
        <>
            <h1>Title: {todo.title}</h1>
            <p>Description: {todo.description}</p><hr />
        </>
    )
}