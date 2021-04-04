import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PropertyCard from "../components/propertySearcher/PropertyCard";
import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const PropertySearcher = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [selectedProperty, setSelectedProperty] = useState();
  const properties = useSelector((state) => state.propertyReducer.properties);

  useEffect(() => {
    const property = properties.filter((item) => item.id === id);
    setSelectedProperty(property[0]);
  }, [properties, id]);
  return (
    <Grid className={classes.root}>
      {!selectedProperty ? (
        <CircularProgress />
      ) : (
        <PropertyCard property={selectedProperty} />
      )}
    </Grid>
  );
};

export default PropertySearcher;
