import { useNavigate } from 'react-router-dom';

const BookingForm = (props) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.booking.adults === 0 && props.booking.children === 0 && props.booking.concessions === 0) {
            alert("Please select at least one seat!")
        } else {
            // let totalSeats = 0;
            // let price = 0;

            // if (booking.screen_type === "standard") {
            //     totalSeats = parseInt(booking.adults) + parseInt(booking.children) + parseInt(booking.concessions);
            //     price = (parseInt(booking.adults) * 10 + parseInt(booking.children) * 7 + parseInt(booking.concessions) * 8).toFixed(2);
            // } else {
            //     totalSeats = parseInt(booking.adults) + parseInt(booking.children) + parseInt(booking.concessions);
            //     price = (parseInt(booking.adults) * 12 + parseInt(booking.children) * 8.50 + parseInt(booking.concessions) * 9.50).toFixed(2);

            // }

            // axios.post("http://localhost:3001/bookings/create", {
            //     booking_num: booking.booking_num,
            //     film: booking.film,
            //     date: booking.date,
            //     time: booking.time,
            //     screen_type: booking.screen_type,
            //     adults: booking.adults,
            //     children: booking.children,
            //     concessions: booking.concessions,
            //     total_seats: totalSeats,
            //     price: price,
            //     has_paid: false
            // })
            //     .then((res) => {
            //         navigate("/bookings/payment/" + res.data.booking_num)
            //     }).catch((error) => {
            //         console.log(error)
            //         alert("An error has occurred please try again!")
            //     })

            navigate("/payment", { state: { savedBooking: props.booking } })
        }

    }

    return (
        <form className='mb-4' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="film" className="form-label">Film</label>
                <select className="form-select" value={props.booking.film} onChange={(e) => props.setBooking(booking => ({ ...booking, film: e.target.value }))} id='film' required>
                    <option value=''>Select Film</option>
                    {props.films.map((film) => (
                        <option key={film.film_id} value={film.title}>{film.title}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="screen-type" className="form-label">Screen Type</label>
                <select className="form-select" value={props.booking.screen_type} onChange={(e) => props.setBooking(booking => ({ ...booking, screen_type: e.target.value }))} id='screen-type'>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <select className="form-select" id='date' value={props.booking.date} onChange={(e) => props.setBooking(booking => ({ ...booking, date: e.target.value }))}>
                    {props.filmDates.map((date, index) => (
                        <option key={index} value={date}>{date}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">Time</label>
                <select className="form-select" id='time' value={props.booking.time} onChange={(e) => props.setBooking(booking => ({ ...booking, time: e.target.value }))}>
                    <option value="12:00">12:00</option>
                    <option value="20:00">20:00</option>
                </select>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="adults" className="form-label">Adults</label>
                        <input type="number" className="form-control" id="adults" value={props.booking.adults} onChange={(e) => props.setBooking(booking => ({ ...booking, adults: e.target.value }))} />
                    </div>
                    <div className="col-4">
                        <label htmlFor="children" className="form-label">Children</label>
                        <input type="number" className="form-control" id="concessions" value={props.booking.children} onChange={(e) => props.setBooking(booking => ({ ...booking, children: e.target.value }))} />
                    </div>
                    <div className="col-4">
                        <label htmlFor="concessions" className="form-label">Concessions</label>
                        <input type="number" className="form-control" id="concessions" aria-describedby="concessionsHelp" value={props.booking.concessions} onChange={(e) => props.setBooking(booking => ({ ...booking, concessions: e.target.value }))} />
                    </div>
                </div>
            </div>
            <button type="submit" className="btnav p-2 m-0">Proceed to Payment</button>
        </form>
    )

}

export default BookingForm;