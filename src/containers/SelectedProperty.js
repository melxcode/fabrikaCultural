import React, { useState, useCallback, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PropertuCard from "../components/propertySearcher/PropertyCard";
import { useParams } from "react-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
/*    eslint-disable-next-line */
import es from "dayjs/locale/es";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { propertyData } from "../data/selectedProperty";
import { removeCamelCase } from "../utils/format";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapComponent from "../components/MapComponent";
import { WHATSAPP_NUMBER, PLACEHOLDER_IMG } from "../data/datos";
import { getHouses } from "../firebase/";
import { useDispatch } from "react-redux";
import { setProperties } from "../store/actions/propertyActions";

dayjs.extend(relativeTime);
dayjs.locale("es");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "black",
  },
  list: {
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
    background: "white",
    "&:hover": {
      background: "#5CA9FB",
      color: "white",
    },
  },
  icon: {
    "&:hover": {
      background: "white",
      color: "white",
    },
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
    background: "#5CA9FB",
    color: "white",
  },
  name: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "white",
  },
  nameContainer: {
    display: "flex",
    padding: 15,
    paddingLeft: 25,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  chipContainer: {
    paddingRight: 50,
    display: "flex",
    justifyContent: "space-between",
    width: "20%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
  published: {
    paddingLeft: "30px",
    marginTop: "-20px",
    marginBottom: "20px",
    color: "white",
  },
  descriptionBox: {
    paddingLeft: "30px",
    marginBottom: "20px",
  },
  descriptionLabel: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  midImg: {
    height: "50%",
  },
  sameZoneProperty: { display: "flex" },
  divider: {
    height: "1px",
    width: "118%",
    marginLeft: "-9%",
  },
  white: {
    color: "white",
  },
  whatsapp: {
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "100px",
    backgroundColor: "#25d366",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
    zIndex: "1000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const dispatch = useDispatch();

  let action;
  window.onresize = function () {
    clearTimeout(action);
    action = setTimeout(setSize(window.screen.width), 100);
  };
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleChange = (seccion) => {
    setExpanded({
      ...expanded,
      [seccion]: expanded[seccion] ? false : true,
    });
  };

  useEffect(() => {
    const fetchHouses = async () => {
      const propertyList = await getHouses();

      const property = propertyList.filter((item) => item.id === id);
      const selectedProperty = property[0];

      setSelectedProperty(selectedProperty);
      setGralData(propertyData(selectedProperty));
      dispatch(setProperties(propertyList));
    };

    fetchHouses();
  }, [properties, id, dispatch]);

  return (
    <Grid className={classes.root}>
      {!selectedProperty ? (
        <CircularProgress />
      ) : (
        <Grid>
          <Box className={classes.imgContainer}>
            {selectedProperty.archivos.length ? (
              <img
                style={{ width: size / 3 - 5 }}
                src={selectedProperty.archivos[0]}
                alt="propiedad"
                className={classes.mainImg}
              />
            ) : (
              <img
                style={{ width: size / 3 - 5 }}
                src={PLACEHOLDER_IMG}
                alt="propiedad"
                className={classes.mainImg}
              />
            )}
            {selectedProperty.archivos.length > 1 ? (
              <img
                style={{ width: size / 3 - 5 }}
                src={selectedProperty.archivos[1]}
                alt="propiedad"
                className={classes.mainImg}
              />
            ) : (
              <img
                style={{ width: size / 3 - 5 }}
                src={PLACEHOLDER_IMG}
                alt="propiedad"
                className={classes.mainImg}
              />
            )}
            {selectedProperty.archivos.length > 2 ? (
              <img
                style={{ width: size / 3 - 5 }}
                src={selectedProperty.archivos[2]}
                alt="propiedad"
                className={classes.mainImg}
              />
            ) : (
              <img
                style={{ width: size / 3 - 5 }}
                src={PLACEHOLDER_IMG}
                alt="propiedad"
                className={classes.mainImg}
              />
            )}
          </Box>
          <Grid
            style={
              size > 600
                ? {
                    paddingLeft: 100,
                    paddingRight: 100,
                  }
                : null
            }
          >
            <Grid
              className={classes.nameContainer}
              style={size < 600 ? { marginTop: "60px" } : null}
            >
              <Typography className={classes.name}>
                {selectedProperty.nombre}
              </Typography>

              <Box className={classes.chipContainer}>
                <Chip
                  icon={<LocationOnIcon style={{ color: "#5CA9FB" }} />}
                  label={removeCamelCase(selectedProperty.zona)}
                />

                <Chip
                  style={{ marginRight: "15px", marginLeft: "15px" }}
                  icon={
                    <LocationCityIcon
                      style={{
                        color: "#5CA9FB",
                      }}
                    />
                  }
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
            {selectedProperty.publicadoEn && (
              <Typography className={classes.published}>
                Publicado {dayjs(selectedProperty.publicadoEn).fromNow()}
              </Typography>
            )}
            <Grid className={classes.descriptionBox}>
              <Typography className={classes.descriptionLabel}>
                Descripcion
              </Typography>

              <Typography className={classes.white}>
                {selectedProperty.descripcion}
              </Typography>
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
                    className={classes.list}
                  >
                    {gralData.generales?.map((property) => (
                      <ListItem button className={classes.listItem}>
                        <Typography>
                          <ListItemIcon className={classes.icon}>
                            {property.icon}
                          </ListItemIcon>
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
                    className={classes.list}
                  >
                    {gralData.detalles?.map((property, i) => (
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
                width={0.7 * size}
                className={classes.carrousel}
                dynamicHeight={true}
                infiniteLoop
                renderThumbs={() => {
                  return;
                }}
                autoPlay
                showArrows={false}
                stopOnHover
                useKeyboardArrows
                emulateTouch
                children
              >
                {selectedProperty.archivos.map((imageSource, index) => {
                  const body = (
                    <div onDoubleClick={() => openImageViewer(index)}>
                      <img src={imageSource} alt="propiedad" />
                    </div>
                  );

                  return body;
                })}
              </Carousel>
            </Box>

            {selectedProperty.video && (
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src={selectedProperty.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
            )}

            <Box style={{ marginTop: "50px" }}>
              <MapComponent position={selectedProperty.posicion} height="40%" />
            </Box>

            <Box style={{ marginTop: "50px" }}>
              <Typography className={classes.descriptionLabel}>
                {" "}
                {window.window.innerWidth < 500
                  ? ""
                  : "Otras propiedades que podrian interesarte"}
              </Typography>
              <Box className={classes.sameZoneProperty}>
                {properties
                  .filter(
                    (item) =>
                      item.zona === selectedProperty.zona &&
                      item.id !== selectedProperty.id
                  )
                  .map((sameZoneProperty, index) => {
                    const quantity = Math.floor(window.innerWidth / 250);
                    if (index > quantity - 2) {
                      /*    eslint-disable-next-line */
                      return;
                    }
                    return <PropertuCard property={sameZoneProperty} isSmall />;
                  })}
              </Box>
            </Box>
          </Grid>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className={classes.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon fontSize="large" />
          </a>
        </Grid>
      )}
      {isViewerOpen && (
        <ImageViewer
          src={selectedProperty.archivos}
          backgroundStyle={{ zIndex: 9999 }}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </Grid>
  );
};

export default PropertySearcher;
