
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { Landing} from '../components/Landing'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppTopBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppTopBar() {
  const navigate = useNavigate();   // useNavigate() hook cannot be used other the Router. Should be declared inside the Router or in the child of Router.
  // when using useNavigate() hook instead of location.href, the page will not load and the response will be pretty instant.
  // In inspect->Network, we can see that when we use useNavigate() the html is not coming from the backend, whereas using location.href, there is a load and html is coming from backend.
  return <div>
      <div style={{color: "white", backgroundColor: "green"}}>
        Hi, this is the top bar
      </div>
      <button onClick={() => {
        // window.location.href again requ
        // window.location.href = "/";   // As, we have to perform client side routing which is better than server side routing. So, to perform client side routing, we will use useNavigate() hook.
        navigate("/");
      }}>Landing page</button>
      <button onClick={() => {
        // window.location.href = "/Dashboard"
        navigate("/dashboard");
      }}>Dashboard page</button>
  </div>
}

export default App