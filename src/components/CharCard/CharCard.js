import React from "react";
import "./CharCard.css";

const CharCard = ({ id, name, image, handlePicked }) => (
    <div className="card"
    key={id}
    data-id={id}
    name={name}
    onClick={handlePicked}>
        <img src= {image} alt= {name}/>
        
    </div>
)

export default CharCard;
