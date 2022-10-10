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
            alert("An error has occurred, please contact the cinema!")
        } else {
            axios.put(`http://localhost:3001/bookings/update/${props.bookingNum}`, {
                cust_name: name,
                cust_email: email,
                has_paid: true
            })
                .then((res) => {
                    navigate("/bookings/confirmed/" + props.bookingNum)
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