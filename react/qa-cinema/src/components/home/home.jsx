import './home.css';
import Carousel from "./Carousel.jsx";
import Info from "./Info.jsx";
import LinkCard from './LinkCard';

import whatsOn from '../../images/home-whats-on.jpg';
import comingSoon from '../../images/home-coming-soon.jpg';
import thingsToDo from '../../images/home-things-to-do.jpg';

const Home = () => {

    return (
        <>
            <Carousel/>
            <Info/>
            <section className="container-fluid mb-5">
                <div className="row">
                    <LinkCard image={whatsOn} page={"Link to Whats On page"}/>
                    <LinkCard image={comingSoon} page={"Link to Coming Soon page"}/>
                    <LinkCard image={thingsToDo} page={"Link to Things To Do page"}/>
                </div>
            </section>
        </>
    )
}

export default Home;