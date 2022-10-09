import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Bookings = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    const [booking, setBooking] = useState(
        {
            cust_name: "",
            cust_email: "",
            film: {
                film_id: "",
                title: ""
            },
            date: "",
            time: "",
            screen_type: "",
            adults: 0,
            children: 0,
            concessions: 0,
            total_seats: 0,
            price: 0,
            has_paid: false
        }
    );
    
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
            <div>
                <p className='mb-0'>Error loading data: {error.message}.</p>
                <p>Please try again later.</p>
            </div>

        )
    }
    else if (!isLoaded) {
        return (
            <div>Loading data...</div>
        )
    } else {
        return (
            <>
                <Outlet context={{
                    films,
                    booking, setBooking}}/>
            </>
        )
    }

}

export default Bookings;