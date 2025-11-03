import React from "react";
import Container from "../Container/Container";

const Loading = () => {
  return (
    <div className="flex mx-auto justify-center items-center min-h-screen max-w-7xl text-[#e54768]">
      <Container>
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </Container>
    </div>
  );
};

export default Loading;
