import React, { useState, useEffect } from 'react';
import './Carousel.css';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import { useParams } from 'react-router-dom';
const data = require('../../data/logement_data.json');

function Slider() {
    const { id } = useParams();
    const [logement, setLogement] = useState({pictures:[]});
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const foundLogement = data.find(logement => logement.id === id);
        setLogement(foundLogement);
    }, [id]);

    const nextSlide = () => {
        setCurrent(current === logement.pictures.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? logement.pictures.length - 1 : current - 1);
    }

    if(!logement.pictures || logement.pictures.length <= 1) {
        return (
            <section className="sectionSlider">
                <div className='slider'>
                    {logement.pictures.map((picture, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <div className="imageSlider"
                                         style={{
                                             backgroundImage: `url(${picture})`
                                         }}>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        );


    }

    return (
        <section className="sectionSlider">
            <div className='slider'>
                {logement.pictures.map((picture, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <div className="imageSlider"
                                     style={{
                                         backgroundImage: `url(${picture})`
                                     }}>
                                    <img src={leftArrow} alt="previous slide" onClick={prevSlide} className="arrow"/>

                                    <span className="slideNumber"> {current + 1} / {logement.pictures.length}
                                    </span>

                                    <img src={rightArrow} alt="next slide" onClick={nextSlide} className="arrow"/>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Slider;
