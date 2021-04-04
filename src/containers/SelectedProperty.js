import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import JsonData from "../data/Textos.json";
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
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
    const property = properties.filter((item) => item.id === id);
    setSelectedProperty(property[0]);
  }, [properties, id]);
  return (
    <Grid className={classes.root}>
      <Navigation landingPageData={landingPageData} />
      {!selectedProperty ? (
        <CircularProgress />
      ) : (
        <PropertyCard property={selectedProperty} />
      )}
    </Grid>
  );
};

export default PropertySearcher;
