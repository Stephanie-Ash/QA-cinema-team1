import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './components/home/home.jsx';
import Screens from './components/screens/screens.jsx';
import OpeningTimes from './components/Openingtimes/OpeningTimes.jsx';
import PlacesToGo from './components/PlacesToGo/PlacesInfo.jsx';
import Footer from './components/Footer.jsx';
import Listings from './components/listings/Listings.jsx';
import WhatsOn from './components/listings/whatson/WhatsOn.jsx';
import Upcoming from './components/listings/upcoming/Upcoming.jsx';
import Film from './components/listings/films/Film.jsx';
import FindUs from './components/findus/Findus.jsx';
import SearchPage from './components/search/searchpage';
import MakeBooking from "./components/bookings/makebooking/MakeBooking.jsx";
import Payment from "./components/bookings/payment/Payment.jsx";
import Confirmation from "./components/bookings/confirmation/Confirmation.jsx";
import Contact from './components/contact/Contact.jsx'
import Discussion from "./components/discussion/Discussion.jsx";

function App() {

  return (

    <BrowserRouter >
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='openingtimes' element={<OpeningTimes />} />
          <Route path='placestogo' element={<PlacesToGo />} />
          <Route path='screens' element={<Screens />} />
          <Route path='listings' element={<Listings />}>
            <Route path='whatson' element={<WhatsOn />} />
            <Route path='upcoming' element={<Upcoming />} />
            <Route path='film/:id' element={<Film />} />
          </Route>
          <Route path='makebooking' element={<MakeBooking />} />
          <Route path='payment' element={<Payment />}/>
          <Route path='booking/:bookingNum' element={<Confirmation />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="findus" element={<FindUs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='discussion' element={<Discussion />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

