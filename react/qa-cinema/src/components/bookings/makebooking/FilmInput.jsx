const FilmInput = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor="film" className="form-label">Film</label>
            <select className="form-select" value={props.booking.film} onChange={props.selectFilm} id='film' required>
                <option value=''>Select Film</option>
                {props.films.map((film) => (
                    <option key={film.film_id} value={film.title}>{film.title}</option>
                ))}
            </select>
        </div>
    )

}

export default FilmInput;