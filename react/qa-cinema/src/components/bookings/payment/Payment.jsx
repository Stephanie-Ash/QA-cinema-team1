import { useOutletContext } from 'react-router-dom';

const Payment = () => {

    const { booking, setBooking } = useOutletContext();

    return(
        <p>{booking.price}</p>
    )

}

export default Payment;