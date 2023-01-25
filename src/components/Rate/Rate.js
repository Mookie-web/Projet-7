import React from 'react';
import greyStar from '../../assets/greystar.png'
import redStar from '../../assets/redstar.png'
import "../Rate/Rate.css"

function Rate({rating}) {
    const ratingScore = [1,2,3,4,5]
    return (
        <div className="container-rate">
            {ratingScore.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="rating_icon"
                        src={redStar}
                        alt="red star"
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating_icon"
                        src={greyStar}
                        alt="grey star"
                    />
                )
            )}
        </div>
    )
}

export default Rate;
