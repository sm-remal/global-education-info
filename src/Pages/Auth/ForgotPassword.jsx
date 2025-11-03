import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
    const location = useLocation();
    
  useEffect(() => {
    if (location.state && location.state?.email) {
      setEmail(location.state?.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setEmail(e.target.email.value);
      }
      
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "Your Password Reset Successful. Please Check your email inbox or Spam."
        );
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 1500);
        
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="py-10">
      <title>Forgote Password</title>
      <form
        onSubmit={handleResetPassword}
        className="max-w-xl mx-auto md:mt-10 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email..."
            required
            className="w-full px-4 py-2 border rounded-md text-gray-500"
          />

          <button
            type="submit"
            className="w-full btn cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
