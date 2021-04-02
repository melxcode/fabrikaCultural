import React, { useState, useEffect } from "react";
import {
  TextField,
  Chip,
  Divider,
  Box,
  Tabs,
  Tab,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
  },
  tabs: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  divider: {
    marginBottom: "20px",
    height: "1px",
    width: "100%",
  },
}));

const Filter = ({ filters, setFilters }) => {
  const classes = useStyles();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currentTab, setCurrentTab] = useState("todo");
  const [price, setPrice] = useState({
    from: "",
    to: "",
  });
  const [squareMeters, setSquareMeters] = useState({
    from: "",
    to: "",
  });
  const tabs = [
    { value: "todo", label: "Todo" },
    { value: "venta", label: "Venta" },
    { value: "alquiler", label: "Alquiler" },
  ];

  const handleTabsChange = (e, value) => {
    setCurrentTab(value);
    const nonRemoved = filters.filter(
      (item) => item.field !== "filterTypeOperation"
    );
    switch (value) {
      case "venta":
        setFilters([
          ...nonRemoved,
          { field: "filterTypeOperation", value: "venta", name: "Venta" },
        ]);
        break;
      case "alquiler":
        setFilters([
          ...nonRemoved,
          {
            field: "filterTypeOperation",
            value: "alquiler",
            name: "Alquiler",
          },
        ]);
        break;
      default:
        setFilters(nonRemoved);
    }
  };

  const setPriceFilter = (currency) => {
    const nonRemoved = filters.filter(
      (item) =>
        item.field !== "filterCurrency" &&
        item.field !== "filterPriceFrom" &&
        item.field !== "filterPriceTo" &&
        item.field !== "price"
    );
    setFilters([
      ...nonRemoved,
      {
        field: "filterCurrency",
        value: currency,
        name: currency.charAt(0).toUpperCase() + currency.slice(1),
      },
      {
        field: "filterPriceFrom",
        value: price.from,
        name: price.from,
      },
      {
        field: "filterPriceTo",
        value: price.to,
        name: price.to,
      },
      {
        field: "price",
        value: `Desde ${price.from} hasta ${price.from} en ${
          currency.charAt(0).toUpperCase() + currency.slice(1)
        }`,
        name: `Desde ${price.from} hasta ${price.from} en  ${
          currency.charAt(0).toUpperCase() + currency.slice(1)
        }`,
        isVisual: true,
      },
    ]);
    setSelectedCurrency(currency);
  };
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <Box className={classes.root}>
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={currentTab}
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Divider flexItem className={classes.divider} />
      <Autocomplete
        id="Zona"
        multiple
        options={[
          { field: "filterZone", value: "merlo", name: "Merlo" },
          { field: "filterZone", value: "carpinteria", name: "Carpinteria" },
        ]}
        fullWidth
        getOptionLabel={(option) => option.name}
        className={classes.input}
        closeIcon={false}
        onChange={(e, value, name, instance) => {
          if (!instance) {
            return;
          }
          setFilters([...filters, instance.option]);
        }}
        renderTags={(value) =>
          filters
            .filter((item) => item.field === "filterZone")
            .map((option, index) => {
              return (
                <Chip
                  variant="outlined"
                  key={option.name}
                  label={option.name}
                  onDelete={() => {
                    const nonRemoved = filters.filter(
                      (item) => item.name !== option.name
                    );
                    setFilters(nonRemoved);
                  }}
                />
              );
            })
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Zona" />
        )}
      />
      <Autocomplete
        multiple
        options={[
          { field: "filterTypeProperty", value: "casa", name: "Casa" },
          { field: "filterTypeProperty", value: "cabania", name: "Cabaña" },
        ]}
        fullWidth
        getOptionLabel={(option) => option.name}
        className={classes.input}
        closeIcon={false}
        onChange={(e, value, name, instance) => {
          if (!instance) {
            return;
          }
          setFilters([...filters, instance.option]);
        }}
        renderTags={(value) =>
          filters
            .filter((item) => item.field === "filterTypeProperty")
            .map((option, index) => {
              return (
                <Chip
                  variant="outlined"
                  key={option.name}
                  label={option.name}
                  onDelete={() => {
                    const nonRemoved = filters.filter(
                      (item) => item.name !== option.name
                    );
                    setFilters(nonRemoved);
                  }}
                />
              );
            })
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Tipo de Propiedad" />
        )}
      />

      <Autocomplete
        multiple
        options={[
          { field: "filterCurrency", value: "pesos", name: "Pesos" },
          { field: "filterCurrency", value: "dolares", name: "Dolares" },
        ]}
        fullWidth
        getOptionLabel={(option) => option.name}
        className={classes.input}
        closeIcon={false}
        onChange={(e, value, name, instance) => {
          if (!instance) {
            return;
          }
          setFilters([...filters, instance.option]);
        }}
        renderTags={(value) =>
          filters
            .filter((item) => item.field === "filterCurrency")
            .map((option, index) => {
              return (
                <Chip
                  variant="outlined"
                  key={option.name}
                  label={option.name}
                  onDelete={() => {
                    const nonRemoved = filters.filter(
                      (item) => item.name !== option.name
                    );
                    setFilters(nonRemoved);
                  }}
                />
              );
            })
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Tipo de Moneda" />
        )}
      />

      <Grid container xs={12}>
        <Grid container lg={5} md={5} sm={10} xs={10}>
          <TextField
            label="Desde"
            type="number"
            fullWidth
            placeholder="Desde"
            onChange={(e) => {
              setPrice({
                ...price,
                from: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid container lg={5} md={5} sm={10} xs={10}>
          <TextField
            label="Hasta"
            type="number"
            fullWidth
            placeholder="Hasta"
            onChange={(e) => {
              setPrice({
                ...price,
                to: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid container xs={2}>
          <Button
            onClick={() => {
              setPriceFilter("pesos");
            }}
            style={
              selectedCurrency === "pesos"
                ? { background: "blue", color: "white" }
                : null
            }
          >
            $
          </Button>
          <Button
            onClick={() => {
              setPriceFilter("dolares");
            }}
            style={
              selectedCurrency === "dolares"
                ? { background: "blue", color: "white" }
                : null
            }
          >
            USD
          </Button>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid container lg={5} md={5} sm={10} xs={10}>
          <TextField
            label="Desde"
            type="number"
            fullWidth
            placeholder="Desde"
            onChange={(e) => {
              setSquareMeters({
                ...squareMeters,
                from: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid container lg={5} md={5} sm={10} xs={10}>
          <TextField
            label="Hasta"
            type="number"
            fullWidth
            placeholder="Hasta"
            onChange={(e) => {
              setSquareMeters({
                ...squareMeters,
                to: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid container xs={2}>
          <Button
            onClick={() => {
              const nonRemoved = filters.filter(
                (item) =>
                  item.field !== "filterSquareMetersFrom" &&
                  item.field !== "filterSquareMetersTo"
              );
              setFilters([
                ...nonRemoved,
                {
                  field: "filterSquareMetersFrom",
                  value: squareMeters.from,
                  name: squareMeters.from,
                },
                {
                  field: "filterSquareMetersTo",
                  value: squareMeters.to,
                  name: squareMeters.to,
                },
                {
                  field: "price",
                  value: `Desde ${squareMeters.from} hasta ${squareMeters.from} Mt2`,
                  name: `Desde ${squareMeters.from} hasta ${squareMeters.from} Mt2`,
                  isVisual: true,
                },
              ]);
            }}
          >
            Aplicar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
