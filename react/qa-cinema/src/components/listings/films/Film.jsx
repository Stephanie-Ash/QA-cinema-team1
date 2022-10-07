import { useLocation } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';

const Film = () => {
    const location = useLocation();
    const {film_id} = location.state;

    const [films] = useOutletContext();
    const film = films.filter(film => {
        return film.film_id === film_id;
    })


}

export default Film;