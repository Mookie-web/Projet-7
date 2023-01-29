import React, {useEffect, useState} from "react";
import './Fiche.css'
import Slider from "../../components/Slideshow/Carousel"
import Location from "../../components/location/Location"
import AccordionLogement from '../../components/Accordion/AccordionLogement'
import data from '../../data/logement_data.json'
import {useParams} from "react-router-dom";
import Tags from "../../components/Tags/Tags";
import Avatar from "../../components/Avatar/Avatar";
import Rate from "../../components/Rate/Rate";
import Error404 from "../Error/Error404";


function Fiche() {

    const [logement, setLogement] = useState({
        tags: [],
        equipments: [],
        host: {name: "", picture: ""}

    });
    const {id} = useParams();

    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return null
        })
    }, [id]);

    if (logement.id === undefined) {
        return <Error404 />;
    }

    const logementDescription = logement.description;
    const logementEquipement = logement.equipments;

    let mapLogementEquipement = logementEquipement.map((l, index) => (
        <p key={l}>{logement.equipments[index]}</p>
    ))

    return (
        <>
            <section>
                <div>
                    <Slider/>
                </div>
                <div>

                    <div>
                        <div className='container-info'>
                            <div>
                                <div>
                                    <Location/>
                                </div>
                                <div>
                                    <Tags logement={logement}/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Avatar avatar={logement.host}/>
                                    <div>
                                        <Rate rating={logement.rating}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="CollapseLogement">
                        <AccordionLogement title="Description" content={logementDescription} />
                        <AccordionLogement
                            title="Equipements"
                            content={<div className="equipments">{mapLogementEquipement}</div>}
                        />
                    </div>
                </div>

            </section>


        </>
    )
}

export default Fiche;

