import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

import './listings.css';

const Listings = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/films/getAll")
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
            <div>Error loading data: {error.message}</div>

        )
    }
    else if (!isLoaded) {
        return (
            <div>Loading data...</div>
        )
    } else {
        return (
            <>
                <Outlet context={[films]}/>
            </>
        )
    }

}

export default Listings;