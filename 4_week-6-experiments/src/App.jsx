import { useState } from 'react'
import { Header } from '../components/Header'
import { HeaderWithButton } from '../components/HeaderWithButton'

/*
function App() {
  let [title, setTitle] = useState("My name is Mukul Bhatia");

  return (
    // here if we are creating a <div> as a parent, then extra div element can be displayed in inspect->Elements section. But if we are using <>(empty) then any extra dom element is not there.
    // also we can use <React.Fragment></React.Fragment>
    <>
      <button onClick={() => {
        setTitle("My name is " + Math.random());
        // when setTitle() gets called, the App gets re-rendered. So, the App is a parent and all Header components are child. So, if the parent gets re-rendered then all it's child gets rendered even if there something is changing or not. So, this means we are re-rendering all components again and again. But, we are using react for minimizing the re-renders. 
        // Also, if the parent(here App) have state variables and if they change then the parent as well as all it's child will get re-rendered. So, we don't have to create state variables in App component.
        // So, we have to create separate function for that one changing title component so that rest all don't get rendered and we can minimize the re-renders. *Lets see in next attempt.*
      }}>Click Me to change title</button>
      <Header title={title}></Header>
      <Header title={"My brother name is Nikhil Bhatia"}></Header>
      <Header title={"My brother name is Nikhil Bhatia"}></Header>
      <Header title={"My brother name is Nikhil Bhatia"}></Header>
      <Header title={"My brother name is Nikhil Bhatia"}></Header>
    </>
  )
}

*/


/*
function App() {
  // here we can see that only headerWithButton component gets rendered when we have created separete component when button clicked.
  return (
    <div>
      <HeaderWithButton />
      <Header title={"My name is Mukul Bhatia."}/>
      <Header title={"My name is Mukul Bhatia."}/>
    </div>
  )
}

*/


// we have better way is by using *React.memo*. memo lets you skip re-rendering a component when its props are unchanged.
// best way to do it.

function App() {
  const [title, setTitle] = useState("My name is Mukul Bhatia");

  function changeTitleWhenClicked() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changeTitleWhenClicked}>Click me to change title.</button>
      <Header title={title}/>
      <Header title={"My name is Mukul Bhatia."}/>
      <Header title={"My name is Mukul Bhatia."}/>
      <Header title={"My name is Mukul Bhatia."}/>
      <Header title={title}/>
      <Header title={"My name is Mukul Bhatia."}/>
    </div>
  )
}
// As we can see, when we click on button, only the particular components whose props are changed gets re-rendered. So, using memo we can skip the unchanged props components.



export default App
