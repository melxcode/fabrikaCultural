import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Navigation } from "../components/navigation";
import { Header } from "../components/home/header";
import { Features } from "../components/home/features";
import { About } from "../components/home/about";
import { Services } from "../components/home/services";
import { Gallery } from "../components/home/gallery";
import { Testimonials } from "../components/home/testimonials";
import { Team } from "../components/home/Team";
import { Contact } from "../components/home/contact";
import JsonData from "../data/Textos.json";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <Grid>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      {/*  <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </Grid>
  );
};

export default Home;
