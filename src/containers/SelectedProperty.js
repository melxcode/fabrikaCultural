import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  CircularProgress,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../components/selectedProperty/Header";
import { useParams } from "react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import es from "dayjs/locale/es";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

dayjs.extend(relativeTime);
dayjs.locale("es");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  carrousel: {
    display: "flex !important",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const PropertySearcher = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [selectedProperty, setSelectedProperty] = useState();
  const properties = useSelector((state) => state.propertyReducer.properties);

  useEffect(() => {
    const property = properties.filter((item) => item.id === id);
    setSelectedProperty(property[0]);
  }, [properties, id]);

  const translateDate = (string) => {
    let date = string;

    if (date.includes("days")) {
      date.replace("days", "dias");
    }

    if (date.includes("day")) {
      date.replace("day", "dia");
    }

    if (date.includes("ago")) {
      date.replace("day", "dia");
    }
  };

  return (
    <Grid className={classes.root}>
      {!selectedProperty ? (
        <CircularProgress />
      ) : (
        <Grid>
          <Header />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Carousel
              width="70%"
              className={classes.carrousel}
              dynamicHeight={false}
              infiniteLoop
              autoPlay
              stopOnHover
              useKeyboardArrows
              emulateTouch
              children
            >
              {selectedProperty.archivos.map((imageSource) => {
                const body = (
                  <div>
                    <img src={imageSource} alt="propiedad" />
                  </div>
                );

                return body;
              })}
            </Carousel>
          </Box>
          <Grid>
            <Typography>
              {selectedProperty.zona} - {selectedProperty.tipoDePropiedad} -{" "}
              {selectedProperty.tipoDeOperacion}
            </Typography>
            {selectedProperty.publicadoEn && (
              <Typography>
                Publicado {dayjs(selectedProperty.publicadoEn).fromNow()}
              </Typography>
            )}
            <Typography>{selectedProperty.descripcion}</Typography>
          </Grid>

          <div className={classes.root}>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Generales</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography>
                    Propiedad Tipo ---- {selectedProperty.tipoDePropiedad}
                  </Typography>
                  <Typography>
                    Varlor ---- {selectedProperty.moneda}
                    {selectedProperty.precio}
                  </Typography>
                  <Typography>
                    Disponible para alquiler Turistico ----{" "}
                    {selectedProperty.alquilerTuristico ? "Si" : "No"}
                  </Typography>
                  <Typography>
                    Direcion ---- {selectedProperty.direccion}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Detalles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography>Metros ---- {selectedProperty.metros}</Typography>
                  <Typography>
                    Metros Cubiertos ---- {selectedProperty.metrosCubiertos}
                    {selectedProperty.precio}
                  </Typography>
                  <Typography>
                    Ambientes ---- {selectedProperty.ambientes}
                  </Typography>
                  <Typography>
                    Sanitarios ---- {selectedProperty.Sanitarios}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Servicios y requisitos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  {selectedProperty.requisitos.map((item) => (
                    <Typography>{item}</Typography>
                  ))}
                </Box>
                <Box>
                  {selectedProperty.servicios.map((item) => (
                    <Typography>{item}</Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default PropertySearcher;
