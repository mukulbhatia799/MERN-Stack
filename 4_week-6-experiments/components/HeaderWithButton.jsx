import { useState } from "react"
import { Header } from "./Header"

export function HeaderWithButton() {
    const [title, setTitle] = useState("My name is Mukul Bhatia.");
    function titleChangeOnClick() {
        setTitle("My name is " + Math.random());
    }
    return (
        <div>
            <button onClick={titleChangeOnClick}>Click me to change title</button>
            <Header title={title}/>
        </div>
    )
}