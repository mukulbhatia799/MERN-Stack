import {useState} from 'react'

function App() {
  return (
    <div>
      <CardWrapper>
        <TextComponent /> {/* Here, TextComponent is a children of CardWrapper. This is called wrapper component. */}
      </CardWrapper>
      
      <CardWrapper>
        <CardWrapper>
          <TextComponent />
        </CardWrapper>
      </CardWrapper>
    </div>
  )
}

function TextComponent() {
  return (
    <div>Hi there</div>
  )
}

function CardWrapper({children}) {
  return (
    <div style={{border: "1px solid black", margin: "10px", padding: "5px"}}>
      {children}
    </div>
  )
}

export default App;