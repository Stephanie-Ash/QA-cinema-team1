import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const [booking, setBooking] = useState();
    const {bookingNum} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [savedBooking, setSavedBooking] = useState();

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3001/bookings/get/${bookingNum}`)
    //         .then(res => res)
    //         .then((result) => {
    //             setIsLoaded(true);
    //             setFilms(result.data);
    //         }, (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         });
    // }, []);
    

    return (
        <section className='container-fluid'>
            <h1>Payment</h1>
            <div className="row">
                <div className="col">
                    <h4>Booking summary</h4>
                    <p>Film: {booking.film.title}</p>
                    <p>Date: {booking.date}</p>
                    <p>Time: {booking.time}</p>
                    <p>Number of Tickets: {booking.total_seats}</p>
                    <p>Price: £{booking.price}</p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-10 mx-auto">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </section>
    )

}

export default Payment;