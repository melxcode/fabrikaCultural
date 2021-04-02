import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import Filters from "../components/propertySearcher/Filter";
import JsonData from "../data/Textos.json";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  filters: {
    marginTop: "160px",
    width: "30%",
    background: "white",
  },
}));

const PropertySearcher = () => {
  const classes = useStyles();

  const [landingPageData, setLandingPageData] = useState({});
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Grid>
      <Navigation landingPageData={landingPageData} />
      <Box className={classes.filters}>
        <Filters filters={filters} setFilters={setFilters} />
      </Box>
    </Grid>
  );
};

export default PropertySearcher;
