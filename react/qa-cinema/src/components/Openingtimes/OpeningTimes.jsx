import "./OpeningTimes.css"

const OpeningTimes = () => {
    return (
        <>
        
        <h1>Opening Times:</h1>
        <div className="container-fluid">
        <table className="OpeningTimes mx-auto">
            <tr id="Monday" itemprop="openingHours" title="Open Monday at 7am to 1am">
                <td className="Days">Monday</td>
                <td className="morning">07:00 - 12:30</td>
                <td className ="space"></td>
                <td className="evening">13:30- 01:00</td>
            </tr>
            <tr id="Tuesday" itemprop="openingHours" title="Open Tuesday at 7am to 1am">
                <td className="Days" >Tuesday</td>
                <td className="morning">07:00 - 12:30</td>
                <td className ="space"> </td>
                <td className="evening">13:30- 01:00</td>
            </tr>
            <tr id="Wednesday " itemprop="openingHours" title="Open Wednesday at 7am to 1am">
                <td className="Days">Wednesday   </td>
                <td className="morning">07:00 - 12:30</td>
                <td className ="space"> </td>
                <td className="evening">13:30- 01:00</td>
            </tr>
            <tr id="Thursday" itemprop="openingHours" title="Open Thursday at 7am to 1am">
                <td className="Days">Thursday</td>
                <td className="morning">07:00 - 12:30</td>
                <td className ="space"></td>
                <td className="evening">13:30- 01:00</td>
            </tr>
            <tr id="Friday" itemprop="openingHours" title="Open Friday at 7am to 1am">
                <td className="Days">Friday</td>
                <td className="morning">07:00 - 12:30</td>
                <td className ="space"></td>
                <td className="evening">13:30- 01:00</td>
            </tr>
            <tr id="Saturday" itemprop="openingHours" title="Open Saturday at 7:30am to 1am">
                <td className="Days">Saturday</td>
                <td className="morning">07:30 - 12:30</td>
                <td className ="space"></td>
                <td className="evening">13:30- 01:00</td>
            </tr>
            <tr id="Sunday" itemprop="openingHours" title="Open Sunday at 11am to 12am">
                <td className="Days">Sunday</td>
                <td className="morning">11:00 - 15:30</td>
                <td className ="space"></td>
                <td className="evening">16:30- 00:00</td>
            </tr>
        </table>
        <p className="space2"></p>
        <div className="row">
        <div className ="col-12">
        <div className="alert-warning" >
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16 mx-auto">
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
   <i className="fa-solid fa-circle-info"></i>
  </symbol>
        *QA Cinema closes Monday-Saturday  12:30 - 13:30 and Sunday 15:30 - 16:30 for cleaning purposes to ensure we deliver the best possible experience to our customers.<br/>
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