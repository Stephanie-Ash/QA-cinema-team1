import { Link } from 'react-router-dom';

const FilmCard = (props) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
            <Link to={`/listings/film/${props.id}`} state={{film_id: props.id}} className='film-card-link'>
                <div className="card film-card mx-auto">
                    <img src={props.image} className="card-img-top fim-card-img" alt={props.title} />
                    <div className="card-body film-card-text">
                        <h5>{props.title}</h5>
                        <p className='film-card-sm test mb-0'><span className='film-card-rating'>{props.rating}</span>{props.length}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FilmCard;