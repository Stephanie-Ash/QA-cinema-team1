const ListingHeader = (props) => {
    return(
        <section>
            <img className="listing-head" src={props.source.image_url} alt={props.source.title} />
        </section>
    )

}

export default ListingHeader;