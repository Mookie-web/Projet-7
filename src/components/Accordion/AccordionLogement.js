import React from 'react';
import {useState} from 'react';
const chevron = <i className="fa-solid fa-chevron-up"></i>


function AccordionLogement({title, content}) {
    const [active, setActive] = useState(false);

    const handToogle = (e) => {
        setActive(!active)
    }

    return (
        <div className={`toto ${active && "active"}`}>
            <div onClick={handToogle}>
                {title}
                <div>{chevron}</div>
            </div>
            <div>{content}</div>
        </div>
    );
}

export default AccordionLogement