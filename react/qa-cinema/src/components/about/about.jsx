import './about.css';

import Stephanie from "../../images/Steph.png"
import Kishan from "../../images/Kishan.png"
import Leo from "../../images/Leo.png"
import Rebecca from "../../images/Rebecca.png"

import { Link } from 'react-router-dom'





const About = () => {

  return (

    <div className="mainbox">
      <h1>About Us</h1>
      <br></br>
      <br></br>
      <div className="parent">
        <div className="child">
          <img
            className="rounded-circle"
            src={Stephanie}
            alt="Stephanie PFP"
            width={140}
            height={140}
          />
          <h2>Stephanie Ashdown</h2>
          <p>
            I enjoyed the challenge of working on this project and it was great for improving my skills particularly with React. I worked on the bookings system.
          </p>

          <button type="button"

            className="btnabt button2"
          >
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stephanie-ashdown/"><i className="fa-brands fa-linkedin-in"></i></a>
          </button>

          <button type="button"


            className="btnabt"
          >
            <a target="_blank" rel="noreferrer" href="https://github.com/Stephanie-Ash"><i className="fa fa-github"></i></a>
          </button>
          <p>
            <b>Email: sashdown@qa.com</b>
          </p>
        </div>
        {/* /.col-lg-4 */}
        <div className="child">
          <img
            className="rounded-circle"
            src={Kishan}
            alt="Kishan PFP"
            width={140}
            height={140}
          />
          <h2>Kishan Kunvardia</h2>
          <p>
            I worked on both the frontend and backend of this project. Working on the search functionality taught me a lot about React and Express.
          </p>

          <button type="button"

            className="btnabt button2"
          >
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kishankunvardia/"><i className="fa-brands fa-linkedin-in"></i></a>
          </button>

          <button type="button"

            className="btnabt"
          >
            <a target="_blank" rel="noreferrer" href="https://github.com/kishankunvardia"><i className="fa fa-github"></i></a>
          </button>
          <p>
            <b>Email: kkunvardia@qa.com</b>
          </p>
        </div>
        {/* /.col-lg-4 */}
        <div className="child">
          <img
            className="rounded-circle"
            src={Leo}
            alt="Leo PFP"
            width={140}
            height={140}
          />
          <h2>Leo Gornovskiy</h2>
          <p>
            I enjoyed learning React for this project. I created this page and worked on the footer.
          </p>
          <button type="button"

            className="btnabt button2"
          >
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lng96/"><i className="fa-brands fa-linkedin-in"></i></a>
          </button>
          <button type="button"

            className="btnabt"
          >
            <a target="_blank" rel="noreferrer" href="https://github.com/lng1996"><i className="fa fa-github"></i></a>
          </button>

          <p>

            <b>Email: lgornovskiy@qa.com</b>
          </p>
        </div>
        {/* /.col-lg-4 */}
        <div className="child">
          <img
            className="rounded-circle"
            src={Rebecca}
            alt="Rebecca PFP"
            width={140}
            height={140}
          />
          <h2>Rebecca Swinton</h2>

          <p>
            I worked on both the frontend and backend for this project. My most challenging task was adding the functionality for the discussions page.
          </p>
          <button type="button"

            className="btnabt button2"
          >
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rebecca-lswinton/"><i className="fa-brands fa-linkedin-in"></i></a>
          </button>
          <button type="button"

            className="btnabt"
          >
            <a target="_blank" rel="noreferrer" href="https://github.com/rebeccaswinton"><i className="fa fa-github"></i></a>
          </button>
          <p>
            <b>Email: rswinton@qa.com</b>
          </p>

        </div>
        {/* /.col-lg-4 */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <center>
        <h2>Coding is our Passion</h2>
        <br></br>
        We are a team of trainee programmers. We have been working on this site as an exerecise to consolidate our knowledge in non-relational databases like MongoDB and coding languages like HTML, CSS and JavaScript.

        <p>This Page is about the team who created this web if you would like to contact the cinema please visit the <Link className='about-link' to={'/contact'}>Contact Page.</Link></p>
      </center>


    </div>



  )
}
export default About;