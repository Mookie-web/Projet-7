import React, { useState, useEffect } from 'react';
import './Carousel.css';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import { useParams } from 'react-router-dom';
const data = require('../../data/logement_data.json');


function Slider() {
    const { id } = useParams();
    const [logement, setLogement] = useState({});
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const logement = data.find(logement => logement.id === id);
        setLogement(logement);
    }, [id]);

    const nextSlide = () => {
        setCurrent(current === logement.pictures.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? logement.pictures.length - 1 : current - 1);
    }

    if (!logement.pictures) return <div>Loading...</div>

    return (
        <>
            <div className="carousel-container">
            <img src={leftArrow} alt="previous" onClick={prevSlide} className="arrowLeft"/>
            <img src={logement.pictures[current]} alt="slide" className="slide" />
            <img src={rightArrow} alt="next" onClick={nextSlide} className="arrowRight"/>
            <div className="slideNumber"> {current + 1} / {logement.pictures.length} </div>

        </div>

        </>



    );
}

export default Slider;
