import React from "react";
import '../../components/Avatar/Avatar.css'

function Avatar (info) {


    return (
        <div className="container-avatar">
            <div className="container-img-avatar">
                <img src={info.avatar.picture} alt="avatar"/>
            </div>

            <div className="container-h1-avatar">
                <h1>{info.avatar.name}</h1>
            </div>

        </div>
    )


}

export default Avatar;

