import React from "react";
import bg from "../../assets/demo-card-thumbnail.png";
import { FaFireFlameCurved } from "react-icons/fa6";
import { NavLink } from "react-router";

const About = () => {
  return (
    <section
      className={`overflow-hidden mb-20 bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl mb-4">
            Where Stories Take Flight
          </h2>

          <p className=" max-w-lg text-white/90 md:mt-6 font-medium md:text-lg md:leading-relaxed ">
            Welcome to The Dragon News, your trusted source for timely,
            reliable, and engaging news from around the world. We’re dedicated
            to delivering accurate reporting, insightful analysis, and
            thought-provoking stories that matter most to our readers. Whether
            it’s breaking headlines, in-depth features, or inspiring
            human-interest pieces, The Dragon News strives to keep you informed
            and empowered. Our mission is simple — to ignite curiosity, spark
            conversation, and bring the truth to light with integrity and
            passion.
          </p>

          <div className="mt-4 sm:mt-8">
            <NavLink
              to="/dashboard"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 "
            >
              <h3 className="flex items-center gap-2 font-bold">
                {" "}
                <FaFireFlameCurved size={16} /> What's Trending?
              </h3>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
