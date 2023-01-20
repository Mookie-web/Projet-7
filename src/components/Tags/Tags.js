import React, {useEffect, useState} from "react";
import '../Tags/Tags.css'
import data from '../../data/logement_data.json'
import {useParams} from "react-router-dom";

function Tags() {

    const [items, setItems] = useState({
        tags: []
    });
    const { id } = useParams();

    useEffect(() => {
        data.map((tags) => {
            if (tags.id === id)
                setItems(tags);
            return tags;
        })
    },  [id]);


    const tag = items.tags;

    let tagMap = tag.map((e, index) => (
        <p key={e}>{items.tags[index]}</p>
    ));

// return(
//         // <div className='container-tag' content={tagMap}></div>
// )


}
export default Tags;

// export let tagMap
