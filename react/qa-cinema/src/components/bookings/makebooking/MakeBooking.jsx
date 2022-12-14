import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { format, addDays } from 'date-fns';
import { v4 as uuid } from 'uuid';

import '../bookings.css';
import BookingForm from './BookingForm';
import Prices from './Prices';

const MakeBooking = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const filmDates = createDates();
    const bookingNum = createBookingNumber();
    const location = useLocation();
    const { chosenFilm, chosenDate, chosenTime, chosenScreen } = location.state;

    function createDates() {
        let datesArr = [];
        let today = new Date();

        for (let i = 0; i < 5; i++) {
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
            film: chosenFilm,
            date: chosenDate,
            time: chosenTime,
            screen_type: chosenScreen,
            adults: "0",
            children: "0",
            concessions: "0",
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
                <section className='container-fluid'>
                    <h1>Make a Booking</h1>
                    <div className="row">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                            <BookingForm films={films} filmDates={filmDates} booking={booking} setBooking={setBooking} />
                        </div>
                    </div>
                </section>
                <Prices />
            </>
        )
    }

}

export default MakeBooking;