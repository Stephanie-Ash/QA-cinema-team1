import './App.css';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Screens from './components/screens/screens.jsx';
import OpeningTimes from './components/Openingtimes/OpeningTimes.jsx';
import Home from './components/home/home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <OpeningTimes/>
      <Routes>
        <Route path="/screens" element={<Screens />}/>
      <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;

