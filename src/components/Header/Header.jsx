import { use, useContext } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/user.png";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";

const newsPromise = fetch("/data.json").then((res) => res.json());
const Header = () => {
  const navigate = useNavigate();
  const news = use(newsPromise);
  const breakingNews = news.filter((n) => n.others.is_today_pick === true);
  console.log(breakingNews);
  const time = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "Your have been logged out from your account.",
              icon: "success",
            });
            navigate("/0");
          })
          .catch((error) => toast.error(error.message));
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          About
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : ""
              }
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "underline font-bold" : "")}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="py-5">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="" />
      </div>
      <div className="text-center mb-4">
        <h3 className="text-gray-500">Journalism Without Fear or Favour</h3>
        <h3 className="text-gray-500 font-semibold">{time}</h3>
      </div>
      <Marquee className="bg-gray-100 px-5 py-3 flex items-center">
        {breakingNews.map((news, index) => (
          <div key={index} className="flex items-center mr-6">
            <button className="btn rounded-none bg-red-500 text-white mr-2">
              Latest
            </button>
            <h3 className="font-semibold inline-block text-gray-700">
              {news.title}
            </h3>
          </div>
        ))}
      </Marquee>

      <div className="navbar  text-gray-500  lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center">
            {user ? (
              <>
                {" "}
                <img
                  className="w-[40px] h-[40px] rounded-[50%] border-2 border-white shadow-md"
                  src={user?.photoURL || avatar}
                  alt="Profile Photo"
                />
                <button
                  onClick={handleSignOut}
                  className="btn btn-neutral btn-outline"
                >
                  Log Out <LogOut size={16} />
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn rounded-none bg-black text-white"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
