import { ChevronDown } from "lucide-react";
import React, { use } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const LeftAside = ({ categoriesPromise }) => {
  const categories = use(categoriesPromise);
  // const news = useLoaderData();
  console.log(categories);
  return (
    <div>
      <h3 className="font-semibold mb-4 text-center lg:text-left hidden lg:block">
        All Categories
      </h3>
      <h3 className="font-semibold text-xl mb-4 text-center lg:hidden">
        Find Us On
      </h3>
      <div className=" lg:hidden flex justify-center">
        <div className="social-media-contact">
          <FaFacebook />
          Facebook
        </div>
        <div className="social-media-contact">
          <FaTwitter />
          Twitter
        </div>
        <div className="social-media-contact">
          <FaInstagram />
          Instagram
        </div>
      </div>
      <div className="flex justify-center lg:hidden">
        <details className="dropdown my-5">
          <summary className="btn btn-outline m-1 ">
            Categories <ChevronDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 border z-1 w-52 p-2 shadow-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={`/${category.id}`}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border rounded-md px-3 py-2 w-[150px]  font-bold text-center lg:text-left text-black mb-2"
                        : " mb-2 text-center lg:text-left cursor-pointer text-gray-500"
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="hidden lg:flex flex-col">
        {categories.map((category) => (
          <NavLink
            to={`/${category.id}`}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gray-300 rounded-md px-3 py-2 w-[150px] mx-auto font-bold text-center lg:text-left text-black mb-2"
                  : " mb-2 text-center lg:text-left cursor-pointer text-gray-500"
              }`
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
