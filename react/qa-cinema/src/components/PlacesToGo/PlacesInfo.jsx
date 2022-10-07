import ReadMoreReadLess from "./ReadMoreReadLess";
import "./placestogo.css";
import Arcade from "../../images/places-arcade.jpg";
import Restaurant from "../../images/places-restaurant.jpg";
import Fair from "../../images/places-fair.jpg";
const PlacesToGo = () =>
{

    return (
     <div>
        <h1 className="Places"> Places To Go Nearby:</h1>
        <div className ="text-center">
        <p className ='attraction'> Find out about all of the best attractions to visit local to us, from Indigo's Kitchen to Gravifun - find the best suggestions here and why not head over to our membership to save big on cinema tickets while you’re at it!</p>
         </div>
         <div className="container-fluid">
         <div className="row align-items-start">
         <div className="arcade col-12 col-md-6 col-lg-4 mb-5 ">
         <h1>Arcade Art</h1>
         <img src={Arcade} className="arcade rounded mx-auto d-block" alt="arcade"/>
         <p className ='description'>Looking for something fun? Arcade Art is the talk of the city! Equipped with pinball machines, air hockey tables and the latest arcade videos games such as: Need for Speed 7, Warfare Madness and Duty Chaos. A visit here is a guaranteed good time! Located in Tower Bridge, minutes away from QA Cinema, Indigo's Kitchen and Gravifun.
         <ReadMoreReadLess descriptionLength={70}>
         <i className="fa-regular fa-circle-info"></i>
         <p>Offers: Win 70 tokens to enjoy 10% off your next visit to QA Cinema.
         Win 150 tokens to enjoy 25% off your next visit to QA Cinema</p>
         <p>Address: 8 St Katharine's Way, London E1W 1UN</p>
         <p>Contact Details: Arcadeart@artforever.com
         <p>Telephone: 02085447631</p></p><br/> 
          </ReadMoreReadLess>
         </p>
        </div> 
       
         <div className=" indigo col-12 col-md-6 col-lg-4 mb-5">
         <h1>Indigo's Kitchen</h1>
         <img src={Restaurant} className="restaurant rounded mx-auto d-block" alt="restaurant"/>
         <p className ='description'>Located in the heart of Tower Bridge, Indigo's Kitchen is a restaurant and bar with a spacious garden overlooking the Thames. Minutes away from London Bridge and Tower Hill, Indigo's Kitchen is the best spot for enjoying a lovely family meal, dinner for two or group outing. A menu with gluten-free, vegan and vegetarian options, makes us the best place for breakfast, lunch or dinner! A family friendly restaurant that emcompasses soul and vivacity not only in the atmosphere but also in the Kitchen (no pun intended!)  
         <ReadMoreReadLess descriptionLength={70}>
         <i className="fa-regular fa-circle-info"></i>
         <p>Offers: Enjoy 15% of your cinema tickets at QA Cinema when you dine at Indigo's Kitchen between 12pm-4pm
          Enjoy 20% your cinema tickets at QA Cinema when you dine at Indigo's Kitchen between 4pm-8pm</p>
          <p>Address: 12 St Katharine's Way, London E1W 1UN</p>
         <p>Contact Details: IndigoKitchen@contactinfo.com
         <p>Telephone: 02087759863</p></p><br/>
        </ReadMoreReadLess>
         </p>
         </div>
         <div className=" paradox col-12 col-md-6 col-lg-4 mb-5">
          <h1>Paradox Island</h1>
          <img src={Fair} className="fair rounded mx-auto d-block" alt="fair"/>
          <p className='description'>London's greatest Funfair is open for your family outing! Immersive yourself in all things fun, from attractions and entertainment to food and drink! Find us in Tower Bridge, near QA Cinema and Indigo's Kitchen.
          <ReadMoreReadLess descriptionLength={70}>
          <i className="fa-regular fa-circle-info"></i>
         <p>Offers: Buy 3 or more tickets for 15% off nearby attractions such as QA Cinema and Blues Kitchen.</p>
         <p>Address: 17-29 St Katharine's Way, London E1W 1UN</p>
         <p>Contact Details: ParadoxIsland@info.com
         <p>Telephone: 02086098432</p></p><br/>
         </ReadMoreReadLess>
          </p>
          </div>
            </div>  
     </div>
     </div>
     
    )
}
export default PlacesToGo;