import { Link } from "react-router-dom";

const Filmdates =(props) => {
  return (
    <>
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
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[0], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[0], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[0], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[0], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-info">11:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[0], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-info">14:30
                    <p>2D</p>
                    <p>£9.99</p>
                  </button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[0], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-info">20:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{props.dates[1]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[1], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[1], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[1], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[1], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-info">11:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[1], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-info">14:30
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[1], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-info">20:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{props.dates[2]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[2], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[2], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[2], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[2], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-info">11:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[2], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-info">14:30
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[2], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-info">20:00
                    <p>2D</p>
                    <p>£9.99</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{props.dates[3]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[3], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate:props.bookingDates[3], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[3], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[3], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-info">11:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[3], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-info">14:30
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[3], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-info">20:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
            </div>
          </div>
          <div className="container day">

            <div className="row mb-2 times">
              <h3 className="dayofweek">{props.dates[4]}</h3>
              <p className="deluxe">Deluxe</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[4], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">11:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[4], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">14:30
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-deluxe">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Deluxe", chosenDate: props.bookingDates[4], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-danger btn-lg">20:00
                    <p>2D</p>
                    <p>£11.99</p></button>
                </Link>
              </div>
            </div>
            <div className="row mb-4 times-standard times">
              <p className="standard">Standard</p>
              <div className="col-4 col-md-3 col-lg-2 offset-lg-3 offset-md-1 text-center col-standard">

                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[4], chosenTime: "11:00"}}>
                  <button type="button" className="btn btn-outline-info">11:00
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[4], chosenTime: "14:30"}}>
                  <button type="button" className="btn btn-outline-info">14:30
                    <p>2D</p>
                    <p>£9.99</p></button>
                </Link>
              </div>
              <div className="col-4 col-md-3 col-lg-2 text-center col-standard">
                <Link to="/makeBooking" state={{chosenFilm: props.film[0].title, chosenScreen: "Standard", chosenDate: props.bookingDates[4], chosenTime: "20:00"}}>
                  <button type="button" className="btn btn-outline-info">20:00
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
export default Filmdates;