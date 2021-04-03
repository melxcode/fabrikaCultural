import React from "react";
import PropertyCard from "./PropertyCard";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const List = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const properties = useSelector((state) => state.propertyReducer.properties);

  return (
    <Grid>
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </Grid>
  );
};

export default List;
