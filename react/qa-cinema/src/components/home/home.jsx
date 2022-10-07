import { useState, useEffect } from 'react';
import axios from 'axios';

import './home.css';
import Carousel from "./Carousel.jsx";
import Info from "./Info.jsx";
import LinkCard from './LinkCard';

import whatsOn from '../../images/home-whats-on.jpg';
import comingSoon from '../../images/home-coming-soon.jpg';
import placesToGo from '../../images/home-places-to-go.jpg';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3001/films/current")
        .then(res => res)
        .then((result) => {
            setIsLoaded(true);
            setFilms(result.data);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);

    if(error) {
        return(
            <>
            <div>Error loading images: {error.message}</div>
            <Info/>
            <section className="container-fluid mb-5">
                <div className="row">
                    <LinkCard image={whatsOn} alt={"Link to Whats On page"} page={"/listings/whatson"}/>
                    <LinkCard image={comingSoon} alt={"Link to Coming Soon page"} page={"/listings/upcoming"}/>
                    <LinkCard image={placesToGo} alt={"Link to Places To Go page"} page={"/placestogo"}/>
                </div>
            </section>
        </>
        )
    }
    else if(!isLoaded) {
        return(
        <>
            <div>Loading images...</div>
            <Info/>
            <section className="container-fluid mb-5">
                <div className="row">
                    <LinkCard image={whatsOn} alt={"Link to Whats On page"} page={"/listings/whatson"}/>
                    <LinkCard image={comingSoon} alt={"Link to Coming Soon page"} page={"/listings/upcoming"}/>
                    <LinkCard image={placesToGo} alt={"Link to Places To Go page"} page={"/placestogo"}/>
                </div>
            </section>
        </>
        )
    } else {
        return (
            <>
                <Carousel movies={films}/>
                <Info/>
                <section className="container-fluid mb-5">
                    <div className="row">
                        <LinkCard image={whatsOn} alt={"Link to Whats On page"} page={"/listings/whatson"}/>
                        <LinkCard image={comingSoon} alt={"Link to Coming Soon page"} page={"/listings/upcoming"}/>
                        <LinkCard image={placesToGo} alt={"Link to Places To Go page"} page={"/placestogo"}/>
                    </div>
                </section>
            </>
        )
    }  
}

export default Home;