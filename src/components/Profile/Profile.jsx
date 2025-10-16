import React, { useContext } from "react";
import { FaEnvelope, FaUser, FaCheckCircle, FaRegClock } from "react-icons/fa";
import { MdVerified, MdLogout } from "react-icons/md";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { FaKey } from "react-icons/fa";
import { NavLink } from "react-router";
const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  if (!user)
    return <div className="text-center p-10 text-gray-500">Loading...</div>;

  const {
    displayName,
    email,
    emailVerified,
    photoURL,
    metadata,
    uid,
    providerId,
  } = user;

  return (
    <div className="flex flex-col  justify-center   px-4 ">
      <div className="bg-white shadow-lg rounded-2xl  p-8 max-w-md w-full text-center border border-gray-300">
        <img
          src={photoURL}
          alt={displayName}
          className="w-28 h-28 rounded-full mx-auto mb-4 shadow-sm"
        />

        <h1 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
          <FaUser className="text-blue-500" />
          {displayName}
        </h1>

        <p className="text-gray-500 text-sm mb-4">
          {providerId?.toUpperCase()} USER
        </p>

        <div className="flex flex-col gap-3 text-left mt-4">
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-blue-500" />
            <span>{email}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            {emailVerified ? (
              <>
                <MdVerified className="text-green-500" />
                <span>Email Verified</span>
              </>
            ) : (
              <>
                <FaCheckCircle className="text-red-500" />
                <span>Email Not Verified</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaRegClock className="text-blue-500" />
            <span>
              Last Sign-In:{" "}
              <span className="text-gray-500">{metadata?.lastSignInTime}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaRegClock className="text-blue-500" />
            <span>
              Account Created:{" "}
              <span className="text-gray-500">{metadata?.creationTime}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaUser className="text-blue-500" />
            <span>
              UID: <span className="text-gray-500">{uid}</span>
            </span>
          </div>
        </div>

        <NavLink
          to="/forget-password"
          className="mt-6 flex items-center justify-center gap-2 bg-black hover:bg-gray-700 cursor-pointer text-white py-2 px-4 rounded-xl w-full transition"
        >
          Reset Password <FaKey />
        </NavLink>
      </div>
    </div>
  );
};

export default ProfilePage;
