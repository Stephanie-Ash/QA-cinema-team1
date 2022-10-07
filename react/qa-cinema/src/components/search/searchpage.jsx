import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import "./searchpage.css"

const SearchPage = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    const location = useLocation();
    const { newPageSearch } = location.state;

    useEffect(() => {
        axios
            .get(`http://localhost:3001/films/search?q=${newPageSearch}`)
            // .get('http://localhost:3001/films/getAll')
            .then(res => res)
            .then((result) => {
                setIsLoaded(true);
                setFilms(result.data);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, [newPageSearch]);

    if (error) {
        return (
            <>
                <div>Error loading search result: {error.message}</div>
            </>
        )
    }
    else if (!isLoaded) {
        return (
            <>
                <div>Loading search...</div>
            </>
        )
    } else {

        return (
            <>
                <div className="searchIntro container-fluid">
                    <h1> View search results for "{newPageSearch}":</h1>
                </div>
                <div className="searchTable container-fluid ">
                    <table className="mx-auto table-responsive">
                        <thead></thead>
                        <tbody>
                            {films.map(film =>
                                <tr key={film.film_id}>
                                    <td><Link to={`/listings/film/${film.film_id}`} state={{ film_id: film.film_id }}><img className="filmCovers" src={film.image_url} alt="filmcover" /></Link></td>
                                    <td><Link to={`/listings/film/${film.film_id}`} state={{ film_id: film.film_id }} className="searchTitles"><h2 className="searchTitles">{film.title}</h2></Link>
                                        <h5 className="searchDetails">Genre: {film.genre}</h5>
                                        <h5 className="searchDetails">Classification: {film.classification}</h5>
                                        <h5 className="searchDetails">Runtime: {film.length}</h5>

                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default SearchPage