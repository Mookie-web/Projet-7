import React from "react";
import '../Tags/Tags.css'

function Tags({logement}) {

    const tag = logement.tags;
    const tagMap = tag.map((e, index) => (
        <p className="container-tag" key={e[index]}>{logement.tags[index]}</p>
    ));
    return <div className="container-flex-tag">{tagMap}</div>;
}

export default Tags;


