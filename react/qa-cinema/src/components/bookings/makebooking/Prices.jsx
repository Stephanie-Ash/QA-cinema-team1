const Prices = () => {

    return (
        <section className="container-fluid">
            <div className="row justify-content-center mb-2">
                <h4 className="mb-3 text-center">Ticket Prices</h4>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
                    <h6>Standard Screens:</h6>
                    <p className="mb-0">Adults:</p>
                    <p className="mb-0">Children:</p>
                    <p className="mb-0">Concessions:</p>
                </div>
                <div className="col-3 col-sm-2 col-md-1 mb02">
                    <br />
                    <p className="mb-0">£9.99</p>
                    <p className="mb-0">£6.99</p>
                    <p className="mb-0">£7.99</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
                    <h6>Deluxe Screens:</h6>
                    <p className="mb-0">Adults:</p>
                    <p className="mb-0">Children:</p>
                    <p className="mb-0">Concessions:</p>
                </div>
                <div className="col-3 col-sm-2 col-md-1 mb-2">
                    <br />
                    <p className="mb-0">£11.99</p>
                    <p className="mb-0">£8.99</p>
                    <p className="mb-0">£9.99</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="alert-warning ticket-alert mb-4 p-2">
                    <i className="fa-solid fa-circle-info mr-2"></i> Concession tickets can only be used by Students, Seniors (60+ years) and disabled people.
                </div>
            </div>
        </section>
    )

}

export default Prices;