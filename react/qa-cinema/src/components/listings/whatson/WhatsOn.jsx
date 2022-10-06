import { useState, useEffect } from 'react';
import axios from 'axios';

import '../listings.css';
import ListingHeader from '../ListingHeader';
import FilmCard from '../FilmCard';

const WhatsOn = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/films/current")
            .then(res => res)
            .then((result) => {
                setIsLoaded(true);
                setFilms(result.data);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    if (error) {
        return (
            <>
                <div>Error loading images: {error.message}</div>
                <FilmCard />
            </>
        )
    }
    else if (!isLoaded) {
        return (
            <>
                <div>Loading image...</div>
                <FilmCard />
            </>
        )
    } else {
        return (
            <>
                <ListingHeader movies={films} />
                <section className="container-fluid">
                    <h1>Whats On</h1>
                    <div className="row mb-5">
                        {films.map((film) => (
                            <FilmCard key={film.film_id} image={film.image_url} rating={film.classification} length={film.length} title={film.title} />
                        ))}
                    </div>
                </section>
            </>
        )
    }
}

export default WhatsOn;