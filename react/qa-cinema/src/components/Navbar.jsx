import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import '../nav.css'

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
                                <Link className="nav-link" to="/whatson">What's On</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Booking</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Discussions</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cinema Information
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/openingtimes">Opening Times</Link></li>
                                    <li><Link className="dropdown-item" to="#">Classifications</Link></li>
                                    <li><Link className="dropdown-item" to="#">Places to Go</Link></li>
                                    <li><Link className="dropdown-item" to="#">Find Us</Link></li>
                                    <li><Link className="dropdown-item" to="#">Contact Us</Link></li>
                                    <li><Link className="dropdown-item" to="#">About Us</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Term" aria-label="Search" />
                            <button className="btnav" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



        </header>
    )

}

export default Navbar;