import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { useContext } from "react";
import { TbEyeClosed } from "react-icons/tb";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext";
import Container from "../../Container/Container";
import logo from "../../assets/Images/website-logo.png";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, logInGoogle, updateUserInfo, setUser } =
    useContext(AuthContext);
  const [showEye, setShowEye] = useState(true);

  const hendleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasValidLength = password.length >= 6;

    if (!hasUppercase) {
      toast.error("Please Enter At Least One Uppercase!");
      return;
    }
    if (!hasLowercase) {
      toast.error("Please Enter At Least One Lowercase!");
      return;
    }
    if (!hasValidLength) {
      toast.error("Please Enter Minimum 6 Length Password!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // ! Update User
        const userUpdateInfo = {
          displayName: name,
          photoURL: photoURL,
        };

        updateUserInfo(userUpdateInfo)
          .then(() => {
            setUser({ ...user, userUpdateInfo });
          })
          .catch((err) => toast.error(err.message));
        toast.success("Your Account successfully Created.");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then(() => {
        toast.success("Your Sign in successful.");
        // console.log(user);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Container className={`flex justify-center items-center py-15 px-5`}>
      <title>Register || Global-Education-info</title>
      <form
        onSubmit={hendleCreateUser}
        className="shadow-lg bg-base-200 py-10 mt-15 rounded-box w-full md:w-3/6 lg:w-2/5 border p-7 border-teal-500"
      >
        <div className="flex items-center justify-center">
          <img className="w-40 py-5" src={logo} alt="This is logo" />
        </div>
        <h1 className="text-2xl font-bold text-center py-2">
          Create Your Account!
        </h1>
        <p className="text-sm font-normal text-center pb-4">
          Already have an account? Please{" "}
          <Link to={"/login"} className="hover:underline text-[#632EE3]">
            <span className="from-[#632EE3] to-[#9F62F2] cursor-pointer text-transparent bg-linear-to-r bg-clip-text font-semibold">
              Login
            </span>
          </Link>
        </p>
        <fieldset className="fieldset space-y-2">
          <label className="text-base  font-medium">
            {" "}
            Name
            <label className="floating-label mt-2">
              <span className="bg-teal-500 text-white p-1 rounded-md">
                Enter Name
              </span>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter Name"
                className="input border border-[#632EE3] w-full focus:border-teal-500 focus:outline-0 cursor-pointer"
              />
            </label>
          </label>
          <label className="text-base  font-medium">
            {" "}
            Email
            <label className="floating-label mt-2">
              <span className="bg-teal-500 text-white p-1 rounded-md">
                Enter Email
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder="globaleducationinfo@gmail.com"
                className="input border border-[#632EE3] w-full focus:border-teal-500 focus:outline-0 cursor-pointer"
              />
            </label>
          </label>
          <label className="text-base  font-medium">
            {" "}
            Photo URL
            <label className="floating-label mt-2">
              <span className="bg-teal-500 text-white p-1 rounded-md">
                Enter Photo URL
              </span>
              <input
                type="url"
                name="photoURL"
                required
                placeholder="Enter URL"
                className="input border border-[#632EE3] w-full focus:border-teal-500 focus:outline-0 cursor-pointer"
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
                  required
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

          <button
            type="submit"
            className="myBtn text-center bg-linear-to-r text-white hover:bg-linear-to-l from-[#632EE3] to-[#9F62F2]"
          >
            Register Now
          </button>
          <p className="flex justify-center items-center">
            <span className="border-b-2 w-full border-gray-200"></span>
            <span className="px-3 font-semibold">OR</span>
            <span className="border-b-2 w-full border-gray-200"></span>
          </p>
          {/* Google Btn */}
          <Link
            to={"/"}
            onClick={handleGoogleLogIn}
            className="inline-block bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-0.5 rounded-md transition-all duration-700 ease-in-out"
          >
            <div className="bg-white rounded-md hover:bg-black transition-all duration-700 ease-in-out">
              <div className="px-4 md:px-6 py-1 md:py-[7px] text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-xs md:text-base w-full h-full hover:text-white cursor-pointer transition-all duration-700 ease-in-out flex gap-2 items-center justify-center">
                <FcGoogle /> Sign in With Google
              </div>
            </div>
          </Link>
        </fieldset>
      </form>
    </Container>
  );
};

export default Register;
