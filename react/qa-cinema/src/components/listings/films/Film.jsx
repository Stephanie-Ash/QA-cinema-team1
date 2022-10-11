import { useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { format, addDays } from 'date-fns';
import "./Film.css";

const Film = () => {
  const { id } = useParams();
  const [films] = useOutletContext();
  const dates = createDates();
  let bookingDates = createBookingDates();

  const film = films.filter(film => {
    return film.film_id === parseInt(id);
  })

  function createDates() {
    let datesArr = [];
    let today = new Date();

    for (let i = 0; i < 5; i++) {
      let newDate = addDays(today, i);
      let formattedDate = format(newDate, 'EEEE');;
      datesArr.push(formattedDate);
    }

    return datesArr;
  }

  function createBookingDates() {
    let datesArr = [];
    let today = new Date();

    for (let i = 0; i < 5; i++) {
      let newDate = addDays(today, i);
      let formattedDate = format(newDate, 'dd/MM/yyyy')
      datesArr.push(formattedDate);
    }

    return datesArr;
  }

  return (
    <>
      <h1>{film[0].title}</h1>
      <div className='container-fluid'>
        <div className="card-mb-3-col-standard" style={{ maxwidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4 filmdinfo">
              <img src={film[0].image_url} className="film-img" alt=".." />
            </div>
            <div className="col-md-8 filminfo">
              <div className="card-body">
                <div className="description-box">
                  <h5 className="card-title">{film[0].title}</h5>
                  <div className="actors">
                    {film[0].actors.map((actor, index) => <span key={index} className="pe-2">{actor}</span>)}
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
        </div>
        <div className='times-and-dates'>
          <div className="container day">
            <div className="row">
              <h3 className="text-center">Screen Times</h3>
              <p className="text-center">To see the more information on the different screens visit the <Link className="screen-link" to={"/screens"} target="_blank">Screens</Link> page.</p>
            </div>
            <div className="row mb-2 times">
              <h3 className="dayofweek">Today</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">11:00 AM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">14:30 PM
                    <p>2D</p>
                    <p>£9.99</p>
                  </button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">20:00 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{dates[1]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="#">
                  <button type="button" className="btn btn-outline-info">11:00 AM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">14:30 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">20:00 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{dates[2]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="#">
                  <button type="button" className="btn btn-outline-info">11:00 AM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">14:30 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">20:00 PM
                    <p>2D</p>
                    <p>£9.99</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{dates[3]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="#">
                  <button type="button" className="btn btn-outline-info">11:00 AM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">14:30 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">20:00 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{dates[4]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00 AM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="#">
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00 PM
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row mb-4 times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="#">
                  <button type="button" className="btn btn-outline-info">11:00 AM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">14:30 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="#">
                  <button type="button" className="btn btn-outline-info">20:00 PM
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Film;