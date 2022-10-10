import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Prices from './Prices';

const MakeBooking = () => {

    const { films } = useOutletContext();
    const { filmDates } = useOutletContext();
    const { booking, setBooking } = useOutletContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (booking.adults === 0 && booking.children === 0 && booking.concessions === 0) {
            alert("Please select at least one seat!")
        } else {
            let totalSeats = 0;
            let price = 0;

            if (booking.screen_type === "standard") {
                totalSeats = parseInt(booking.adults) + parseInt(booking.children) + parseInt(booking.concessions);
                price = (parseInt(booking.adults) * 10 + parseInt(booking.children) * 7 + parseInt(booking.concessions) * 8).toFixed(2);
            } else {
                totalSeats = parseInt(booking.adults) + parseInt(booking.children) + parseInt(booking.concessions);
                price = (parseInt(booking.adults) * 12 + parseInt(booking.children) * 8.50 + parseInt(booking.concessions) * 9.50).toFixed(2);

            }

            axios.post("http://localhost:3001/bookings/create", {
                booking_num: booking.booking_num,
                film: booking.film,
                date: booking.date,
                time: booking.time,
                screen_type: booking.screen_type,
                adults: booking.adults,
                children: booking.children,
                concessions: booking.concessions,
                total_seats: totalSeats,
                price: price,
                has_paid: false
            })
                .then((res) => {
                    navigate("/bookings/payment/" + res.data.booking_num)
                }).catch((error) => {
                    console.log(error)
                    alert("An error has occurred please try again!")
                })

        }

    }

    return (
        <section className='container-fluid'>
            <h1>Make a Booking</h1>
            <div className="row">
                <div className="col-10 mx-auto">
                    <form className='mb-4' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="film" className="form-label">Film</label>
                            <select className="form-select" value={booking.film} onChange={(e) => setBooking(booking => ({ ...booking, film: e.target.value }))} id='film'>
                                <option>Select Film</option>
                                {films.map((film) => (
                                    <option key={film.film_id} value={film.title}>{film.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="screen-type" className="form-label">Screen Type</label>
                            <select className="form-select" value={booking.screen_type} onChange={(e) => setBooking(booking => ({ ...booking, screen_type: e.target.value }))} id='screen-type'>
                                <option value="standard">Standard</option>
                                <option value="deluxe">Deluxe</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <select className="form-select" id='date' value={booking.date} onChange={(e) => setBooking(booking => ({ ...booking, date: e.target.value }))}>
                                {filmDates.map((date, index) => (
                                    <option key={index} value={date}>{date}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <select className="form-select" id='time' value={booking.time} onChange={(e) => setBooking(booking => ({ ...booking, time: e.target.value }))}>
                                <option value="12:00">12:00</option>
                                <option value="20:00">20:00</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="adults" className="form-label">Adults</label>
                                    <input type="number" className="form-control" id="adults" value={booking.adults} onChange={(e) => setBooking(booking => ({ ...booking, adults: e.target.value }))} />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="children" className="form-label">Children</label>
                                    <input type="number" className="form-control" id="concessions" value={booking.children} onChange={(e) => setBooking(booking => ({ ...booking, children: e.target.value }))} />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="concessions" className="form-label">Concessions</label>
                                    <input type="number" className="form-control" id="concessions" aria-describedby="concessionsHelp" value={booking.concessions} onChange={(e) => setBooking(booking => ({ ...booking, concessions: e.target.value }))} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btnav p-2 m-0">Proceed to Payment</button>
                    </form>

                </div>
            </div>
            <Prices />
        </section>
    )

}

export default MakeBooking;