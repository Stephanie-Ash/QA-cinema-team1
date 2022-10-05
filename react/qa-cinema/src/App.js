import './App.css';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
