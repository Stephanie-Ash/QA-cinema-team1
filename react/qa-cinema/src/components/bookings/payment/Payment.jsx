import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const location = useLocation();
    const { savedBooking } = location.state
    const totalSeats = parseInt(savedBooking.adults) + parseInt(savedBooking.children) + parseInt(savedBooking.concessions);
    const price = calculatePrice();

    function calculatePrice() {
        let price = 0;
        if (savedBooking.screen_type === "standard") {
            price = (parseInt(savedBooking.adults) * 10 + parseInt(savedBooking.children) * 7 + parseInt(savedBooking.concessions) * 8).toFixed(2);
        } else {
            price = (parseInt(savedBooking.adults) * 12 + parseInt(savedBooking.children) * 8.50 + parseInt(savedBooking.concessions) * 9.50).toFixed(2);
        }

        return price;
    }

    return (
        <section className='container-fluid'>
            <h1>Payment</h1>
            <div className="row">
                <div className="col">
                    <h4>Booking summary</h4>
                    <p>Film: {savedBooking.film}</p>
                    <p>Date: {savedBooking.date}</p>
                    <p>Time: {savedBooking.time}</p>
                    <p>Number of Tickets: {totalSeats}</p>
                    <p>Price: £{price}</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-10 mx-auto">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm savedBooking={savedBooking} totalSeats={totalSeats} price={price}/>
                    </Elements>
                </div>
            </div>
        </section>
    )
}
// }

export default Payment;