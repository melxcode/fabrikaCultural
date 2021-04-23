import React from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import MapComponent from "../components/MapComponent";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    background: "black",
    height: "215px",
  },
  map: {
    width: "40%",
    padding: "10px",
  },
  title: {
    marginTop: "30px",
    color: "white",
  },
  iconBox: {
    marginTop: "30px",
    display: "flex",
  },
  icon: {
    color: "white",
  },
  detail: {
    color: "white",
  },
  data: {
    marginTop: "30px",
    padding: "10px",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Box className={classes.map}>
        <MapComponent position={[-32.334255, -65.013435]} height="100%" />
      </Box>
      <Box className={classes.media}>
        <Typography className={classes.title}>CYM</Typography>
        <Box className={classes.iconBox}>
          <IconButton
            onClick={() => {
              window.open(
                "https://www.facebook.com/CYM-Propiedades-114351933306683"
              );
            }}
          >
            <FacebookIcon className={classes.icon} />
          </IconButton>
          <IconButton
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send?phone=5491122578334&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
              );
            }}
          >
            <WhatsAppIcon className={classes.icon} />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.data}>
        <Typography className={classes.detail}>
          DIRECCION : Avenida Libertador 45, Barranca Colorada, Merlo, San Luis
        </Typography>{" "}
        <Typography className={classes.detail}>
          TELEFONO : 2664 035075 / 2657 630902
        </Typography>{" "}
        <Typography className={classes.detail}>
          Whatsapp : 2664 035075 / 2657 630902{" "}
        </Typography>
        <Typography className={classes.detail}>
          EMAIL : cympropiedadessl@gmail.com
        </Typography>{" "}
        <Typography className={classes.detail}>
          Horarios : LUNES A VIERNES DE 09.00 A 12.30 Y 17.00 A 20.00 HS
        </Typography>{" "}
      </Box>
    </Grid>
  );
};

export default Footer;
