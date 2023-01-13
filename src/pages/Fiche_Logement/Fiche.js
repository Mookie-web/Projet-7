import React  from "react";
import './Fiche.css'
import Slider from "../../components/Slideshow/Carousel"
import Location from "../../components/location/Location"
import Collaspe from "../../components/Collapse/Collaspe"



function Fiche () {
    return(

        <>
            <section>
                <div>
                    <Slider />
                </div>
                <div>
                    <Location />

                    <Collaspe />

                </div>

            </section>





        </>
    )}
export default Fiche;