import Sidebar from './components/Sidebar/Sidebar.js';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About.js';
import Skills from './pages/Skills/Skills.js';
import Project from './pages/projects/Project.js'

function App() {
  return (
    <>
      <Sidebar />
      <Home />
      <About />
      <Skills/>
      <Project />
    </>
  );
}

export default App;