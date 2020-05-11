import React from "react";
import "./Start.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import "../picturecards";
// import Grid from '@material-ui/core/Grid';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import Paper from "@material-ui/core/Paper";





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


// // score board
// const Score = props => (
//     <div className="score">
//         {props.type}: {props.score}
//     </div>
// )

// // box containing where images will show
// const PictureFrame = ({ id, name, image, handlePicked }) => (
//     <div className="card profileImage"
//     key={id}
//     data-id={id}
//     name={name}
//     onClick={handlePicked}>
//         <img className="profileImage" src= {image} alt= {name}/>
        
//     </div>
// )


// // NavBar
// const NavBar = props => {
//     return(
//         <div>
//         <AppBar position="static" {...props}>
//             <Toolbar>
//                 <Typography variant="headline" color="inherit" align="center">
//                 Clicky
//                 </Typography>
//             </Toolbar>
//         </AppBar>
//         </div>
//     )
// }

// // GridMDC
// const GridMDC = props =>
//     <Grid {...props}>
//         {props.children}
//     </Grid>

// const BottomNavMDC = props => (
//     <BottomNavigation {...props}>
//         {props.children}
//     </BottomNavigation>
// )



// const PaperMDC = props => (
//     <Paper>
//         {props.children}
//     </Paper>
// )



export default Start;
// export { PaperMDC };
// export { GridMDC };
// export { Score };
// // export default Score;
// export { PictureFrame };
// export { NavBar };
// export { BottomNavMDC };