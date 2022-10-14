import { useOutletContext, useParams } from "react-router-dom";
import { format, addDays } from 'date-fns';
import "./Film.css";
import Filmdescription from "./filmdescription";
import Filmdates from "./filmdates";

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
  console.log(film);
   if (film[0].current === true){

  return (
    
    <>
      <Filmdescription film={film}/>
      <Filmdates film={film} dates={dates} bookingDates={bookingDates}/>
    </>
  )
   } else {
    return (
      <>
      <Filmdescription film={film}/>
      </>
    )
    
    }
}
export default Film;