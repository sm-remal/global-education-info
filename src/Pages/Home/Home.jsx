import React from "react";

import Container from "../../Container/Container";
import Hero from "../../Components/Hero/Hero";
import PopularPrograme from "../../Components/PopularPrograme/PopularPrograme";


const Home = () => {
  return (
    <div className="">
       <Hero></Hero>
      <Container>
       <PopularPrograme></PopularPrograme>
       
      </Container>
    </div>
  );
};

export default Home;
