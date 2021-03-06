import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MapComponent from "../MapComponent";
import { WHATSAPP_NUMBER } from "../../data/datos";
import { getNumber } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    background: "#161C24",
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
  const [number, setNumber] = useState("");

  useEffect(() => {
    const fetchNumber = async () => {
      setNumber(WHATSAPP_NUMBER);
    };

    fetchNumber();
  }, []);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Nuestra Ubicacion</h2>
              </div>
              <Box className={classes.map}>
                <MapComponent
                  position={[-32.355196, -64.995621]}
                  height="30%"
                />
              </Box>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contacto</h3>
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
                  <i className="fa fa-phone"></i> WhatsApp
                </span>{" "}
                0266 448-2403
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li
                    onClick={() => {
                      window.open("https://www.facebook.com/lafabrica2271");
                    }}
                  >
                    {/*    eslint-disable-next-line */}
                    <a>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li
                    onClick={() => {
                      window.open(`https://wa.me/${number}`);
                    }}
                  >
                    {/*    eslint-disable-next-line */}
                    <a>
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      window.open(
                        `https://www.instagram.com/lafabricacultural/`
                      );
                    }}
                  >
                    {/*    eslint-disable-next-line */}
                    <a>
                      <i className="fa fa-instagram"></i>
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
          <p>&copy; 2021 La Fabrica Cultural.</p>
        </div>
      </div>
    </div>
  );
};
