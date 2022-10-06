import { Link } from 'react-router-dom';

const FilmCard = (props) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link to={"/"} className='film-card-link'>
                <div className="card film-card mx-auto">
                    <img src={props.image} class="card-img-top" alt={props.title} />
                    <div class="card-body film-card-text">
                        <h5>{props.title}</h5>
                        <p className='film-card-sm test'><span className='film-card-rating'>{props.rating}</span>{props.length}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FilmCard;