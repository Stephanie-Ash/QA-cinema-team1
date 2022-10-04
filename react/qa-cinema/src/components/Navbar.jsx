import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {


    return (
        <header>
            <nav class="navbar navbar-expand-lg" >
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#"><img src={logo} /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="#">What's On</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">Upcoming</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">Booking</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">Discussions</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cinema Info
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="#">Opening Times</Link></li>
                                    <li><Link class="dropdown-item" to="#">Classifications</Link></li>
                                    <li><Link class="dropdown-item" to="#">Places to Go</Link></li>
                                    <li><Link class="dropdown-item" to="#">Find Us</Link></li>
                                    <li><Link class="dropdown-item" to="#">Contact Us</Link></li>
                                    <li><Link class="dropdown-item" to="#">About Us</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search Term" aria-label="Search" />
                            <button class="btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



        </header>
    )

}

export default Navbar;