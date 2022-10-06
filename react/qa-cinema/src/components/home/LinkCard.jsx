import { Link } from "react-router-dom";

const LinkCard = (props) => {

    return (
            <div className="col-12 col-md-6 col-lg-4 mb-5">
                <Link to="#">
                    <div className="card home-link-card mx-auto">
                        <img src={props.image} className="card-img-top" alt={props.page} />
                    </div>
                </Link>
            </div>
    )

}

export default LinkCard;