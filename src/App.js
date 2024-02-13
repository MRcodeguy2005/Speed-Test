import Box from './components/Box/Box';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import './App.css';
import './components/Box/Box.css';
import './components/Nav/Nav.css';
import './components/About/About.css'
import git from './github.svg';
import logo from './logo.svg';
import ham from './components/Images/Hamburger.svg'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
    
    return (
      
      <>
        <Nav sr={git} lg={logo} Ham={ham} />
        <div id="element1">
        <Routes>
            <Route path='/' element={<Box/>}/>
            <Route path='/About' element={<About/>}/>
        </Routes>
        </div>
      </>
    
    
  );
}

export default App;
