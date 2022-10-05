import StandardSeating from "./standardSeating.jsx"
import DeluxeSeating from "./deluxeSeating.jsx"
import StandardDecor from "./standardDecor.jsx"
import DeluxeDecor from "./deluxeDecor.jsx"
import "./screen.css"


const Screens = () => {

    return (
        <>
            <div className="seatingIntro container-fluid">
                <h1> Our seating arrangements </h1>
                <h3> Below you can find our two types of screens, Standard and Deluxe</h3>
            </div>

            <div className="screensTable container-fluid ">
                <table className="mx-auto table-responsive">
                    <tr>
                        <td className="seatingTitle" colSpan={2}><h3>Standard seating arrangement</h3></td>
                    </tr>
                    <tr>
                        <td><StandardSeating /></td>
                        <td><StandardDecor /></td>
                    </tr>
                    <tr>
                        <td><h4>152 premium fabric seats.</h4></td>
                        <td><h4>Unobstructed view of the screen every time, cup holders either side.</h4>
                            <br /></td>
                    </tr>

                    <tr>
                        <td colSpan={2}><h3 className="seatingTitle" >Deluxe seating arrangement</h3></td>
                    </tr>
                    <tr>
                        <td><DeluxeSeating /></td>
                        <td><DeluxeDecor /></td>
                    </tr>
                    <tr>
                        <td><h4>49 premium leather seats</h4></td>
                        <td><h4>Experience your film in true comfort by relaxing into our fully customisable recliner seating, cup holders either side.</h4><br /></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Screens;
