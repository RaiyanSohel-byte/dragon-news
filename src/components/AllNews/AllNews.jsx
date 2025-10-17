import { Bookmark, CircleOff, Share2 } from "lucide-react";
import React, { useContext } from "react";
import {
  FaBookmark,
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router";
import { BookmarkContext } from "../../Contexts/BookmarkContext/BookmarkContext";
import { toast } from "react-toastify";

const AllNews = () => {
  const news = useLoaderData();
  const { bookmark, setBookmark } = useContext(BookmarkContext);
  const handleBookmark = (data) => {
    const available = bookmark.find((b) => b.id === data.id);
    if (!available) {
      setBookmark([...bookmark, data]);
      toast.success("Added to bookmark!");
    } else {
      setBookmark(bookmark.filter((b) => b.id !== data.id));
      toast.info("Removed from bookmark!");
    }
  };
  return (
    <div>
      {news.length > 0 ? (
        <>
          <div>
            <h3 className="font-semibold mb-4 text-center lg:text-left hidden lg:block">
              Dragon News Home
            </h3>
          </div>
          <div className=" px-6 lg:px-0">
            {news.map((news) => {
              const isBookmarked = bookmark.find((b) => b.id === news.id);
              return (
                <div
                  key={news.id}
                  className="mb-4 lg:w-xl mx-auto border border-gray-200 rounded-md"
                >
                  <div className=" gray-main-div bg-gray-100 flex justify-between items-center p-4">
                    <div className="flex text-xs gap-2">
                      <div className="profile-pic">
                        <img
                          className="w-[30px] h-[30px] rounded-[50%]"
                          src={news.author.img}
                          alt=""
                        />
                      </div>
                      <div className="title-and-date">
                        <h3>{news.author.name}</h3>
                        <p className="text-gray-500 text-[10px]">
                          {new Date(
                            news.author.published_date
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {isBookmarked ? (
                        <FaBookmark
                          onClick={() => handleBookmark(news)}
                          color="#6B7280"
                          size={14}
                          className="cursor-pointer"
                        />
                      ) : (
                        <FaRegBookmark
                          onClick={() => handleBookmark(news)}
                          color="#6B7280"
                          size={14}
                          className="cursor-pointer"
                        />
                      )}
                      <Share2
                        color="#6B7280"
                        size={14}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="white-main-div px-4">
                    <h3 className="font-bold my-2">{news.title}</h3>
                    <img
                      className="lg:w-xl mx-auto"
                      src={news.thumbnail_url}
                      alt=""
                    />
                    <div className="my-4 text-xs border-b border-gray-300 pb-4">
                      <p className=" mb-2  text-gray-500">
                        {news.details.length > 100
                          ? news.details.slice(0, 340) + "..."
                          : news.details}
                      </p>
                      <NavLink
                        to={`/details/${news.id}`}
                        className="font-bold cursor-pointer text-sm text-[#fe8749] hover:underline transition-all duration-300"
                      >
                        Read More
                      </NavLink>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="rating-div my-4 flex gap-4 items-center">
                        {news.rating.number === 5 ? (
                          <div className="flex">
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />
                          </div>
                        ) : news.rating.number === 4 ? (
                          <div className="flex">
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />
                          </div>
                        ) : news.rating.number === 3 ? (
                          <div className="flex">
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />
                          </div>
                        ) : news.rating.number === 2 ? (
                          <div className="flex">
                            <FaStar size={14} color="orange" />{" "}
                            <FaStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />
                          </div>
                        ) : (
                          <div className="flex">
                            <FaStar size={14} color="orange" />{" "}
                            <FaRegStar size={14} color="orange" />
                            <FaRegStar size={14} color="orange" />
                            <FaRegStar size={14} color="orange" />
                            <FaRegStar size={14} color="orange" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xs text-gray-500">
                            {news.rating.number.toFixed(1)}
                          </h3>
                        </div>
                      </div>
                      <div className="view-div flex items-center gap-2">
                        <FaEye />
                        <h3 className="text-sm font-semibold">
                          {news.total_view}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h3 className="flex justify-center gap-2 items-center min-h-[calc(100vh-280px)] text-4xl font-bold">
          No News Here <CircleOff color="#EF4444" size={32} />
        </h3>
      )}
    </div>
  );
};

export default AllNews;
