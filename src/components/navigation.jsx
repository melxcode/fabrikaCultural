import React from "react";
import { useHistory } from "react-router-dom";
import { BIG_LOGO } from "../data/datos";

export const Navigation = (props) => {
  const history = useHistory();

  return (
    <nav id="menu" className="/* navbar navbar-default navbar-fixed-top */">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{ position: "relative", left: "20px" }}
            onClick={() => {
              if (window.location.pathname === "/") {
                return;
              }
              history.push("/");
            }}
          >
            <img
              src="https://i.ibb.co/ZxrG2Qg/logocym.png"
              alt="logo"
              width="30"
              height="30"
              style={{
                zIndex: 99999,
                marginBottom: "50px",
                position: "absolute",
                left: " -23px",
                top: "11px",
              }}
            />{" "}
            C&M Inmobiliaria
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              {/*    eslint-disable-next-line */}
              <a
                onClick={() => {
                  if (window.location.pathname === "/") {
                    return;
                  }
                  history.push("/");
                }}
                href={window.location.pathname === "/" ? "#features" : null}
                className="page-scroll"
              >
                Paso a paso
              </a>
            </li>
            <li>
              {/*    eslint-disable-next-line */}
              <a
                onClick={() => {
                  if (window.location.pathname === "/") {
                    return;
                  }
                  history.push("/");
                }}
                href={window.location.pathname === "/" ? "#about" : null}
                className="page-scroll"
              >
                Nosotros
              </a>
            </li>
            <li>
              {/*    eslint-disable-next-line */}
              <a
                onClick={() => {
                  if (window.location.pathname === "/") {
                    return;
                  }
                  history.push("/");
                }}
                href={window.location.pathname === "/" ? "#services" : null}
                className="page-scroll"
              >
                Servicios
              </a>
            </li>

            <li>
              {/*    eslint-disable-next-line */}
              <a
                className="page-scroll  "
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push("/propiedades");
                }}
              >
                Propiedades
              </a>
            </li>
            <li>
              {/*    eslint-disable-next-line */}
              <a
                onClick={() => {
                  if (window.location.pathname === "/") {
                    return;
                  }
                  history.push("/");
                }}
                href={window.location.pathname === "/" ? "#contact" : null}
                className="page-scroll"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
