import React from "react";
import "./Start.css";





// start message for game
const Start = props => (
    <div className="default" style={props.style}>
        {props.message ? (
            <p>{props.message}</p>
        ) : (
                <p className="default-msg">Click a Taco friend to start the game</p>
            )}
    </div>




)



// // GridMDC
// const GridMDC = props =>
//     <Grid {...props}>
//         {props.children}
//     </Grid>





export default Start;


