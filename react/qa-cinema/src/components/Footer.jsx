import '../nav.css'
import { Link } from "react-router-dom";

const Footer = () => {


  return (

    <>
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}

          {/* Section: Social media */}
          {/* Section: Text */}

          {/* Section: Text */}
          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <Link className="col" role="button" href="/">
                <h5 className="text-uppercase" >Home</h5>
              </Link>
              {/*Grid column*/}
              {/*Grid column*/}
              <Link className="col" href="/">
                <h5 className="text-uppercase" role="button" >About Us</h5>
              </Link>
              {/*Grid column*/}
              {/*Grid column*/}
              <Link className="col" href="/">
                <h5 className="text-uppercase" role="button" >Contact Us</h5>
              </Link>
              {/*Grid column*/}
              {/*Grid column*/}
              <Link className="col" href="/">
                <h5 className="text-uppercase" role="button" >FAQ</h5>
              </Link>
              {/*Grid column*/}
            </div>

            {/*Grid row*/}
          </section>
          <br></br>
          <br></br>
          <section className="mb-4">
            <p>
              At QA Cinemas wew strive to provide the best screening experiences for our customers. Please feel free to contact us if you have any queries or would like to arrange a private screeening.
            </p>
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <section className="mb-4">
          {/* Facebook */}
          <button type="button"

            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
          </button>


          {/* Twitter */}
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          </button>
          {/* Google */}
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://flickr.com"><i className="fab fa-flickr"></i></a>
          </button>
          {/* Instagram */}
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </button>
          {/* Linkedin */}
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </button>
          {/* Github */}
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://github.com/Stephanie-Ash/QA-cinema-team1"><i className="fab fa-github"></i></a>
          </button>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://www.qa.com/">
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