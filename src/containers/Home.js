import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
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

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const dispatch = useDispatch();

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
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
    </Grid>
  );
};

export default Home;
