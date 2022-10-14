import { useOutletContext } from 'react-router-dom';
import ListingHeader from '../ListingHeader';
import FilmMap from '../FilmMap';

const WhatsOn = () => {
    const [films] = useOutletContext();
    const current = films.filter(film => {
        return film.current === true;
    })

    return (
        <>
            <ListingHeader source={current[2]} />
            <section className="container-fluid">
                <h1>What's On</h1>
                <FilmMap movies={current}/>
            </section>
        </>
    )

}

export default WhatsOn;