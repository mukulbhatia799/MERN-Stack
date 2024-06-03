import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import LazyLoadingComponents from './LazyLoadingComponents'   // When importing a default export, do not use curly braces.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <LazyLoadingComponents />
  </React.StrictMode>
)