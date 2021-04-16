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
  Chip,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../components/selectedProperty/Header";
import PropertuCard from "../components/propertySearcher/PropertyCard";
import { useParams } from "react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import es from "dayjs/locale/es";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { propertyData } from "../data/selectedProperty";
import { formatMoney, removeCamelCase } from "../utils/format";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapComponent from "../components/MapComponent";

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
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #bfbfbf",
  },
  mainImg: {
    width: "130%",
    height: "60vh",
  },
  imgContainer: {
    display: "flex",
    height: "60%",
  },
  operationTypeChip: {
    background: "#3B4CA9",
    color: "white",
  },
  name: {
    fontSize: "25px",
    fontWeight: "bold",
  },
  nameContainer: {
    display: "flex",
    padding: 15,
    paddingLeft: 25,
    justifyContent: "space-between",
  },
  chipContainer: {
    paddingRight: 50,
    display: "flex",
    justifyContent: "space-between",
    width: "20%",
  },
  published: {
    paddingLeft: "30px",
    marginTop: "-20px",
    marginBottom: "20px",
  },
  descriptionBox: {
    paddingLeft: "30px",
    marginBottom: "20px",
  },
  descriptionLabel: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  midImg: {
    height: "50%",
    width: "100%",
  },
  sameZoneProperty: { display: "flex" },
  divider: {
    height: "1px",
    width: "118%",
    marginLeft: "-9%",
  },
}));

const PropertySearcher = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [expanded, setExpanded] = useState({
    generales: false,
    detalles: false,
    servicios: false,
  });
  const [selectedProperty, setSelectedProperty] = useState();
  const [gralData, setGralData] = useState({});
  const properties = useSelector((state) => state.propertyReducer.properties);

  const handleChange = (seccion) => {
    setExpanded({
      ...expanded,
      [seccion]: expanded[seccion] ? false : true,
    });
  };

  useEffect(() => {
    const property = properties.filter((item) => item.id === id);
    setSelectedProperty(property[0]);
    setGralData(propertyData(property[0]));
  }, [properties, id]);

  return (
    <Grid className={classes.root}>
      {!selectedProperty ? (
        <CircularProgress />
      ) : (
        <Grid>
          {/*  <Header /> */}
          <Box className={classes.imgContainer}>
            <img
              src={selectedProperty.fotoPrincipal}
              alt="propiedad"
              className={classes.mainImg}
            />
            {selectedProperty.archivos.length &&
            selectedProperty.archivos.length > 2 ? (
              <Grid style={{ objectFit: "contain" }}>
                <img
                  src={selectedProperty.archivos[1]}
                  alt="propiedad"
                  className={classes.midImg}
                />
                <img
                  src={selectedProperty.archivos[2]}
                  alt="propiedad"
                  className={classes.midImg}
                />
              </Grid>
            ) : (
              <Grid style={{ objectFit: "contain" }}>
                <img
                  src={selectedProperty.archivos[1]}
                  alt="propiedad"
                  className={classes.mainImg}
                />
              </Grid>
            )}
          </Box>
          <Grid
            style={{
              paddingLeft: 100,
              paddingRight: 100,
            }}
          >
            <Grid className={classes.nameContainer}>
              <Typography className={classes.name}>
                {selectedProperty.nombre}
              </Typography>

              <Box className={classes.chipContainer}>
                <Chip
                  icon={<LocationOnIcon />}
                  label={removeCamelCase(selectedProperty.zona)}
                />

                <Chip
                  icon={<LocationCityIcon />}
                  label={removeCamelCase(selectedProperty.tipoDePropiedad)}
                />
                <Chip
                  className={classes.operationTypeChip}
                  label={removeCamelCase(
                    selectedProperty.tipoDeOperacion.toUpperCase()
                  )}
                />
              </Box>
            </Grid>
            <Divider className={classes.divider} />
            {selectedProperty.publicadoEn && (
              <Typography className={classes.published}>
                Publicado {dayjs(selectedProperty.publicadoEn).fromNow()}
              </Typography>
            )}
            <Grid className={classes.descriptionBox}>
              <Typography className={classes.descriptionLabel}>
                Descripcion
              </Typography>

              <Typography>{selectedProperty.descripcion}</Typography>
            </Grid>

            <div className={classes.root}>
              <Accordion
                expanded={expanded.generales}
                onChange={() => handleChange("generales")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>Generales</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                  >
                    {gralData.generales.map((property) => (
                      <ListItem button className={classes.listItem}>
                        <Typography>
                          <ListItemIcon>{property.icon}</ListItemIcon>
                          {property.label}
                        </Typography>
                        <Typography>{property.value}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded.detalles}
                onChange={() => handleChange("detalles")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Detalles</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                  >
                    {gralData.detalles.map((property, i) => (
                      <ListItem button className={classes.listItem}>
                        <Typography>
                          <ListItemIcon>{property.icon}</ListItemIcon>
                          {property.label}
                        </Typography>
                        <Typography>{property.value}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded.servicios}
                onChange={() => handleChange("servicios")}
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
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      width: "100%",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography>Requisitos</Typography>

                      {selectedProperty.requisitos.map((item) => (
                        <Typography>
                          <BusinessCenterIcon />
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography>Servicios</Typography>

                      {selectedProperty.servicios.map((item) => (
                        <Typography>
                          <CheckCircleOutlineIcon
                            style={{ color: "#237CC9" }}
                          />
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
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
            <Box>
              <MapComponent position={selectedProperty.posicion} />
            </Box>

            <Box style={{ marginTop: "50px" }}>
              <Typography className={classes.descriptionLabel}>
                {" "}
                Otras propiedades que podrian interesarte
              </Typography>
              <Box className={classes.sameZoneProperty}>
                {properties
                  .filter((item) => item.zona === selectedProperty.zona)
                  .map((sameZoneProperty) => {
                    return <PropertuCard property={sameZoneProperty} isSmall />;
                  })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default PropertySearcher;
