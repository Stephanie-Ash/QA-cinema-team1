import './about.css';

import Stephanie from "../../images/Steph.png"
import Kishan from "../../images/Kishan.png"
import Leo from "../../images/Leo.png"
import Rebecca from "../../images/Rebecca.png"





const About  = () => {
    
return (
    
<div className = "mainbox">
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
        Placeholder Text  
    </p>

    <button type="button"

    className="btnabt button2"
      >
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stephanie-ashdown/"><i class="fa-brands fa-linkedin-in"></i></a>
      </button>

      <button type="button"
      

className="btnabt"
>
<a target="_blank" rel="noreferrer" href="https://github.com/Stephanie-Ash"><i class="fa fa-github"></i></a>
</button>
    <p>
<b>Email:</b> 
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
        Placeholder Text  
    </p>

    <button type="button"

      className="btnabt button2"
      >
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kishankunvardia/"><i class="fa-brands fa-linkedin-in"></i></a>
      </button>

      <button type="button"

className="btnabt"
>
<a target="_blank" rel="noreferrer" href="https://github.com/kishankunvardia"><i class="fa fa-github"></i></a>
</button>
    <p>
    <b>Email:</b> 
    </p>
  </div>
  {/* /.col-lg-4 */}
  <div className="child">
    <img
      className="rounded-circle"
      src= {Leo}
      alt="Leo PFP"
      width={140}
      height={140}
    />
    <h2>Leo Gornovskiy</h2>
    <p>
        Placeholder Text  
    </p>
    <button type="button"

      className="btnabt button2"
      >
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lng96/"><i class="fa-brands fa-linkedin-in"></i></a>
      </button>
      <button type="button"

className="btnabt"
>
<a target="_blank" rel="noreferrer" href="https://github.com/lng1996"><i class="fa fa-github"></i></a>
</button>
      
    <p>
      
<b>Email:</b> 
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
      Placeholder Text 
    </p>
    <button type="button"

      className="btnabt button2"
    >
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rebecca-lswinton/"><i class="fa-brands fa-linkedin-in"></i></a>
    </button>
    <button type="button"

className="btnabt"
>
<a target="_blank" rel="noreferrer" href="https://github.com/rebeccaswinton"><i class="fa fa-github"></i></a>
</button>
    <p>
    <b>Email:</b> 
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


<center>
<h2>Coding is our Passion</h2>
<br></br>

We are a team of trainee programmers. We have been working on this site as an exerecise to consolidate our knowledge in non-relational databases like MongoDB and coding languages like HTML, CSS and JavaScript. 
</center>


</div> 



)
}
export default About;