import React, {useEffect, useState} from 'react';
import './Collaspe.css';
import { useParams } from 'react-router-dom';
import Chevron from '../../assets/chevron.svg';
import dataDescription from '../../data/logement_data.json';

function Collapse() {
    const { id } = useParams();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [logementData, setLogementData] = useState({});

    useEffect(() => {
        if(typeof id === 'string'){
            const logement = dataDescription.find(logement => logement.id === id);
            setLogementData(logement);
        }
    }, [id]);

    return (
        <div className="container-description">
            <h1>Description</h1>
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ?  <img src={Chevron} alt="Chevron Up" /> : <img src={Chevron} alt="Chevron down" />}
            </button>
            {!isCollapsed && logementData ? <p>{logementData.description}</p> : null}
        </div>
    );
}

export default Collapse;
