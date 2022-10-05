import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Screens from './components/screens/screens.jsx';

function App() {
  return (


    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/screens" element={<Screens />}>

        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
