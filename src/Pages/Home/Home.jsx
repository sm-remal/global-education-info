import React from "react";

import Container from "../../Container/Container";
import Hero from "../../Components/Hero/Hero";

import TopUniversities from "../../Components/TopUniversities/TopUniversities";

import PopularProgram from "../../Components/PopularProgram/PopularProgram";
import HowItWork from "../../Components/HomeComponants/HowItWork";



const Home = () => {
  return (
    <div className="">
      <Container>
      <Hero></Hero>
      <TopUniversities></TopUniversities>
       <PopularProgram></PopularProgram>
      </Container>
      <HowItWork></HowItWork>
    </div>
  );
};

export default Home;
