const ListingHeader = (props) => {
    return(
        <section>
            <img className="listing-head" src={props.movies[1].image_url} alt={props.movies[1].title} />
        </section>
    )

}

export default ListingHeader;