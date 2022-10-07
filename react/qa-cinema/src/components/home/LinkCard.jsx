import { Link } from "react-router-dom";

const LinkCard = (props) => {

    return (
            <div className="col-12 col-md-6 col-lg-4 mb-5">
                <Link to={props.page}>
                    <div className="card home-link-card mx-auto">
                        <img src={props.image} className="card-img-top" alt={props.alt} />
                    </div>
                </Link>
            </div>
    )

}

export default LinkCard;