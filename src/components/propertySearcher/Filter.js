import React, { useState } from "react";
import {
  TextField,
  Chip,
  Divider,
  Box,
  Tabs,
  Tab,
  Grid,
  Switch,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import CloseIcon from "@material-ui/icons/Close";
import { filterAutocompleteOptions } from "../../utils/autocompleteUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10",
    background: "#FAFAFA",
    height: "40%",
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
  input: {
    marginTop: "20px",
  },
  priceFilter: {
    padding: "10px",
  },
}));

const Filter = ({ filters, setFilters }) => {
  const classes = useStyles();
  const filter = createFilterOptions();

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
    let nonRemoved = filters.filter(
      (item) => item.field !== "filterTypeOperation"
    );
    const hastTuristicFilter = nonRemoved.filter(
      (item) => item.field === "isTuristic"
    ).length;

    switch (value) {
      case "venta":
        if (hastTuristicFilter) {
          nonRemoved = nonRemoved.filter((item) => item.field !== "isTuristic");
        }
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
        value: `Desde ${price.from} hasta ${price.to} en ${
          currency.charAt(0).toUpperCase() + currency.slice(1)
        }`,
        name: `Desde ${price.from} hasta ${price.to} en  ${
          currency.charAt(0).toUpperCase() + currency.slice(1)
        }`,
        isVisual: true,
      },
    ]);
    setSelectedCurrency(currency);
  };

  const handleChangeSwitch = (e) => {
    const activeFilters = filters.map((item) => item.field);
    if (!activeFilters.includes("isTuristic")) {
      setFilters([
        ...filters,
        {
          field: "isTuristic",
          value: "alquierTuristico",
          name: "Alquier Turistico",
        },
      ]);
    } else {
      const nonRemoved = filters.filter((item) => item.field !== "isTuristic");
      setFilters(nonRemoved);
    }
  };

  return (
    <Box className={classes.root}>
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={currentTab}
        indicatorColor="primary"
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
          { field: "filterZone", value: "cerroDeOro", name: "Cerro De Oro" },
          { field: "filterZone", value: "carpinteria", name: "Carpinteria" },
          { field: "filterZone", value: "villaElena", name: "Villa Elena" },
          { field: "filterZone", value: "cortaderas", name: "Cortaderas" },
          { field: "filterZone", value: "losMolles", name: "Los Molles" },
          { field: "filterZone", value: "cortaderas", name: "Cortaderas" },
        ]}
        fullWidth
        getOptionLabel={(option) => option.name}
        className={classes.input}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            const nonRemoved = filters.filter(
              (item) => item.field !== "filterZone"
            );
            setFilters(nonRemoved);
          }
        }}
        filterOptions={(options, params) => {
          return filterAutocompleteOptions(options, params, filter, filters);
        }}
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
          { field: "filterTypeProperty", value: "cabaña", name: "Cabaña" },
        ]}
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            const nonRemoved = filters.filter(
              (item) => item.field !== "filterTypeProperty"
            );
            setFilters(nonRemoved);
          }
        }}
        filterOptions={(options, params) => {
          return filterAutocompleteOptions(options, params, filter, filters);
        }}
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
        options={[
          { field: "filterCurrency", value: "pesos", name: "Pesos" },
          { field: "filterCurrency", value: "dolares", name: "Dolares" },
        ]}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            const nonRemoved = filters.filter(
              (item) => item.field !== "filterCurrency"
            );
            setFilters(nonRemoved);
          }
        }}
        filterOptions={(options, params) => {
          return filterAutocompleteOptions(options, params, filter, filters);
        }}
        fullWidth
        getOptionLabel={(option) => option.name}
        className={classes.input}
        closeIcon={
          <CloseIcon
            fontSize="small"
            onClick={() => {
              const nonRemoved = filters.filter(
                (item) => item.field !== "filterCurrency"
              );
              setFilters(nonRemoved);
            }}
          />
        }
        onChange={(e, value, name, instance) => {
          if (!instance) {
            return;
          }
          const nonRemoved = filters.filter(
            (item) => item.field !== "filterCurrency"
          );
          setFilters([...nonRemoved, instance.option]);
          setSelectedCurrency(instance.option.value);
        }}
        value={{
          name:
            selectedCurrency.charAt(0).toUpperCase() +
            selectedCurrency.slice(1),
        }}
        key={selectedCurrency}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Tipo de Moneda" />
        )}
      />

      <Grid container xs={12}>
        <Grid container lg={5} md={5} sm={10} xs={10}>
          <TextField
            label="Valor Desde"
            type="number"
            className={classes.priceFilter}
            fullWidth
            placeholder="Valor Desde"
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
            label="Valor Hasta"
            className={classes.priceFilter}
            type="number"
            fullWidth
            placeholder="Valor Hasta"
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
            disabled={!price.to || !price.from}
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
            disabled={!price.to || !price.from}
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
            label="Metros Desde"
            type="number"
            fullWidth
            className={classes.priceFilter}
            placeholder="Metros Desde"
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
            label="Metros Hasta"
            type="number"
            fullWidth
            className={classes.priceFilter}
            placeholder="Metros Hasta"
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
            disabled={!squareMeters.to || !squareMeters.from}
            onClick={() => {
              const nonRemoved = filters.filter(
                (item) =>
                  item.field !== "filterSquareMetersFrom" &&
                  item.field !== "filterSquareMetersTo" &&
                  item.field !== "squareMeters"
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
                  field: "squareMeters",
                  value: `Desde ${squareMeters.from} hasta ${squareMeters.to} Mt2`,
                  name: `Desde ${squareMeters.from} hasta ${squareMeters.to} Mt2`,
                  isVisual: true,
                },
              ]);
            }}
          >
            Aplicar
          </Button>
        </Grid>
      </Grid>
      {currentTab !== "venta" && (
        <Typography component="div">
          <Typography> Alquiler Turistico</Typography>

          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>NO</Grid>
            <Grid item>
              <Switch
                color="primary"
                checked={
                  filters.filter((item) => item.field === "isTuristic").length
                }
                onChange={handleChangeSwitch}
                name="checkedC"
              />
            </Grid>
            <Grid item>SI</Grid>
          </Grid>
        </Typography>
      )}
    </Box>
  );
};

export default Filter;
