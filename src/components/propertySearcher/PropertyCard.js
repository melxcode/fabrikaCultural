import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const PropertyCard = ({ property }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Typography>{property.estado}</Typography>
    </Grid>
  );
};

export default PropertyCard;
