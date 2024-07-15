import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Biografy from './Biografy';
import FamousPicture from './FamousPicture';
import Pictures from './Pictures';

function Nav() {
  const mainDiv = {
    display: 'flex',
    justifyContent: 'space-around'
  };
 return (<nav style={mainDiv}>
    <NavLink to={"/biografy/300"}>Biografy</NavLink>
    <NavLink to={"/famous-picture/300/300"}>Famous picture</NavLink>
    <NavLink to={"/pictures/5"}>Pictures</NavLink>
  </nav>);
}

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h2>Leonardo Da Vinci</h2>}/>
          <Route path='/biografy/:maxLength' element={<Biografy/>}/>
          <Route path='/famous-picture/:width/:height' element={<FamousPicture/>}/>
          <Route path='/pictures/:maxCount' element={<Pictures/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;