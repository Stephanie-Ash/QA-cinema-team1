import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import '../nav.css';
import Searchbox from "./Searchbox.jsx";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/listings/whatson">What's On</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listings/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/makeBooking" state={{ chosenFilm: "", chosenScreen: "", chosenDate: "", chosenTime: "" }}>Booking</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/discussion">Discussions</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cinema Information
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/openingtimes">Opening Times</Link></li>
                                    <li><Link className="dropdown-item" to="/classifications">Classifications</Link></li>
                                    <li><Link className="dropdown-item" to="/placestogo">Places to Go</Link></li>
                                    <li><Link className="dropdown-item" to="/findus">Find Us</Link></li>
                                    <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                                    <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/login">Management Login</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <Searchbox />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;