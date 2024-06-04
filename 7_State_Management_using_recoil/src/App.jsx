/*
Things to learn -
RecoilRoot
atom
useRecoilState
useRecoilValue
useSetRecoilState
selector
*/

import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from '../store/atoms/count'
import { useState } from 'react'

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

function InputData() {
  const [inputdata, setInputdata] = useState("");   // here we don't need the recoil. Use recoil for global state only. 

  return <div>
    <input onChange={(e) => {
      setInputdata(e.target.value);
    }} />
  </div>
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(() => count+1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(() => count-1);
    }}>Decrease</button>
  </div>
}

export default App