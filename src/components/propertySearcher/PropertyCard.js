import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  formatMoney,
  firstCharUpperCase,
  removeCamelCase,
} from "../../utils/format";
import InfoIcon from "./IconInfo";
import ShareLinkModal from "./ShareLinkModal";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 310,
    borderRadius: "5%",
    margin: "10px",
  },
  media: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    paddingTop: "56.25%",

    "&:hover": {
      opacity: "0.5",
    },
  },
  mediaText: {
    marginTop: "-150px",
    zIndex: -1,
    fontSize: "20px",
    fontWeight: "bolder",
    color: "white",
    "&:hover": {
      zIndex: 2,
      opacity: "1",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  topData: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #e5e5e5",
    paddingBottom: "5px",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  zone: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

const PropertyCard = ({ property, isSmall }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <div
        className={classes.media}
        onClick={() => {
          window.open(`/propiedades/${property.id}`);
        }}
        style={{
          backgroundImage: `url(${property.fotoPrincipal})`,
          backgroundSize: "100% 100%",
          height: isSmall ? "0px" : "250px",
        }}
        image={property.fotoPrincipal}
        alt="Foto principal"
      >
        <Typography className={classes.mediaText}>Ver mas</Typography>
      </div>
      <CardContent>
        <Box className={classes.topData}>
          <Typography className={classes.price}>
            {property.moneda === "dolares" ? "USD" : "$"}{" "}
            {formatMoney(property.precio)}
          </Typography>

          <Typography style={{ fontSize: "bold" }}>
            {property.tipoDeOperacion.toUpperCase()}
          </Typography>
        </Box>
        <Box className={classes.zone}>
          <InfoIcon
            isTitle
            label={removeCamelCase(property.zona)}
            icon={
              <LocationOnIcon fontSize="small" style={{ marginLeft: "-5px" }} />
            }
          />

          <Typography>{removeCamelCase(property.tipoDePropiedad)}</Typography>
        </Box>
        <Box className={classes.icons}>
          <InfoIcon
            label={`${formatMoney(property.metros)} m²`}
            icon={
              <img
                alt="Metros"
                src="https://img10.naventcdn.com/listado/RPLISv6.13.4-RC1/metros.6fb7e5.svg"
              />
            }
          />
          <InfoIcon
            label={`${property.sanitarios} ${
              property.sanitarios > 1 ? "Baños" : "Baño"
            }`}
            icon={
              <img
                alt="Sanitarios"
                src="https://img10.naventcdn.com/listado/RPLISv6.13.4-RC1/bano.00f32a.svg"
              />
            }
          />
          <InfoIcon
            label={`${property.ambientes} Amb.`}
            icon={
              <img
                alt="Ambientes"
                src="https://img10.naventcdn.com/listado/RPLISv6.13.4-RC1/ambientes.80f77e.svg"
              />
            }
          />
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setOpenModal(true);
          }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
        <Button
          aria-label="info"
          onClick={() => {
            window.open(`/propiedades/${property.id}`);
          }}
        >
          <AddIcon />
          INFO
        </Button>
      </CardActions>
      <ShareLinkModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        propertyId={property.id}
      />
    </Card>
  );
};

export default PropertyCard;
