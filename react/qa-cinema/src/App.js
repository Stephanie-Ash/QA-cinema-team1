import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import OpeningTimes from './components/Openingtimes/OpeningTimes.jsx';
import Home from './components/home/home.jsx';
import PlacesToGo from './components/PlacesToGo/PlacesInfo';

function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/openingtimes' element={<OpeningTimes/>}/>
      <Route path='/placestogo' element={<PlacesToGo/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;

