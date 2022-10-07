import "./OpeningTimes.css"

const OpeningTimes = () => {
    return (
        <>

            <h1>Opening Times:</h1>
            <div className="container-fluid">
                <table className="OpeningTimes mx-auto">
                    <tbody>
                        <tr id="Monday" itemprop="openingHours" title="Open Monday at 7am to 1am">
                            <td className="Days">Monday</td>
                            <td className="morning">07:00 - 12:30</td>
                            <td className="space"></td>
                            <td className="evening">13:30- 01:00</td>
                        </tr>
                        <tr id="Tuesday" itemprop="openingHours" title="Open Tuesday at 7am to 1am">
                            <td className="Days" >Tuesday</td>
                            <td className="morning">07:00 - 12:30</td>
                            <td className="space"> </td>
                            <td className="evening">13:30- 01:00</td>
                        </tr>
                        <tr id="Wednesday " itemprop="openingHours" title="Open Wednesday at 7am to 1am">
                            <td className="Days">Wednesday   </td>
                            <td className="morning">07:00 - 12:30</td>
                            <td className="space"> </td>
                            <td className="evening">13:30- 01:00</td>
                        </tr>
                        <tr id="Thursday" itemprop="openingHours" title="Open Thursday at 7am to 1am">
                            <td className="Days">Thursday</td>
                            <td className="morning">07:00 - 12:30</td>
                            <td className="space"></td>
                            <td className="evening">13:30- 01:00</td>
                        </tr>
                        <tr id="Friday" itemprop="openingHours" title="Open Friday at 7am to 1am">
                            <td className="Days">Friday</td>
                            <td className="morning">07:00 - 12:30</td>
                            <td className="space"></td>
                            <td className="evening">13:30- 01:00</td>
                        </tr>
                        <tr id="Saturday" itemprop="openingHours" title="Open Saturday at 7:30am to 1am">
                            <td className="Days">Saturday</td>
                            <td className="morning">07:30 - 12:30</td>
                            <td className="space"></td>
                            <td className="evening">13:30- 01:00</td>
                        </tr>
                        <tr id="Sunday" itemprop="openingHours" title="Open Sunday at 11am to 12am">
                            <td className="Days">Sunday</td>
                            <td className="morning">11:00 - 15:30</td>
                            <td className="space"></td>
                            <td className="evening">16:30- 00:00</td>
                        </tr>
                    </tbody>
                </table>
                <p className="space2"></p>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="alert-warning" >
                            <i className="fa-solid fa-circle-info"></i>

                            *QA Cinema closes Monday-Saturday  12:30 - 13:30 and Sunday 15:30 - 16:30 for cleaning purposes to ensure we deliver the best possible experience to our customers.<br />
                            *Bank Holiday Opening Hours: 09:30 - 23:00 |
                            Christmas Eve, New Year's Eve 10:00 - 22:00 |
                            Closed Easter Sunday, Christmas Day, Boxing Day and New Year’s Day.

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default OpeningTimes;