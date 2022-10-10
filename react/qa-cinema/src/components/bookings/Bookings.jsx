import { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { format, addDays } from 'date-fns';
import {v4 as uuid} from 'uuid';

import './bookings.css';

const Bookings = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [filmDates] = useState(createDates());
    const [bookingNum] = useState(createBookingNumber());

    function createDates() {
        let datesArr = [];
        let today = new Date();

        for (let i = 0; i < 6; i++) {
            let newDate = addDays(today, i);
            let formattedDate = format(newDate, 'dd/MM/yyyy')
            datesArr.push(formattedDate);
        }

        return datesArr;
    }

    function createBookingNumber() {
        let num = uuid();
        let smallNum = num.slice(0, 10);

        return smallNum;
    }

    const [booking, setBooking] = useState(
        {
            booking_num: bookingNum,
            cust_name: "",
            cust_email: "",
            film: {
                film_id: "",
                title: ""
            },
            date: filmDates[0],
            time: "12:00",
            screen_type: "standard",
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
                    filmDates,
                    booking, setBooking}}/>
            </>
        )
    }

}

export default Bookings;