import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import Filters from "../components/propertySearcher/Filter";
import List from "../components/propertySearcher/List";
import ShowFilters from "../components/propertySearcher/ShowFIlters";
import JsonData from "../data/Textos.json";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  filters: {
    width: "30%",
    background: "white",
    paddingLeft: "30px",
  },
  main: {
    display: "flex",
  },
  showFilters: {
    marginTop: "100px",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  list: {
    padding: "10px",
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
      <Box className={classes.showFilters}>
        {filters.length > 0 && (
          <ShowFilters filters={filters} setFilters={setFilters} />
        )}
      </Box>
      <Grid className={classes.main}>
        <Box>
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
        <Box className={classes.list}>
          <List filters={filters} setFilters={setFilters} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PropertySearcher;
