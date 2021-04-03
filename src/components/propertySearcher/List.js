import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const List = ({ filters, setFilters }) => {
  const classes = useStyles();
  const properties = useSelector((state) => state.propertyReducer.properties);
  const [listProperties, setListProperties] = useState([]);

  useEffect(() => {
    const addFilters = (
      activeFields,
      filterField,
      filteredProperties,
      filterName
    ) => {
      if (activeFields.includes(filterField)) {
        const filterObjects = realFilters.filter(
          (item) => item.field === filterField
        );
        const filterValues = filterObjects.map((item) => item.value);
        filteredProperties = filteredProperties.filter((item) =>
          filterValues.includes(item[filterName])
        );
      }
      return filteredProperties;
    };

    const addRangeFilters = (
      activeFields,
      fieldFrom,
      fieldTo,
      filteredProperties,
      filterName
    ) => {
      if (activeFields.includes(fieldFrom) && activeFields.includes(fieldTo)) {
        const from = realFilters.filter((item) => item.field === fieldFrom);
        const to = realFilters.filter((item) => item.field === fieldTo);

        const fromFilter = Number(from[0].value);
        const toilter = Number(to[0].value);

        filteredProperties = filteredProperties.filter((item) => {
          if (item[filterName] > fromFilter && item[filterName] < toilter) {
            return item;
          }
        });
      }
      return filteredProperties;
    };

    const handleFilters = (realFilters) => {
      let filteredProperties = properties;
      const activeFields = realFilters.map((item) => item.field);

      filteredProperties = addFilters(
        activeFields,
        "filterZone",
        filteredProperties,
        "zona"
      );

      filteredProperties = addFilters(
        activeFields,
        "filterTypeProperty",
        filteredProperties,
        "tipoDePropiedad"
      );

      filteredProperties = addFilters(
        activeFields,
        "filterCurrency",
        filteredProperties,
        "moneda"
      );

      filteredProperties = addFilters(
        activeFields,
        "filterTypeOperation",
        filteredProperties,
        "tipoDeOperacion"
      );

      //POR RANGO
      filteredProperties = addRangeFilters(
        activeFields,
        "filterPriceFrom",
        "filterPriceTo",
        filteredProperties,
        "precio"
      );

      filteredProperties = addRangeFilters(
        activeFields,
        "filterSquareMetersFrom",
        "filterSquareMetersTo",
        filteredProperties,
        "metros"
      );

      if (activeFields.includes("isTuristic")) {
        filteredProperties = filteredProperties.filter(
          (item) => item.alquilerTuristico
        );
      }

      return filteredProperties;
    };

    const realFilters = filters.filter((item) => !item.isVisual);

    if (!realFilters.length) {
      setListProperties(properties);
      return;
    }
    const filteredProperties = handleFilters(realFilters);
    setListProperties(filteredProperties);
  }, [filters, properties]);

  return (
    <Grid className={classes.root}>
      {listProperties.length ? (
        listProperties.map((property) => {
          return <PropertyCard key={property.id} property={property} />;
        })
      ) : (
        <h1>Cargando</h1>
      )}
    </Grid>
  );
};

export default List;
