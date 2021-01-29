import React from "react";
import {
  Divider,
  Grid
} from "@material-ui/core";

export default class MobileRes extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item lg={4} sm={12} md={6} style={{backgroundColor: "red", height: 100}}>
          Grid 1
        </Grid>
        <Grid item lg={4} sm={12} md={6} style={{backgroundColor: "green", height: 100}}>
          grid 2
        </Grid>
        <Grid item lg={4} sm={12} md={6} style={{backgroundColor: "blue", height: 100}}>
          grid 3
        </Grid>

      </Grid>
    )
  }
}