import React, { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import Filters from "../components/propertySearcher/Filter";
import List from "../components/propertySearcher/List";
import ShowFilters from "../components/propertySearcher/ShowFIlters";
import JsonData from "../data/Textos.json";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Contact as Footer } from "../components/home/contact";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { WHATSAPP_NUMBER } from "../data/datos";
import { getHouses } from "../firebase/";
import { useDispatch } from "react-redux";
import { setProperties } from "../store/actions/propertyActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  filters: {
    width: "30%",
    paddingLeft: "30px",
  },
  main: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  showFilters: {
    marginTop: "100px",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  list: {
    padding: "10px",
    marginLeft: "8%",
    flex: 1,
  },
  whatsapp: {
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#25d366",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    left: "50%",
    margin: "-25px 0 0 -25px",
    position: "absolute",
    top: "50vh",
  },
}));

const PropertySearcher = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
    const fetchHouses = async () => {
      setLoading(true);
      const propertyList = await getHouses();
      dispatch(setProperties(propertyList));
      setLoading(false);
    };

    fetchHouses();
  }, [dispatch]);

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
        <Box
          className={classes.list}
          style={window.innerWidth < 600 ? { marginLeft: 0 } : null}
        >
          {loading ? (
            <CircularProgress className={classes.loading} />
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
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className={classes.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon fontSize="large" />
      </a>
    </Grid>
  );
};

export default PropertySearcher;
