import React from "react";
// import Grid from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';


const ColumnGrid = props =>
    <Grid {...props}>
        {props.children}
    </Grid>




export default ColumnGrid;