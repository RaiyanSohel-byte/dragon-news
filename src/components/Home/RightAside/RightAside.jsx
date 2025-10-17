import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { BookmarkContext } from "../../../Contexts/BookmarkContext/BookmarkContext";

const RightAside = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = useContext(AuthContext);
  const { bookmark } = useContext(BookmarkContext);
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
              className="btn bg-white text-black border-black  shadow-sm my-2 hover:bg-black hover:text-white transition-all duration-300"
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
        <div className="my-8">
          <h3 className="mb-4 font-semibold text-xl ">Bookmarks</h3>
          <div>
            {bookmark.map((mark) => (
              <div className="bg-base-100 rounded-box shadow-md w-[200px] px-4 py-2 border border-gray-300 my-4">
                <div className="">
                  <img className="" src={mark.thumbnail_url} alt="" />
                </div>
                <h3 className="text-xs mt-4 mb-2 font-semibold">
                  {mark.title}
                </h3>
                <NavLink
                  to={`/details/${mark.id}`}
                  className="cursor-pointer underline font-semibold text-xs"
                >
                  See More...
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
