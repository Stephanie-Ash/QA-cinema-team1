import '../nav.css'

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
          <a className="col" role = "button" href = "">
            <h5 className="text-uppercase" >Home</h5>
          </a>
          {/*Grid column*/}
          {/*Grid column*/}
          <a className="col">
            <h5 className="text-uppercase" role = "button" href = "">About Us</h5>
          </a>
          {/*Grid column*/}
          {/*Grid column*/}
          <a className="col">
            <h5 className="text-uppercase" role = "button" href = "">Contact Us</h5>
          </a>
          {/*Grid column*/}
          {/*Grid column*/}
          <a className="col">
            <h5 className="text-uppercase" role = "button" href = "" >FAQ</h5>
          </a>
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

          class="btnfoot"
          role="button"
        >
           <a target="_blank" class="fab fa-facebook-f" href="https://www.facebook.com/"></a>
        </button>

        
        {/* Twitter */}
        <button
          class="btnfoot"
          role="button"
        >
           <a target="_blank" class="fab fa-twitter" href="https://twitter.com"></a>
        </button>
        {/* Google */}
        <button
          class="btnfoot"
          role="button"
          
        >
          <a target="_blank" class="fab fa-flickr" href="https://flickr.com"></a>
        </button>
        {/* Instagram */}
        <button
          class="btnfoot"
          role="button"
        >
          <a target="_blank" class="fab fa-instagram" href="https://instagram.com"></a>
        </button>
        {/* Linkedin */}
        <button
          class="btnfoot"
          role="button"
        >
          <a target="_blank" class="fab fa-linkedin-in" href="https://linkedin.com"></a>
        </button>
        {/* Github */}
        <button
          class="btnfoot"
          role="button"
        >
          <a target="_blank" class="fab fa-github" href="https://github.com/Stephanie-Ash/QA-cinema-team1"></a>
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