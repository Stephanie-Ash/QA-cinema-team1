import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './components/home/home.jsx';
import Screens from './components/screens/screens.jsx';
import OpeningTimes from './components/Openingtimes/OpeningTimes.jsx';
import PlacesToGo from './components/PlacesToGo/PlacesInfo';
import Footer from './components/Footer.jsx';
import Listings from './components/listings/Listings';
import WhatsOn from './components/listings/whatson/WhatsOn';
import Film from './components/listings/films/Film';
import FindUs from './components/findus/Findus.jsx';

function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='openingtimes' element={<OpeningTimes />} />
        <Route path='placestogo' element={<PlacesToGo />} />
        <Route path="screens" element={<Screens />} />
        <Route path='listings' element={<Listings />}>
          <Route path='whatson' element={<WhatsOn />} />
          <Route path='film/:id' element={<Film />} />
        </Route>
        <Route path="/findus" element={<FindUs />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;

