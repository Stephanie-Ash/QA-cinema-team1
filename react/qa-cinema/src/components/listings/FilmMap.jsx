import FilmCard from "./FilmCard";

const FilmMap = (props) => {

    return (
        <div className="row mb-4">
            {props.movies.map((film) => (
                <FilmCard key={film.film_id} id={film.film_id} image={film.image_url} rating={film.classification} length={film.length} title={film.title} />
            ))}
        </div>
    )

}

export default FilmMap;