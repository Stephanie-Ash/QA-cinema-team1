import { useOutletContext } from 'react-router-dom';
import ListingHeader from '../ListingHeader';
import FilmMap from '../FilmMap';

const Upcoming = () => {
    const [films] = useOutletContext();
    const upcoming = films.filter(film => {
        return film.upcoming === true;
    })

    return (
        <>
            <ListingHeader source={upcoming[0]} />
            <section className="container-fluid">
                <h1>Upcoming Films</h1>
                <FilmMap movies={upcoming}/>
            </section>
        </>
    )

}

export default Upcoming;