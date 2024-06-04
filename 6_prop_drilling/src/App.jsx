/*
how do you think one should one manage state?
1. Keep everything in the top level component (C1)
2. Keep everything as low as possible
(at the LCA(Lowest Common Ancestor) of children that need a state)
*/


/*
Either way, you will need to drill props down through the Component tree.
This gets very hard to maintain and highly verbose
Makes code highly unreadable
*/

/*
The drawback of {keep everyting in the top level component} is that if the child component get's rendered then the top level compoenent(suppose, App.jsx) will also get rendered which will reduce the performance.
*/

/*
Prop drilling doesn't mean that parent re-renders children It just means the {syntactic uneasiness} when writing code
*/

/*
The problem with passing props
Passing props is a great way to explicitly pipe data through your Ul tree to the components that use it.
But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called "prop drilling"
*/

/*
So, to solve the problem of prop drilling, we use the Context API. It's helps to pass state variables between components without drilling them down. It's like teleport from one component to another component. like: Parent -> C1 -> C2 -> C3. Teleporting state from Parent to C3.
*/


// let's use Context API to pass the state from component to LCA(Lowest Common Ancestors) components without drilling it down from parent -> c1 -> c2 -> .... -> LCA component.

import {useState, useContext} from 'react'      // 
import { CountContext } from './context';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>   {/* Context provides a way to pass data through the component tree without having to pass props manually at every level. */}
        <Count />
        <Buttons setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  // The useContext hook is used to consume values from a React context.
  const count = useContext(CountContext);     // we can use value using useContext() hook
  return <div>
    Result: {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>
    
  </div>
}


/*
  Ques: Does the context Api
  1. to make rendering performance great
  2. to make syntax cleaner/to get rid of prop drilling.

  Ans: to make syntax cleaner/to get rid of prop drilling.
  Because if we log the statement in child statement of App, they are still rendering. So, (problem with context API is that it doesn't fix re-rendering, only fixes prop drilling which makes syntax cleaner.)

  To get both (rendering performance great) + (to make syntax cleaner/to get rid of prop drilling), we use state management library recoil.
*/