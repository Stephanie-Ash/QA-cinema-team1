import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import OpeningTimes from './components/Openingtimes/OpeningTimes.jsx';
import Home from './components/home/Home.jsx';

function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <OpeningTimes/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;

