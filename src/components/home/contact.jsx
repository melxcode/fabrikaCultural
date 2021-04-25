import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MapComponent from "../MapComponent";
import { WHATSAPP_NUMBER } from "../../data/datos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    background: "black",
    height: "215px",
  },
  map: {
    width: "80%",
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

export const Contact = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Nuestra Ubicacion</h2>
                <p>
                  Encontranos de Lunes a Viernes de 9:00 a 12:30 y de 17:00 a
                  20:00
                </p>
              </div>
              <Box className={classes.map}>
                <MapComponent
                  position={[-32.334255, -65.013435]}
                  height="30%"
                />
              </Box>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Direccion
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> WhatsApp
                </span>{" "}
                2664 035075 / 2657 630902
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/CYM-Propiedades-114351933306683"
                      );
                    }}
                  >
                    <a>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li
                    onClick={() => {
                      window.open(`https://wa.me/${WHATSAPP_NUMBER}`);
                    }}
                  >
                    <a>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2021 C&M Propiedades.</p>
        </div>
      </div>
    </div>
  );
};
