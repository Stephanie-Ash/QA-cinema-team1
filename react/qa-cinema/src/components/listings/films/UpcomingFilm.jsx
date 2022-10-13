import { useOutletContext, useParams } from "react-router-dom";
import './Film.css'
import Filmdescription from "./filmdescription";

const UpcomingFilm = () => {
    const { id } = useParams();
  const [films] = useOutletContext();
 
    const film = films.filter(film => {
        return film.film_id === parseInt(id);
      })
return (
    <>
 <Filmdescription film={film}/>
    </>
)




}
export default UpcomingFilm;