import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  filters: {
    display: "flex",
    border: "1px solid black",
    borderRadius: "10px",
    height: "35px",
  },
}));

const ShowFilters = ({ filters, setFilters }) => {
  const classes = useStyles();

  const handleRemoveFilter = (item) => {
    let nonRemoved;
    if (item.field === "price") {
      nonRemoved = filters.filter(
        (filter) =>
          filter.name !== item.name &&
          filter.field !== "filterPriceFrom" &&
          filter.field !== "filterPriceTo"
      );
    } else if (item.field === "squareMeters") {
      nonRemoved = filters.filter(
        (filter) =>
          filter.name !== item.name &&
          filter.field !== "filterSquareMetersFrom" &&
          filter.field !== "filterSquareMetersTo"
      );
    } else {
      nonRemoved = filters.filter((filter) => filter.name !== item.name);
    }
    setFilters(nonRemoved);
  };

  return (
    <Grid className={classes.root}>
      <Typography>Estas Buscando :</Typography>
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
