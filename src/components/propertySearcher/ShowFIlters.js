import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Chip, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  filters: {
    display: "flex",
    border: "1px solid white",
    borderRadius: "10px",
    height: "35px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ShowFilters = ({
  filters,
  setFilters,
  setPrice,
  setSelectedCurrency,
  setSquareMeters,
}) => {
  const classes = useStyles();

  const handleRemoveFilter = (item) => {
    let nonRemoved;
    if (item.field === "price") {
      nonRemoved = filters.filter(
        (filter) =>
          filter.name !== item.name &&
          filter.field !== "filterPriceFrom" &&
          filter.field !== "filterPriceTo" &&
          filter.field !== "filterCurrency"
      );
      setPrice({
        from: "",
        to: "",
      });
      setSelectedCurrency("");
    } else if (item.field === "squareMeters") {
      nonRemoved = filters.filter(
        (filter) =>
          filter.name !== item.name &&
          filter.field !== "filterSquareMetersFrom" &&
          filter.field !== "filterSquareMetersTo"
      );
      setSquareMeters({
        from: "",
        to: "",
      });
    } else {
      nonRemoved = filters.filter((filter) => filter.name !== item.name);
    }
    setFilters(nonRemoved);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.topBar}>
        <Typography>Estas Buscando :</Typography>
        <Button
          style={{ color: "white" }}
          onClick={() => {
            setFilters([]);
          }}
        >
          Limpiar filtros
        </Button>
      </Grid>
      <Grid className={classes.filters}>
        {filters
          .filter(
            (item) =>
              item.field !== "filterSquareMetersFrom" &&
              item.field !== "filterSquareMetersTo" &&
              item.field !== "filterPriceFrom" &&
              item.field !== "filterPriceTo"
          )
          .map((item) => {
            return (
              <Chip
                style={{
                  background: "white",
                  color: "black",
                }}
                variant="outlined"
                key={item.name}
                label={item.name}
                onDelete={() => {
                  handleRemoveFilter(item);
                }}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};

export default ShowFilters;
