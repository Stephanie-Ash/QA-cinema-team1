const Prices = () => {

    return (
        <section className="container-fluid">
            <div className="row mb-2">
                <h4 className="mb-3">Ticket Prices</h4>
                <div className="col-6 col-md-2">
                    <h6>Standard Screens:</h6>
                    <p className="mb-0">Adults: £9.99</p>
                    <p className="mb-0">Children: £6.99</p>
                    <p className="mb-0">Concessions: £7.99</p>
                </div>
                <div className="col-6 col-md-2">
                    <h6>Deluxe Screens:</h6>
                    <p className="mb-0">Adults: £11.99</p>
                    <p className="mb-0">Children: £8.99</p>
                    <p className="mb-0">Concessions: £9.99</p>
                </div>
            </div>
            <div className="alert-warning ticket-alert mb-4">
                    <i className="fa-solid fa-circle-info mr-2"></i> Concession tickets can only be used by Students, Seniors (60+ years) and disabled people.
                </div>
        </section>
    )

}

export default Prices;