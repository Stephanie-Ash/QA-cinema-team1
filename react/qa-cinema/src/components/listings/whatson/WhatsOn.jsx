import { useState, useEffect } from 'react';
import axios from 'axios';

import '../listings.css';
import ListingHeader from '../ListingHeader';

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

    if(error) {
        return(
            <>
                <div>Error loading images: {error.message}</div>
            </>
        )
    }
    else if(!isLoaded) {
        return(
            <>
                <div>Loading image...</div>
            </>
        )
    } else {
        return (
            <>
              <ListingHeader movies={films}/>  
            </>
        )
    }  
}

export default WhatsOn;