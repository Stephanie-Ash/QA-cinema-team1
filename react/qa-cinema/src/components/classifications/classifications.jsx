import { Link } from "react-router-dom"
import "./classifications.css"
import iuniversal from "../../images/universal.png";
import ipg from "../../images/pg.png";
import i12a from "../../images/12a.png";
import i12 from "../../images/12.png";
import i15 from "../../images/15.png";
import i18 from "../../images/18.png";
import ir18 from "../../images/r18.png";




const Classifications = () => {

    return (
        <><div className="classificationsIntro container-fluid">
            <h1> Classifications </h1>
            <h3> Click on one of the classifications to find out more. </h3>
        </div>
            <div className="classificationsTable container-fluid ">
                <table className="classificationsTable mx-auto table-responsive" >
                    <tbody>
                        <tr>
                            <td>
                                <Link className="classTitles" ><img src={iuniversal} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse1"></img><h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse1">U Universal - Suitable for all</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse1" >
                                    <div className="card card-body classcard">
                                        A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. <br />
                                        U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link className="classTitles" >
                                    <img src={ipg} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse2"></img>
                                    <h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse2">PG Parental Guidance</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse2" >
                                    <div className="card card-body classcard">
                                        General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link className="classTitles" >
                                    <img src={i12a} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse3"></img>
                                    <h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse3">12A/12 – Suitable for 12 years and over</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse3" >
                                    <div className="card card-body classcard">
                                        Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance.
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link className="classTitles" >
                                    <img src={i12} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse4"></img>
                                    <h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse4">12 – Suitable for 12 years and over</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse4" >
                                    <div className="card card-body classcard">
                                        Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may rent or buy a 12 rated video work.
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link className="classTitles" >
                                    <img src={i15} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse5"></img>
                                    <h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse5">15 – Suitable only for 15 years and over</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse5" >
                                    <div className="card card-body classcard">
                                        No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link className="classTitles" >
                                    <img src={i18} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse6"></img>
                                    <h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse6">18 – Suitable only for adults</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse6" >
                                    <div className="card card-body classcard">
                                        No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link className="classTitles" >
                                    <img src={ir18} alt="universal" data-bs-toggle="collapse" data-bs-target="#collapse7"></img>
                                    <h2 className="classTitles" data-bs-toggle="collapse" data-bs-target="#collapse7">R18 - To be shown only in specially licensed cinemas, or supplied only in licensed sex shops, and to adults only</h2>
                                </Link><br /><br />
                                <div className="collapse " id="collapse7" >
                                    <div className="card card-body classcard">
                                        The R18 category is a special and legally-restricted classification primarily for explicit works of consenting sex or strong fetish material involving adults. Films may only be shown to adults in specially licensed cinemas, and video works may be supplied to adults only in licensed sex shops. R18 video works may not be supplied by mail order.</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>If you would like to find out more about classifications, you can find it on the BBFC website: <a target="_blank" rel="noreferrer" className="classTitlesLink" href="https://www.bbfc.co.uk/about-classification" >BBFC</a></h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>




        </>


    )



}

export default Classifications