import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import Filters from "../components/propertySearcher/Filter";
import List from "../components/propertySearcher/List";
import ShowFilters from "../components/propertySearcher/ShowFIlters";
import JsonData from "../data/Textos.json";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Contact as Footer } from "../components/home/contact";

const useStyles = makeStyles((theme) => ({
  root: {},
  filters: {
    width: "30%",
    background: "red",
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
  const [loading, setLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const [price, setPrice] = useState({
    from: "",
    to: "",
  });
  const [squareMeters, setSquareMeters] = useState({
    from: "",
    to: "",
  });
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Grid>
      <Navigation landingPageData={landingPageData} />
      <Box className={classes.showFilters}>
        {filters.length > 0 && (
          <ShowFilters
            filters={filters}
            setFilters={setFilters}
            setSelectedCurrency={setSelectedCurrency}
            price={price}
            setPrice={setPrice}
            squareMeters={squareMeters}
            setSquareMeters={setSquareMeters}
          />
        )}
      </Box>
      <Grid className={classes.main}>
        <Filters
          filters={filters}
          setFilters={setFilters}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          price={price}
          setPrice={setPrice}
          squareMeters={squareMeters}
          setSquareMeters={setSquareMeters}
        />
        <Box className={classes.list}>
          {loading ? (
            <CircularProgress />
          ) : (
            <List
              filters={filters}
              setFilters={setFilters}
              setLoading={setLoading}
            />
          )}
        </Box>
      </Grid>
      <Footer data={landingPageData.Contact} />
    </Grid>
  );
};

export default PropertySearcher;
