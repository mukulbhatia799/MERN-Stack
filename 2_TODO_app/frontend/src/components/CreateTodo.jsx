import { useState } from "react";
// modern way to export.
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        // inline styling in react.
        <div style={{border: "1px solid black", backgroundColor: "lightgrey"}}>
            <input type="text" placeholder="Enter title" onChange={(e) => {
                const value = e.target.value;
                setTitle(e.target.value);
            }
            }></input><br /><br />
            <input type="text" placeholder="Enter description" onChange={(e) => {
                const value = e.target.value;
                setDescription(e.target.value);
            }
            }></input><br /><br />
            
            <button onClick={() => {
                // using axios, it is much simple syntax rather than this.
                /*

                 using axios:
                 1. npm i axios
                 2. now code.
                 axios.post("http://localhost:3000/todos", {
                    username: title,
                    password: description
                 })

                */
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        username: title,
                        password: description
                    }),
                    headers: {
                        "Cotent-type": "application/json"
                    }
                })
                .then(async (res) => {
                    const json = await res.json();
                    alert("Todo added");
                })
            }}>Add todo</button>
        </div>
    )
}


/* traditional way to export.

module.export = {
    CreateTodo
}

*/