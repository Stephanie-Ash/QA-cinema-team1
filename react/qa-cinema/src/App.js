import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './components/home/home.jsx';
import Screens from './components/screens/screens.jsx';
import OpeningTimes from './components/Openingtimes/OpeningTimes.jsx';
import Footer from './components/Footer.jsx';
import WhatsOn from './components/listings/whatson/WhatsOn';

function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/openingtimes" element={<OpeningTimes />} />
        <Route path="/screens" element={<Screens />} />
        <Route path='/' element={<Home />} />
        <Route path='/whatson' element={<WhatsOn />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;

