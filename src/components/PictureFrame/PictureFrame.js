import React from "react";
import "./PictureFrame.css";
import "../../picturecards";

const PictureFrame = ({ id, name, image, handlePicked }) => (
    <div className="card profileImage"
    key={id}
    data-id={id}
    name={name}
    onClick={handlePicked}>
        <img className="profileImage" src= {image} title = {name} alt= {name}/>
        
    </div>
)

export default PictureFrame;
