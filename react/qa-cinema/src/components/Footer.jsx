import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

const Footer = () => {


    return (
<>
  {/* Footer */}
  <footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <li
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
           <a target="_blank" class="fab fa-facebook-f" href="https://www.facebook.com/"></a>
        </li>

        
        {/* Twitter */}
        <li
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
           <a target="_blank" class="fab fa-twitter" href="twitter.com"></a>
        </li>
        {/* Google */}
        <li
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <a target="_blank" class="fab fa-flickr" href="flickr.com"></a>
        </li>
        {/* Instagram */}
        <li
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <a target="_blank" class="fab fa-instagram" href="instagram.com"></a>
        </li>
        {/* Linkedin */}
        <li
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <a target="_blank" class="fab fa-linkedin-in" href="linkedin.com"></a>
        </li>
        {/* Github */}
        <li
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <a target="_blank" class="fab fa-github" href="https://github.com/Stephanie-Ash/QA-cinema-team1"></a>
        </li>
      </section>
      {/* Section: Social media */}
      {/* Section: Text */}
      <section className="mb-4">
        <p>
          At QA Cinemas wew strive to provide the best screening excperiences for our customers. Please feel free to contact us if you have any queries or would like to arrange a private screeening. 
        </p>
      </section>
      {/* Section: Text */}
      {/* Section: Links */}
      <section className="">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <a className="col-lg-3 col-md-6 mb-4 mb-md-0" role = "button" href = "google.com">
            <h5 className="text-uppercase" >Home</h5>
          </a>
          {/*Grid column*/}
          {/*Grid column*/}
          <a className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase" role = "button" href = "google.com">About Us</h5>
          </a>
          {/*Grid column*/}
          {/*Grid column*/}
          <a className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase" role = "button" href = "google.com">Contact Us</h5>
          </a>
          {/*Grid column*/}
          {/*Grid column*/}
          <a className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase" role = "button" href = "google.com">FAQ</h5>
          </a>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2022 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        QAC 
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>





    )

}

export default Footer;