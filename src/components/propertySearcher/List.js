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
    const handleFilters = (realFilters) => {
      let filteredProperties = properties;
      const activeFields = realFilters.map((item) => item.field);

      if (activeFields.includes("filterZone")) {
        const zone = realFilters.filter((item) => item.field === "filterZone");
        const zones = zone.map((item) => item.value);
        filteredProperties = filteredProperties.filter((item) =>
          zones.includes(item.zona)
        );
      }

      if (activeFields.includes("filterTypeProperty")) {
        const propertyType = realFilters.filter(
          (item) => item.field === "filterTypeProperty"
        );
        const propertyTypes = propertyType.map((item) => item.value);

        filteredProperties = filteredProperties.filter((item) =>
          propertyTypes.includes(item.tipoDePropiedad)
        );
      }

      if (activeFields.includes("filterCurrency")) {
        const currency = realFilters.filter(
          (item) => item.field === "filterCurrency"
        );
        filteredProperties = filteredProperties.filter(
          (item) => item.moneda === currency[0].value
        );
      }

      if (activeFields.includes("filterTypeOperation")) {
        const operation = realFilters.filter(
          (item) => item.field === "filterTypeOperation"
        );
        filteredProperties = filteredProperties.filter(
          (item) => item.tipoDeOperacion === operation[0].value
        );
      }

      //POR RANGO
      if (
        activeFields.includes("filterPriceFrom") &&
        activeFields.includes("filterPriceTo")
      ) {
        const from = realFilters.filter(
          (item) => item.field === "filterPriceFrom"
        );
        const to = realFilters.filter((item) => item.field === "filterPriceTo");

        const fromPrice = Number(from[0].value);
        const toPrice = Number(to[0].value);

        filteredProperties = filteredProperties.filter((item) => {
          if (item.precio > fromPrice && item.precio < toPrice) {
            return item;
          }
        });
      }

      if (
        activeFields.includes("filterSquareMetersFrom") &&
        activeFields.includes("filterSquareMetersTo")
      ) {
        const from = realFilters.filter(
          (item) => item.field === "filterSquareMetersFrom"
        );
        const to = realFilters.filter(
          (item) => item.field === "filterSquareMetersTo"
        );

        const fromSquare = Number(from[0].value);
        const toSquare = Number(to[0].value);

        filteredProperties = filteredProperties.filter((item) => {
          if (item.metros > fromSquare && item.metros < toSquare) {
            return item;
          }
        });
      }

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
