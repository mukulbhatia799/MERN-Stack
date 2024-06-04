/*
Things to learn -
RecoilRoot
atom
useRecoilState
useRecoilValue
useSetRecoilState
selector
*/

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, oddSelector } from '../store/atoms/count'
import { useMemo, useState } from 'react'

function App() {
  return (
    <div>
      {/* Components that use recoil state need RecoilRoot to appear somewhere in the parent tree. A good place to put this is in your root component */}
      <RecoilRoot>
        <Count />
      </ RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-rendered => count()");   // As we can see, that the Count() only rendered once. So, no re-rendering happens.
  
  return <div>
    <CountRenderer />
    <Buttons />
    <CheckEvenOrOdd />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  console.log("re-rendered -> buttons()");
  // const [count, setCount] = useRecoilState(countAtom);

  const setCount = useSetRecoilState(countAtom);    // using useSetRecoilState(), the Buttons() will also not re-render as the count value is not updating here. If we have created count using useRecoilState() then Buttons() will re-render;
  
  return <div>
    <button onClick={() => {
      setCount(count => count+1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count-1);
    }}>Decrease</button>
  </div>
}

function CheckEvenOrOdd() {
  const isOdd = useRecoilValue(oddSelector);
  // if(count & 1) {
  //   return <div>{"It is odd"}</div>
  // }
  // better way:- As we need to print only when the count value changed. so, useMemo()
  return <div>
    {isOdd ? "It is odd":null}
  </div>
}


/*
function InputData() {
  const [inputdata, setInputdata] = useState("");   // here we don't need the recoil. Use recoil for global state only. 

  return <div>
    <input onChange={(e) => {
      setInputdata(e.target.value);
    }} />
  </div>
}
*/



export default App