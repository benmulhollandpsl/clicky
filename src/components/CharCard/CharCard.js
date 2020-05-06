import React from "react";
import "./CharCard.css";
import "../../picturecards";

const CharCard = ({ id, name, image, handlePicked }) => (
    <div className="card profileImage"
    key={id}
    data-id={id}
    name={name}
    onClick={handlePicked}>
        <img className="profileImage" src= {image} alt= {name}/>
        
    </div>
)

export default CharCard;
