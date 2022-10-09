import { useOutletContext } from 'react-router-dom';

const MakeBooking = () => {

    const { films } = useOutletContext();
    const { booking, setBooking } = useOutletContext();

    return (
        <section className='container-fluid'>
            <h1>Make a Booking</h1>
            <div className="row">
                <div className="col-10 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="film" className="form-label">Film</label>
                            <select className="form-select" id='film'>
                                <option>Open this select menu</option>
                                {films.map((film) => (
                                    <option key={film.film_id} value={film.title}>{film.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="screen-type" className="form-label">Screen Type</label>
                            <select className="form-select" id='screen-type'>
                                <option>Open this select menu</option>
                                <option value="standard">Standard</option>
                                <option value="deluxe">Deluxe</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <select className="form-select" id='date'>
                                <option>Open this select menu</option>
                                <option value="standard">Some Date</option>
                                <option value="deluxe">Another Date</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <select className="form-select" id='time'>
                                <option>Open this select menu</option>
                                <option value="standard">Some Time</option>
                                <option value="deluxe">Another Time</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="adults" className="form-label">Adults</label>
                                    <input type="number" className="form-control" id="adults" />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="children" className="form-label">Children</label>
                                    <input type="number" className="form-control" id="concessions" />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="concessions" className="form-label">Concessions</label>
                                    <input type="number" className="form-control" id="concessions" aria-describedby="concessionsHelp"/>
                                    <div id="concessionsHelp" className="form-text">Students / Seniors</div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
                    </form>

                </div>
            </div>
        </section>
    )

}

export default MakeBooking;