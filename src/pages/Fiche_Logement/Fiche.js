import React, {useEffect, useState} from "react";
import './Fiche.css'
import Slider from "../../components/Slideshow/Carousel"
import Location from "../../components/location/Location"
import AccordionLogement from '../../components/Accordion/AccordionLogement'
import data from '../../data/logement_data.json'
import {useParams} from "react-router-dom";


function Fiche () {

    const [logement, setLogement] = useState({
        tags: [],
        equipments: [],

    });
    const { id } = useParams();

    useEffect(() => {
        data.map((house) => {
            if(house.id === id){
                setLogement(house)
            }
            return null
        })
    },[id]);

    const  logementDescription = logement.description;
    const logementEquipement = logement.equipments;

    let mapLogementEquipement = logementEquipement.map((l, index )=>(
        <p key={l}>{logement.equipments[index]}</p>
    ))


    return(

        <>
            <section>
                <div>
                    {/*<Slider />*/}
                </div>
                <div>
                    {/*<Location />*/}

                    {/*<Collaspe />*/}

                    <div>
                        <AccordionLogement title="Description" content={logementDescription} />
                        <AccordionLogement title="Equipements" content={<div>{mapLogementEquipement}</div>}/>
                    </div>

                </div>

            </section>





        </>
    )}
export default Fiche;