const ListingHeader = (props) => {
    return(
        <section>
            <img className="listing-head" src={props.movies[0].image_url} alt={props.movies[0].title} />
        </section>
    )

}

export default ListingHeader;