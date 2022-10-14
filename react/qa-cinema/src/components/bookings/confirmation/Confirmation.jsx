import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingDetails from '../BookingDetails.jsx';

const Confirmation = () => {
    const { bookingNum } = useParams();
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
                    <div className="col-12 col-sm-10 mx-auto">
                        <p>Thank you for your booking. Your booking summary is below. If you have any queries please feel free to <Link className='booking-link' to={"/contact"}>Contact Us</Link> quoting your booking number</p>
                    </div>
                </div>
                <BookingDetails bookingNum={savedBooking.booking_num} savedBooking={savedBooking} totalSeats={savedBooking.total_seats} price={savedBooking.price} />
            </section>
        )
    }

}

export default Confirmation;