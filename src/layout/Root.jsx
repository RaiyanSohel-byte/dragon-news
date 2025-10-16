import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import LeftAside from "../components/Home/LeftAside/LeftAside";
import RightAside from "../components/Home/RightAside/RightAside";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Root = () => {
  return (
    <div>
      <Header />
      <div className="lg:flex justify-between  max-w-[1440px] mx-auto">
        <LeftAside categoriesPromise={categoriesPromise} />
        <Outlet />
        <RightAside />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Root;
