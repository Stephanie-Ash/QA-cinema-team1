const Prices = () => {

    return (
        <section className="container-fluid">
            <div className="row mb-4">
                <h4 className="mb-3">Ticket Prices</h4>
                <div className="col-6 col-md-2">
                    <h6>Standard Screens:</h6>
                    <p className="mb-0">Adults: £10.00</p>
                    <p className="mb-0">Children: £7.00</p>
                    <p className="mb-0">Concessions: £8.00</p>
                </div>
                <div className="col-6 col-md-2">
                    <h6>Deluxe Screens:</h6>
                    <p className="mb-0">Adults: £12.00</p>
                    <p className="mb-0">Children: £8.50</p>
                    <p className="mb-0">Concessions: £9.50</p>
                </div>
            </div>
        </section>
    )

}

export default Prices;