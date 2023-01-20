import React, {useEffect, useState} from "react";
import './Fiche.css'
import Slider from "../../components/Slideshow/Carousel"
import Location from "../../components/location/Location"
import AccordionLogement from '../../components/Accordion/AccordionLogement'
import data from '../../data/logement_data.json'
import {useParams} from "react-router-dom";
import {tagMap} from '../../components/Tags/Tags'
import Tags from "../../components/Tags/Tags";


function Fiche() {

	const [logement, setLogement] = useState({
		tags: [],
		equipments: [],

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

	const logementDescription = logement.description;
	const logementEquipement = logement.equipments;

	let mapLogementEquipement = logementEquipement.map((l, index) => (
		<p key={l}>{logement.equipments[index]}</p>
	))


	return (

		<>
			<section>
				<div>
					<Slider />
				</div>
				<div>
					<Location />
					{/*<Tags/>*/}
					<div className='container-tag' content={tagMap}></div>
					<div className='Collapse-style'>
						<div className="Description">
							<AccordionLogement title="Description" content={logementDescription}/>
						</div>
						<div className="Equipements">
							<AccordionLogement title="Equipements" content={mapLogementEquipement}/>
						</div>

					</div>

				</div>

			</section>


		</>
	)
}

export default Fiche;

