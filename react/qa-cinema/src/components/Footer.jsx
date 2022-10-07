import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {


  return (

    <>
      <footer className="text-center">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <Link className="col footer-link" role="button" to="/">
                <h5 className="text-uppercase" >Home</h5>
              </Link>
              <Link className="col footer-link" to="/">
                <h5 className="text-uppercase" role="button" >About Us</h5>
              </Link>
              <Link className="col footer-link" to="/">
                <h5 className="text-uppercase" role="button" >Contact Us</h5>
              </Link>
              <Link className="col footer-link" to="/">
                <h5 className="text-uppercase" role="button" >FAQ</h5>
              </Link>
            </div>
          </section>
          <br></br>
          <br></br>
          <section className="mb-4">
            <p>
              At QA Cinemas wew strive to provide the best screening experiences for our customers. Please feel free to contact us if you have any queries or would like to arrange a private screeening.
            </p>
          </section>
        </div>
        <section className="mb-4">
          <button type="button"

            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
          </button>
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          </button>
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://flickr.com"><i className="fab fa-flickr"></i></a>
          </button>
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </button>
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          </button>
          <button
            className="btnfoot"
          >
            <a target="_blank" rel="noreferrer" href="https://github.com/Stephanie-Ash/QA-cinema-team1"><i className="fab fa-github"></i></a>
          </button>
        </section>
        <div className="text-center footer-copyright p-3">
          © 2022 Copyright:
          <a className="footer-link" href="https://www.qa.com/">
            QAC
          </a>
        </div>
      </footer>
    </>

  )

}

export default Footer;