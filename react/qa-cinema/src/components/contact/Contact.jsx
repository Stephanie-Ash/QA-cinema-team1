import Email from "./Email.jsx"
import "./Contact.css"
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>

            <div className="contactUsIntro container-fluid">
                <h1> Contact Us </h1>
                <h3> Need some help? Here's how to contact our team: </h3>
            </div>

            <div className="contactUsTable container-fluid ">
                <table className="mx-auto table-responsive">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><h3 className="contactUsTitles">Send a letter to: </h3><h4>First Floor, <br /><br /> International House,<br /><br /> 1 St Katharine’s Way,<br /><br /> London,<br /><br /> E1W 1UN</h4></td>
                            <td><h3 className="contactUsTitles">Call or email us: </h3><h4>Phone:<br />
                                Tel: 0345 074 7829<br /><br />
                                Email: <br />
                                <a href="mailto:sashdown@qa.com">sashdown@qa.com</a>
                            </h4></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><h3 className="contactUsTitles" > Or use the form below </h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Email />
        </>


    )


}

export default Contact