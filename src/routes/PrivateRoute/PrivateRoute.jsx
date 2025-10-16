import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className=" flex justify-center min-h-[calc(100vh-200px)] items-center">
        <h3 className="loading loading-spinner loading-xl"></h3>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
