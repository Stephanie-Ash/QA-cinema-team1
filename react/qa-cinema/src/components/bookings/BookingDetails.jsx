const BookingDetails = (props) => {

    return (
        <div className="row mb-3">
            <div className="col text-center">
                <h4 className="mb-3">Booking summary</h4>
                {props.bookingNum ? <p>Booking Number: {props.bookingNum}</p> : <></>}
                <p>Film: {props.savedBooking.film}</p>
                <p>Date: {props.savedBooking.date}</p>
                <p>Time: {props.savedBooking.time}</p>
                <p>Number of Tickets: {props.totalSeats}</p>
                <p>Price: £{props.price}</p>
            </div>
        </div>
    )
}

export default BookingDetails;