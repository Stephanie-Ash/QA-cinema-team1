const ActorList =(props) => 
{
    return(
        <div className="actors" >
            {props.movies.map((film) => (
                <ul>
                    
                </ul>
            ))}

        </div>

    )

}

// return (
//     <div className="row mb-5">
//         {props.movies.map((film) => (
//             <FilmCard key={film.film_id} id={film.film_id} image={film.image_url} rating={film.classification} length={film.length} title={film.title} />
//         ))}
//     </div>
// )