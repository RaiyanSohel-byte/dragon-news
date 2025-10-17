import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";
import Dashboard from "../components/Dashboard/Dashboard";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import News from "../components/Home/News/News";
import Details from "../components/Details/Details";
import AllNews from "../components/AllNews/AllNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            loader: () => fetch("/data.json"),
            element: <AllNews />,
          },
          {
            path: ":id",
            loader: () => fetch("/data.json"),
            element: <News />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "details/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
