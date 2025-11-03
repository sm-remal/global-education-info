import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink } from "react-router";
import Container from "../../Container/Container";
import navLogo from '../../assets/Images/navLogo.png'
<<<<<<< HEAD
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

=======
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
>>>>>>> c2263cafe6b0df9059539e05ca75c91158b0e704

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const { user, userSignOut, setUser } = useContext(AuthContext);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        setUser(null);
        toast.success("Your SignOut successful.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-[#151269] text-white">
      <Container className="navbar max-w-7xl mx-auto">
        {/* LEFT: Logo + Mobile */}
        <div className="navbar-start">
          {/* Mobile Hamburger */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-100 p-2 shadow bg-white text-black rounded-box w-64"
            >
              {[
                "Home",
                "Opportunities",
                "Living & Support",
                "Test & Skills",
                "Apply",
              ].map((menu) => (
                <li key={menu}>
                  <details>
                    <summary>{menu}</summary>
                    <ul className="p-2">
                      {getDropdownItems(menu).map((item) => (
                        <li key={item}>
                          <NavLink
                            className={({ isActive }) =>
                              isActive
                                ? "border-b-2 pb-1 text-[#258184] border-b-[#258184]"
                                : ""
                            }
                          >
                            {item}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <div className="flex items-center">
                <img src={navLogo} alt="Logo" className="w-[50px]" />
                <span className="hidden sm:inline">Global Education Info</span>
              </div>
          </Link>
        </div>

        {/* CENTER: Main Menu */}
        <div className="navbar-center hidden lg:flex" ref={dropdownRef}>
          <ul className="menu menu-horizontal px-1 font-medium text-white">
            {[
              "Home",
              "Opportunities",
              "Living & Support",
              "Test & Skills",
              "Apply",
            ].map((menu) => (
              <li key={menu} className="relative group">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className={`px-3 py-2 transition-all duration-200 rounded-md 
                    ${
                      activeDropdown === menu
                        ? "bg-white text-[#151269] font-semibold"
                        : "hover:text-blue-300"
                    }`}
                >
                  {menu}
                  <div
                    className={`h-0.5 transition-transform origin-left duration-200 
                      ${
                        activeDropdown === menu
                          ? "bg-white scale-x-100"
                          : "bg-blue-400 scale-x-0 group-hover:scale-x-100"
                      }`}
                  ></div>
                </button>

                {/* Dropdown */}
                {activeDropdown === menu && (
                  <ul className="absolute -left-4 top-full mt-4 bg-white text-black shadow-lg rounded-box w-56 p-2 z-50 animate-fadeIn">
                    {getDropdownItems(menu).map((item) => (
                      <li key={item}>
                        <NavLink className="block px-2 py-1 rounded-md transition-all duration-200 hover:bg-[#151269] hover:text-white">
                          {item}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Search + Auth */}
        <div className="navbar-end flex items-center gap-2">
          {/* Search Icon */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="btn btn-ghost btn-circle text-white hover:bg-[#1b1780]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              />
            </svg>
          </button>

          {/* Auth Buttons */}
          <div>
            {user ? (
              <div className="text-white w-10 h-10 flex items-center justify-center border-2 rounded-full cursor-pointer relative">
                <img
                  className="w-9 h-9 rounded-full"
                  src={user.photoURL}
                  alt="User Image"
                />
              </div>
            ) : (
              <Link
                to="/register"
                className="btn btn-xs md:btn-sm bg-white text-[#151269] hover:bg-blue-100 font-semibold"
              >
                Sign Up
              </Link>
            )}
          </div>
          <div>
            {user ? (
              <Link
                onClick={handleSignOut}
                className="btn btn-xs md:btn-sm btn-outline border-white text-white hover:bg-white hover:text-[#151269]"
              >
                Sign Out
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn btn-xs md:btn-sm btn-outline border-white text-white hover:bg-white hover:text-[#151269]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </Container>

      {/* SEARCH BAR */}
      {showSearch && (
        <div
          ref={searchRef}
          className="absolute top-full left-0 w-full bg-white text-black shadow-md border-t border-gray-200 animate-fadeIn"
        >
          <div className="max-w-3xl mx-auto p-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search universities, programs, countries..."
              className="input input-bordered w-full border-gray-300"
            />
            <button className="btn bg-[#151269] text-white hover:bg-[#1b1780]">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Dropdown Items (if–else) ---
const getDropdownItems = (menu) => {
  let items = [];
  if (menu === "Home") {
    items = [
      "Universities",
      "Countries",
      "Programs",
      "Rankings",
      "Admission Deadlines",
    ];
  } else if (menu === "Opportunities") {
    items = [
      "Scholarships",
      "Grants & Fellowships",
      "Research Programs",
      "Exchange Programs",
    ];
  } else if (menu === "Living & Support") {
    items = [
      "Accommodation",
      "Cost of Living",
      "Visa & Embassy Info",
      "Travel Guide",
      "Student Insurance",
    ];
  } else if (menu === "Test & Skills") {
    items = ["IELTS", "PTE", "TOEFL", "GRE / GMAT", "Skill Development"];
  } else if (menu === "Apply") {
    items = [
      "Apply Now",
      "Track Application",
      "Reference Agencies",
      "Required Documents",
      "FAQ",
    ];
  }
  return items;
};

export default Navbar;
