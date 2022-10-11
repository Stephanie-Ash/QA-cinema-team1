import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import BookingDetails from '../BookingDetails.jsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const location = useLocation();
    const { savedBooking } = location.state
    const totalSeats = parseInt(savedBooking.adults) + parseInt(savedBooking.children) + parseInt(savedBooking.concessions);
    const price = calculatePrice();

    function calculatePrice() {
        let price = 0;
        if (savedBooking.screen_type === "Standard") {
            price = (parseInt(savedBooking.adults) * 9.99 + parseInt(savedBooking.children) * 6.99 + parseInt(savedBooking.concessions) * 7.99).toFixed(2);
        } else {
            price = (parseInt(savedBooking.adults) * 11.99 + parseInt(savedBooking.children) * 8.99 + parseInt(savedBooking.concessions) * 9.99).toFixed(2);
        }

        return price;
    }

    return (
        <section className='container-fluid'>
            <h1>Payment</h1>
            <BookingDetails savedBooking={savedBooking} totalSeats={totalSeats} price={price}/>
            <div className="row mb-5">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
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