import { useLocation } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";
import  "./Film.css";

const Film = () => {
    const location = useLocation();
    const {film_id} = location.state;

    const [films] = useOutletContext();
    const film = films.filter(film => {

        return film.film_id === film_id


    })
    console.log(film);
   

return (
<>
<h1>{film[0].title}</h1>
<div className ='container-fluid'>
<div className="card-mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={film[0].image_url} className="film-img" alt=".."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className = "description-box">
        <h5 className="card-title">{film[0].title}</h5>
        <div className="actors">
            

        <p className="card-actors">Actors: {film[0].actors}</p>
        </div>

        <p className="card-director">Director(s): {film[0].director}</p>
        <p className="card-synopsis">Synopsis: {film[0].synopsis}</p>
        <p className="card-genre">Genre: {film[0].genre}</p>
        <p className="card-classification">Classification: {film[0].classification}</p>
        <p className="card-length"><small className="text-muted">Length: {film[0].length}</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <hr></hr>
  <div className ='times-and-dates'>
  <div className="container">
   
  <div className="row"> 
  <h3>Today</h3>
  <p className="deluxe">Deluxe</p>
    <div className="col">
        <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
    <p> 2D</p>
    <p> 10.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
    <p> 3D</p>
    <p> 10.99</p></button>
    </Link>
    </div>
  </div>
  <div className="row-1">
    <div className="col">
 <p className="standard">Standard</p>
 <Link to="#">
    <button type="button" class="btn btn-outline-info">11:00 AM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" class="btn btn-outline-info">14:30 PM
    <p> 2D</p>
    <p> 6.99</p>
    </button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" class="btn btn-outline-info">17:45 PM
    <p> 2D</p>
    <p>6.99</p></button>
    </Link>
    </div>
  </div>
</div>
<div className="container">
   
  <div className="row"> 
  <h3>Tomorrow</h3>
  <p className="deluxe">Deluxe</p>
    <div className="col">
    <Link to="#">
    <button type="button" class="btn btn-outline-danger btn-lg">11:00 AM
    <p> 2D</p>
    <p> 10.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" class="btn btn-outline-danger btn-lg">14:30 PM
    <p> 3D</p>
    <p> 10.99</p></button>
    </Link>
    </div>
  </div>
  <div className="row-4">
    <div className="col">
        <p className="standard">Standard</p>
    <Link to="#">
    <button type="button" class="btn btn-outline-info">11:00 AM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">14:30 PM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">17:45 PM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
  </div>
</div>
<div className="container">
   
  <div className="row"> 
  <h3>Wednesday </h3>
  <p className="deluxe">Deluxe</p>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
    <p> 2D</p>
    <p> 10.99</p></button>
    </Link>
</div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
    <p> 3D</p>
    <p> 10.99</p></button>
    </Link>
      
    </div>
  </div>
  <div className="row-1">
    <div className="col">
    <p className="standard">Standard</p>
    <Link to="#">
    <button type="button" className="btn btn-outline-info">11:00 AM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">14:30 PM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">17:45 PM
    <p> 2D</p>
    <p> 6.99</p>
    </button>
    </Link>
    </div>
  </div>
</div>
<div className="container">
   
  <div className="row"> 
  <h3>Thursday</h3>
  <p className="deluxe">Deluxe</p>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
    <p> 2D</p>
    <p> 10.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
    <p> 3D</p>
    <p> 10.99</p></button>
      </Link>
     
    </div>
  </div>
  <div className="row-1">
    <div className="col">
         <p className="standard">Standard</p>
    <Link to="#">
    <button type="button" className="btn btn-outline-info">11:00 AM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">14:30 PM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">17:45 PM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
  </div>
</div>
<div className="container">
   
  <div className="row"> 
  <h3>Friday</h3>
  <p className="deluxe">Deluxe</p>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
    <p> 2D</p>
    <p> 10.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
    <p> 3D</p>
    <p> 10.99</p></button>
      </Link>
      
    </div>
  </div>
  <div className="row-1">
    <div className="col">
        <p className="standard">Standard</p>
    <Link to="#">
    <button type="button" className="btn btn-outline-info">11:00 AM
    <p> 2D</p>
    <p> 6.99</p></button>
    </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">14:30 PM
    <p> 2D</p>
    <p> 6.99</p></button>
   </Link>
    </div>
    <div className="col">
    <Link to="#">
    <button type="button" className="btn btn-outline-info">17:45 PM
    <p> 2D</p>
    <p> 6.99</p></button>
     </Link>

     
    </div>
  </div>
</div>
  </div>
  </div>
</>


)}

export default Film;