import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router";
import { FaBars, FaRegUser, FaXmark } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { BsCartPlus } from "react-icons/bs";
import logo from "../../assets/Images/Website-log.png"
import Container from "../../Container/Container";

const Navbar = () => {
  const [barToggol, setBarToggol] = useState(true);
  const [serchToggol, setSerchToggol] = useState(false);
  const { index } = useParams();
  console.log(index);

  return (
    <Container>
      <nav className="navbar max-w-7xl mx-auto relative">
        {/* navbar start */}
        <div className="navbar-start space-x-4 lg:space-x-0">
          <div
            onClick={() => setBarToggol(!barToggol)}
            className="bg-gray-300 rounded-md px-5 py-4 text-2xl cursor-pointer block lg:hidden relative overflow-hidden"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              }`}
            >
              <FaBars />
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <FaXmark />
            </div>
          </div>
          {/* Small device menu list*/}
          <ul
            className={`bg-[#00000020] p-3 rounded-md shadow-lg absolute transition-all duration-300 ease-in-out -left-64 top-18 lg:hidden ${
              barToggol ? "" : "left-1 block"
            }`}
          >
            <li className="w-52 bg-slate-100 hover:bg-teal-600 font-semibold rounded mb-2 shadow-md px-2 p-1 text-teal-600 cursor-pointer hover:text-white">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="w-52 bg-slate-100 hover:bg-teal-600 font-semibold rounded mb-2 shadow-md px-2 p-1 text-teal-600 cursor-pointer hover:text-white">
              <Link to={"/listedbooks"}>Listed Books</Link>
            </li>
            <li className="w-52 bg-slate-100 hover:bg-teal-600 font-semibold rounded mb-2 shadow-md px-2 p-1 text-teal-600 cursor-pointer hover:text-white">
              <Link to={"/pagestoread"}>Pages to Read</Link>
            </li>
          </ul>
          <div className="">
            <img className="md:w-17 w-14" src={logo} alt="" />
          </div>
        </div>
        {/* navbar menu list*/}
        <div className="navbar-center hidden lg:flex">
          <ul
            id="navLink"
            className="menu menu-horizontal px-1 text-base font-normal text-white"
          >
            <li>
              <NavLink to={`/user/product/${index}`}>Men</NavLink>
            </li>
            <li>
              <NavLink to={"/listedbooks"}>Women</NavLink>
            </li>
            <li>
              <NavLink to={"/pagestoread"}>Top Wear</NavLink>
            </li>
            <li>
              <NavLink to={"/pagestoread"}>Bottom Wear</NavLink>
            </li>
          </ul>
        </div>
        {/* navbar buttons */}
        <div className="navbar-end space-x-2">
          {/* profile */}
          <div className="text-white w-10 h-10 flex items-center justify-center border-2 rounded-full cursor-pointer relative">
            <FaRegUser />
          </div>
          {/* Cart */}
                  <div className="btn btn-primary">
                      <Link to={"/login"}>LogIn</Link>
          </div>

          {/* search bar */}
          <div
            className={`${
              serchToggol
                ? "absolute  z-50 left-1/2 transform -translate-x-1/2 w-full"
                : ""
            }`}
          >
            <div
              className={`${
                serchToggol
                  ? "border-2 flex justify-between p-2 rounded-md items-center bg-base-300"
                  : ""
              }`}
            >
              <label
                className={`${
                  serchToggol ? "bg-teal-300 p-2 rounded-md w-full mr-5" : ""
                }`}
              >
                <div className="gap-2 flex items-center text-white">
                  <div
                    title="Search Items"
                    onClick={() => setSerchToggol(true)}
                    className={`${
                      serchToggol
                        ? "mr-2"
                        : "rounded-full w-10 h-10 flex items-center justify-center border-2 cursor-pointer  hover:bg-gray-700"
                    }`}
                  >
                    <IoSearchOutline />
                  </div>

                  {serchToggol ? (
                    <>
                      <input
                        className="focus:outline-0 w-full"
                        type="search"
                        required
                        placeholder="Search"
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </label>
              <div>
                <div
                  className={`${serchToggol ? "" : "hidden"}`}
                  onClick={() => setSerchToggol(false)}
                >
                  <LiaTimesSolid className="hover:bg-gray-300 p-1 rounded-full cursor-pointer text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
