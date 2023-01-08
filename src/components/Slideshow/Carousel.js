import React, { useState} from "react";
import logementData from '../../data/logement_data.json'
import {Link} from 'react-router-dom'
function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const l = props.items;

    return (
        <>
            <section>
                <div>
                    {logementData.map((l) => (
                        <link key={l.id}  to={`/logement/${l.id}`}>
                            <div style={{
                                backgroundImage : `mix-blend-mode: normal, border-radius: 25px, url(${(l.cover)}`
                            }}>

                            </div>
                        </link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Carousel