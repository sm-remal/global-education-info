import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { TbEyeClosed } from "react-icons/tb";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import Container from "../../Container/Container";
import { AuthContext } from "../../Context/AuthContext";
import logo from "../../assets/Images/website-logo.png"

const LogIn = () => {
  const { logInGoogle, setLoading, userLogIn } = useContext(AuthContext);
  const [showEye, setShowEye] = useState(true);
   const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

 const handleGoogleLogIn = () => {
   logInGoogle()
     .then((result) => {
       const user = result.user;
       console.log(user);
       navigate(location.state || "/")
       
       
     })
     .catch((err) => console.log(err.message));
  };
  

   const handleLogIn = (e) => {
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;

     userLogIn(email, password)
       .then(() => {
         alert("Your LogIn Successful.");
         navigate(location.state || "/");
       })
       .catch((err) => {
         setLoading(false);
         alert(`${err.message}`);
         return;
       });
   };

  return (
    <Container className={`flex justify-center items-center py-15`}>
      <title>LogIn || Global-Education-info</title>
      <form
        onSubmit={handleLogIn}
        className="bg-base-200 shadow-lg rounded-box md:w-3/6 lg:w-2/6 border p-7 border-teal-500"
      >
        <div className="flex items-center justify-center">
          <img className="w-40 py-5" src={logo} alt="This is logo" />
        </div>
        <h1 className="text-2xl font-bold text-center py-2">
          Log in to your Account
        </h1>
        <p className="text-sm font-normal text-center pb-4">
          Don't have an account? Please{" "}
          <Link to={"/register"} className="hover:underline text-[#632EE3]">
            <span className="from-[#632EE3] to-[#9F62F2] cursor-pointer text-transparent bg-linear-to-r bg-clip-text font-semibold">
              Register Now
            </span>
          </Link>
        </p>

        <fieldset className="fieldset space-y-2">
          <label className="text-base font-medium">
            {" "}
            Email
            <label className="floating-label mt-2">
              <span className="bg-teal-500 text-white p-1 rounded-md">
                Enter Email
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="globaleducationinfo@gmail.com"
                className="input w-full focus:border-teal-500 border border-[#632EE3] focus:outline-0 cursor-pointer"
              />
            </label>
          </label>

          <label className="text-base  font-medium">
            {" "}
            Password
            <label className="floating-label mt-2">
              <span className="bg-teal-500 text-white p-1 rounded-md">
                Enter Password
              </span>
              <div className="flex items-center border border-[#632EE3] justify-between focus-within:outline-0 focus-within:border-teal-500 input cursor-pointer w-full">
                <input
                  type={showEye ? "password" : "text"}
                  name="password"
                  placeholder="Enter Password"
                />
                <p
                  onClick={() => {
                    setShowEye(!showEye);
                  }}
                >
                  {showEye ? <TbEyeClosed /> : <FaRegFaceRollingEyes />}
                </p>
              </div>
            </label>
          </label>

          {/* <Link to={"/forgotpassword"}>
            state={{ email: email }}
            <span className="hover:underline text-[#632EE3]">
              <span className="from-[#632EE3] to-[#9F62F2] cursor-pointer text-transparent bg-linear-to-r bg-clip-text font-semibold">
                Forgot Password?
              </span>
            </span>
          </Link> */}
          <div>
            <Link
              to={"/forgotpassword"}
              state={{ email: email }}
              className="link link-hover text-[#632EE3] text-sm"
            >
              Forgot password?
            </Link>
          </div>

          <button className="myBtn bg-linear-to-r text-white hover:bg-linear-to-l from-[#632EE3] to-[#9F62F2]">
            Login
          </button>
          <p className="flex justify-center items-center">
            <span className="border-b-2 w-full border-gray-200"></span>
            <span className="px-3 font-semibold">OR</span>
            <span className="border-b-2 w-full border-gray-200"></span>
          </p>
          {/* Google Btn */}
          <Link
            onClick={handleGoogleLogIn}
            className="inline-block bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-0.5 rounded-md transition-all duration-700 ease-in-out"
          >
            <div className="bg-white rounded-md hover:bg-black transition-all duration-700 ease-in-out">
              <button className="px-4 md:px-6 py-1 md:py-[7px] text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-xs md:text-base w-full h-full hover:text-white cursor-pointer transition-all duration-700 ease-in-out flex gap-2 items-center justify-center">
                <FcGoogle /> Sign in With Google
              </button>
            </div>
          </Link>
        </fieldset>
      </form>
    </Container>
  );
};

export default LogIn;
