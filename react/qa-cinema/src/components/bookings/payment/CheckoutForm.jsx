import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
        } else {
            console.log(paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="fname" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lname" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" />
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