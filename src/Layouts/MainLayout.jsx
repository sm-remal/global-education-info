import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <header className="w-full mx-auto">
        <nav className="bg-[#162d13]">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-full mx-auto bg-base-300 min-h-[calc(100vh-48px)]">
        <Outlet></Outlet>
      </main>
      <footer className="w-full mx-auto bg-black">
        <Footer></Footer>
      </footer>
      <Toaster />
    </>
  );
};

export default MainLayout;
