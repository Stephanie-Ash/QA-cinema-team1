import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Confirmation = () => {
    const {bookingNum} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [savedBooking, setSavedBooking] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:3001/bookings/get/${bookingNum}`)
            .then(res => res)
            .then((result) => {
                setIsLoaded(true);
                setSavedBooking(result.data);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, [bookingNum]);

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
            <section className='container-fluid'>
            <h1>Booking Confirmation</h1>
            <div className="row">
                <div className="col">
                    <h4>Booking summary</h4>
                    <p>Booking Number: {savedBooking.booking_num}</p>
                    <p>Film: {savedBooking.film}</p>
                    <p>Date: {savedBooking.date}</p>
                    <p>Time: {savedBooking.time}</p>
                    <p>Number of Tickets: {savedBooking.total_seats}</p>
                    <p>Price: £{savedBooking.price}</p>
                </div>
            </div>
        </section>
        )
    }

}

export default Confirmation;