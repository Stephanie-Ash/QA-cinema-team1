import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const cardElementOptions = {
        style: {
          base: {
            color: "#330613",
          },
          invalid: {
            color: "#fa755a",
          }
        }
      }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if(error) {
            console.log(error);
        } else {
            console.log(paymentMethod);
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className='card-input form-control mb-2'>
                <CardElement options={cardElementOptions} />
            </div>
            <button className='btnav payment-btn' disabled={!stripe}>Make Payment</button>
        </form>
    )

}

export default CheckoutForm;