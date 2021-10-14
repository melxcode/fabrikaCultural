import React, { useState, useEffect, useCallback } from "react";
import { Grid, Box } from "@material-ui/core";
import { Navigation } from "../components/navigation";
import { Header } from "../components/home/header";
import { Features } from "../components/home/features";
import { About } from "../components/home/about";
import { Services } from "../components/home/services";
import { Contact } from "../components/home/contact";
import JsonData from "../data/Textos.json";
import { getHouses } from "../firebase/";
import { useDispatch } from "react-redux";
import { setProperties } from "../store/actions/propertyActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const dispatch = useDispatch();
  const [size, setSize] = useState(window.innerWidth);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  let action;
  window.onresize = function () {
    clearTimeout(action);
    action = setTimeout(setSize(window.screen.width), 100);
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  useEffect(() => {
    setLandingPageData(JsonData);

    const fetchHouses = async () => {
      const propertyList = await getHouses();
      dispatch(setProperties(propertyList));
    };

    fetchHouses();
  }, [dispatch]);

  return (
    <Grid>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Carousel
          width={0.7 * size}
          style={{
            display: "flex !important",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
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
          {[
            "/img/piedras.jpeg",
            "/img/deArriba.jpeg",
            "/img/comida1.jpeg",
            "/img/comida2.jpeg",
            "/img/comida3.jpeg",
            "/img/cpomida4.jpeg",
            "/img/fabrica.jpeg",
            "/img/galpon.jpeg",
            "/img/metegol.jpeg",
          ].map((imageSource, index) => {
            const body = (
              <div onDoubleClick={() => openImageViewer(index)}>
                <img src={imageSource} alt="propiedad" />
              </div>
            );

            return body;
          })}
        </Carousel>
      </Box>
      <Contact data={landingPageData.Contact} />
    </Grid>
  );
};

export default Home;
