import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "../location/Location.css"
import dataLocation from '../../data/logement_data.json'

function Location () {
    const { id } = useParams();
    const [logement,setDescription] = useState({})

    useEffect(() => {
        const logement = dataLocation.find(logement => logement.id === id);
        setDescription(logement);
    }, [id]);

    return (
        <div>
            <p className="container-title">{logement.title}</p>
            <p className="container-location">{logement.location}</p>
        </div>
    )


}

export default Location;

