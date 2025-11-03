import React from "react";

import Container from "../../Container/Container";
import Hero from "../../Components/Hero/Hero";

import TopUniversities from "../../Components/TopUniversities/TopUniversities";

import PopularProgram from "../../Components/PopularProgram/PopularProgram";



const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <TopUniversities></TopUniversities>
      
       <Hero></Hero>
      <Container>
       <PopularProgram></PopularProgram>
      </Container>
    </div>
  );
};

export default Home;
