import React from 'react';
import {useState} from 'react';
import '../../components/Accordion/AccordionLogement.css'
const chevron = <i className="fa-solid fa-chevron-up"></i>

function AccordionLogement({title, content}) {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const handleToggle = (e) => {
        setActive(!active);
        setOpen(!open);
    }

    return (
        <div className={`accordion-logement ${active && "active"}`}>
            <button className="title-white" onClick={handleToggle}>
                {title}
                <div className={`chevron ${open ? "open" : "closed"}`}>{chevron}</div>
            </button>
            <div className={`content ${active ? "show" : "hide"}`}>{content}</div>
        </div>
    );
}

export default AccordionLogement;
// import '../../components/Accordion/AccordionLogement.css'
// import { useState } from "react";
// import React from "react";
// const chevron = <i className="fa-solid fa-chevron-up"></i>;
//
// function AccordionLogement({ title, content }) {
//     const [active, setActive] = useState(false);
//
//     const handleToggle = (e) => {
//         setActive(!active);
//     };
//     return (
//         <div className={`AccordionLogement ${active && "active"}`}>
//             <div className="accordionTitle" onClick={handleToggle}>
//                 {title} <div>{chevron}</div>
//             </div>
//             <div className="accordionContent">{content}</div>
//         </div>
//     );
// }
//
// export default AccordionLogement;
