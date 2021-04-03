import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import Filters from "../components/propertySearcher/Filter";
import List from "../components/propertySearcher/List";
import JsonData from "../data/Textos.json";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  filters: {
    marginTop: "160px",
    width: "30%",
    background: "white",
    paddingLeft: "30px",
  },
  main: {
    display: "flex",
  },
  list: {
    marginTop: "160px",
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
      <Grid className={classes.main}>
        <Box className={classes.filters}>
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
        <Box className={classes.list}>
          <List />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PropertySearcher;
