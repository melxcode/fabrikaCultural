import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Card,
  Icon,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  formatMoney,
  firstCharUpperCase,
  removeCamelCase,
} from "../../utils/format";
import InfoIcon from "./IconInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 290,
    borderRadius: "10%",
    margin: "10px",
  },
  media: {
    height: "100px",
    paddingTop: "56.25%", // 16:9
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
}));

const PropertyCard = ({ property }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={property.fotoPrincipal}
        title="Foto principal"
      />
      <CardContent>
        <Box className={classes.topData}>
          <Typography>
            {property.moneda === "dolares" ? "USD" : "$"}{" "}
            {formatMoney(property.precio)}
          </Typography>
          <Typography>{property.tipoDeOperacion.toUpperCase()}</Typography>
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
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
