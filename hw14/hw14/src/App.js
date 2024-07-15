import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Info from './Info';
import Sight from './Sight';
import Sights from './Sights';
import Images from './Images';

function Nav() {
  const mainDiv = {
    display: 'flex',
    justifyContent: 'space-around'
  };
  return (<nav style={mainDiv}>
    <NavLink to={"/info/300"}>Information</NavLink>
    <NavLink to={"/sight/300/300"}>Famous picture</NavLink>
    <NavLink to={"/sights/5"}>Sights</NavLink>
    <NavLink to={"/images/5"}>Images</NavLink>
  </nav>);
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h2>Krywyj Rih</h2>} />
          <Route path='/info/:maxLength' element={<Info />} />
          <Route path='/sight/:width/:height' element={<Sight />} />
          <Route path='/sights/:maxCount' element={<Sights />} />
          <Route path='/images/:maxCount' element={<Images />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;