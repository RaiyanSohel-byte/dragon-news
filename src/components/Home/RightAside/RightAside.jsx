import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightAside = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Sign In Successful!");
        navigate(location?.state || "/0");
      })
      .catch((error) => toast(error.message));
  };
  return (
    <div className="flex justify-center ">
      <div>
        {!user && (
          <div className="hidden lg:block mb-4">
            <h3 className="font-bold">Login With</h3>
            {/* Google */}

            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-black  shadow-sm my-2"
            >
              <FaGoogle />
              Login with Google
            </button>
          </div>
        )}
        <div className="hidden lg:block ">
          <h3 className="font-semibold text-xl mb-4">Find Us On</h3>
          <div className="flex gap-1 items-center cursor-pointer px-5 border border-gray-300 py-3">
            <FaFacebook />
            Facebook
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-5 border border-gray-300 py-3">
            <FaTwitter />
            Twitter
          </div>
          <div className="flex gap-1 items-center cursor-pointer px-5 border border-gray-300 py-3">
            <FaInstagram />
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
