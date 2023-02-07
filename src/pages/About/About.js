// import React from 'react'
// import BannerAbout from'../../assets/BannerAbout.png'
// import '../../components/Accordion/AccordionLogement'
// import '../../pages/About/About.css'
// import AccordionLogement from "../../components/Accordion/AccordionLogement";
//
// function About() {
//
//     return  (
//         <main className='main_about'>
//             <article className='banner'>
//                 <img className='banner_img' src={BannerAbout} alt="paysage montagne" />
//             </article >
//
//             <section className='section_about'>
//
//                 <div className='collapse_about_container'>
//                     <AccordionLogement
//                         title= "Fiabilité"
//                         content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
//                     />
//                 </div>
//                 <div className='collapse_about_container'>
//                     <AccordionLogement
//                         title= "Respect"
//                         content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
//                     />
//                 </div>
//                 <div className='collapse_about_container'>
//                     <AccordionLogement
//                         title= "Service"
//                         content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
//                     />
//                 </div>
//                 <div className='collapse_about_container'>
//                     <AccordionLogement
//                         title= "Sécurité"
//                         content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
//                     />
//                 </div>
//             </section>
//         </main>
//     )
// }
// export default About;
import './About.css'
import imgAPropos from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";
import Accordion from '../../components/Accordion/AccordionLogement';

function A_propos() {
    return (
        <>

            <section>
                <div className="background_img">
                    <img src={imgAPropos} alt=""></img>
                </div>
                <div className="accordions">
                    <Accordion
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <Accordion
                        title="Respect"
                        content="La bienveillance fais partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Accordion
                        title="Service"
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                    <Accordion
                        title="Responsabilité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>

            </section>
        </>
    );
}

export default A_propos;