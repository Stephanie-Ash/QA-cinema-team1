import { useNavigate } from 'react-router-dom';
import FilmInput from './FilmInput';
import SelectionInputs from './SelectionInputs';
import NumberInputs from './NumberInputs';

const BookingForm = (props) => {

    const navigate = useNavigate();
    const screens = ['Standard', 'Deluxe'];
    const times = ['11:00', '14:30', '20:00'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.booking.adults === "0" && props.booking.children === "0" && props.booking.concessions === "0") {
            alert("Please select at least one seat!")
        } else {
            navigate("/payment", { state: { savedBooking: props.booking } })
        }

    }

    const selectFilm = ({target}) => {
        props.setBooking(booking => ({...booking, film: target.value}));
    }

    const selectScreen = ({target}) => {
        props.setBooking(booking => ({...booking, screen_type: target.value}));
    }

    const selectDate = ({target}) => {
        props.setBooking(booking => ({...booking, date: target.value}));
    }

    const selectTime = ({target}) => {
        props.setBooking(booking => ({...booking, time: target.value}));
    }

    const selectAdults = ({target}) => {
        props.setBooking(booking => ({...booking, adults: target.value}));
    }

    const selectChildren = ({target}) => {
        props.setBooking(booking => ({...booking, children: target.value}));
    }

    const selectConcessions = ({target}) => {
        props.setBooking(booking => ({...booking, concessions: target.value}));
    }

    return (
        <form className='mb-4' onSubmit={handleSubmit}>
            <FilmInput booking={props.booking} selectFilm={selectFilm} films={props.films}/>
            <SelectionInputs attrs={"screen-type"} labelText={"Screen Type"} inputValue={props.booking.screen_type} selectFunc={selectScreen} options={screens}/>
            <SelectionInputs attrs={"date"} labelText={"Date"} inputValue={props.booking.date} selectFunc={selectDate} options={props.filmDates}/>
            <SelectionInputs attrs={"time"} labelText={"Time"} inputValue={props.booking.time} selectFunc={selectTime} options={times}/>
            <div className="mb-3">
                <div className="row">
                    <NumberInputs attrs={"adults"} labelText={"Adults"} inputValue={props.booking.adults} selectFunc={selectAdults}/>
                    <NumberInputs attrs={"children"} labelText={"Children"} inputValue={props.booking.children} selectFunc={selectChildren}/>
                    <NumberInputs attrs={"concessions"} labelText={"Concessions"} inputValue={props.booking.concessions} selectFunc={selectConcessions}/>
                </div>
            </div>
            <button type="submit" className="btnav p-2 m-0">Proceed to Payment</button>
        </form>
    )

}

export default BookingForm;