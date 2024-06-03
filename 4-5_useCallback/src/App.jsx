import { useState, useMemo, memo } from 'react'

// if you ever want to memoize a function, we use useCallback.
// 'useCallback' is a hook in React, a popular JavaScript library for building user interfaces. It is (used to memoize functions), which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary renders.

// we can't use a hook inside a normal function. To use hook, it should be a custom hook or a component. Like we can't create a state variable inside normal function using useState() hook.

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
    </>
  )
}

export default App
