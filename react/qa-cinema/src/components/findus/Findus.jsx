import "./findus.css"
import Entrance from "./ourEntrance.jsx"
import Map from "./map.jsx"


const FindUs = () => {

    return (
        <>
            <div className="findUsIntro container-fluid">
                <h1> Find Us </h1>
                <h3> Wondering how to find us? Here's how: </h3>
            </div>

            <div className="findUsTable container-fluid ">
                <table className="mx-auto table-responsive">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><h3 className="findUsTitles">Our Address</h3><h4>QA Cinema, <br /><br /> International House,<br /><br /> 1 St Katharine’s Way,<br /><br /> London,<br /><br /> E1W 1UN</h4></td>
                            <td><h3 className="findUsTitles">Directions & Parking</h3><h4>Taking the tube? Closest stations are: <br /><br />
                                Queen's Cross St. Pancras:<br /> 5 mins walk down Boris Avenue, turn right onto St Katharine's Way,<br />
                                Canary Woof: <br /> 1 min walk down Katharine's Way <br /><br />
                                Bus 101 and 73 stop outside the cinema. <br />
                                There is also 30 spaces of parking if you wish to come by car. <br /><br />
                            </h4></td>
                        </tr>

                        <tr>
                            <td colSpan={2}><h3 className="findUsTitles" >Our Entrance</h3></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><Entrance /></td>
                        </tr>

                        <tr>
                            <td colSpan={2}></td>
                        </tr>

                        <tr>
                            <td colSpan={2}><h3 className="findUsTitles" > Find us on maps </h3></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><Map /></td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <div className="alert-success" role="alert">
                                    The average person goes to the cinema 6 times a year! You may aswell spend those times in ultimate comfort at QA Cinema...
                                </div>
                            </td>
                        </tr>

                        {/* <tr>
                        <td><h4>49 premium leather seats</h4></td>
                        <td><h4>Experience your film in true comfort by relaxing into our fully customisable recliner seating, cup holders either side.</h4><br /></td>
                    </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FindUs;