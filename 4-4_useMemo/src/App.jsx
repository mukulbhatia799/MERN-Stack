import {useState, useMemo, useEffect} from 'react'

function App() {
  let [counter, setCounter] = useState(0);
  let [inputValue, setInputValue] = useState(0);

  // when counter get updated, this for loop runs again which doesn't need as the inputValue is still same. So, we can use useMemo(memoization) and give dependency to loop only when the inputValue changes.
  // useMemo(setup, [dependencies])
  
  // let sum1ton = 0;
  // for(let i = 1; i <= inputValue; i++) {
  //   sum1ton += i;
  // }


  // using useMemo:- (optimal approach)
  // let findSum = useMemo(() => {
  //   console.log("memo get called"); // only prints when input value get changed.
  //   let sum1ton = 0;
  //   for(let i = 1; i <= inputValue; i++) {
  //     sum1ton += i;
  //   }
  //   return sum1ton;
  // }, [inputValue]);


  // (another approach) is using useEffect, works same as useMemo but there is an extra call/render done when we set the sumValue value. As, when state changes, the function re-rendered.
  const [sumValue, setSumValue] = useState(0);
  useEffect(() => {
    let findSum = 0;
    for(let i = 1; i <= inputValue; i++) {
      findSum += i;
    }
    setSumValue(findSum);
  }, [inputValue])
  

  return (
    <div>
      <label>Enter value: </label>
      <input onChange={(e) => {
        setInputValue(e.target.value);
      }} placeoholder="Find sum from 1 to n"></input>
      <p>Result: {sumValue}</p>
      <button onClick={() => {
        setCounter(counter+1);
      }}>Counter: {counter}</button>
    </div>
  )

}

export default App


// memo() and useMemo() are different. memo only renders when the props passed gets changed. Whereas, the useMemo() only gets renders when the dependency value gets changed.