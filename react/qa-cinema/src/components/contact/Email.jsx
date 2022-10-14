import axios from 'axios';

const Email = () => {


    const handleSubmit = event => {

        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        axios.post('http://localhost:3001/emails/create', {
            fullname: name,
            email: email,
            subject: subject,
            message: message
        })
            .then((response) => {
                window.alert("Email has been submitted, a member of our team will contact you shortly.");
            }, (error) => {
                console.log(error);
            });


        event.target.reset();
    }

    return (
        <>
            <div className="alert-success" id="hiddenmessage" role="alert">
            </div>
            <div className="emailIntro container-fluid">
                <h1> Email us for any queries </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="emailTable container-fluid ">
                    <table className="mx-auto table-responsive" >
                        <tbody>
                            <tr>
                                <td><input className="form-control" type="text" id="name" name="name" placeholder="Name*" required /></td>
                            </tr>
                            <tr>
                                <td><input className="form-control" type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" id="email" name="email" placeholder="Contact Email*" required /></td>
                            </tr>
                            <tr>
                                <td><input className="form-control" type="text" id="subject" name="subject" placeholder="Subject*" required /></td>
                            </tr>
                            <tr>
                                <td><textarea className="form-control" rows="4" cols="50" id="message" name="message" placeholder="Message*" required></textarea></td>
                            </tr>
                            <tr>
                                <td><button className="btemail" type="submit"> Submit </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </>
    )

}

export default Email