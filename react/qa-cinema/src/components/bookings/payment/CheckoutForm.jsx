import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.log(error);
            alert("There is a problem with your card details please check the form.")
        } else {
            axios.post("http://localhost:3001/bookings/create", {
                booking_num: props.savedBooking.booking_num,
                cust_name: name,
                cust_email: email,
                film: props.savedBooking.film,
                date: props.savedBooking.date,
                time: props.savedBooking.time,
                screen_type: props.savedBooking.screen_type,
                adults: props.savedBooking.adults,
                children: props.savedBooking.children,
                concessions: props.savedBooking.concessions,
                total_seats: props.totalSeats,
                price: props.price,
                has_paid: true
            })
                .then((res) => {
                    navigate("/booking/" + res.data.booking_num, )
                }).catch((error) => {
                    console.log(error)
                    alert("An error has occurred please contact the cinema!")
                })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="email" className="form-label">Email Address </label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor="card" className="form-label">Credit Card Details</label>
                <div className='card-input form-control' id='card'>
                    <CardElement />
                </div>
            </div>
            <button className='btnav payment-btn' disabled={!stripe}>Make Payment</button>
        </form>
    )

}

export default CheckoutForm;