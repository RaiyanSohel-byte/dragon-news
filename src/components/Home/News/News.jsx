import { Bookmark, CircleOff, Share2 } from "lucide-react";
import { NavLink, useLoaderData, useParams } from "react-router";
import {
  FaBookmark,
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { useContext } from "react";
import { BookmarkContext } from "../../../Contexts/BookmarkContext/BookmarkContext";
import { toast } from "react-toastify";
const News = () => {
  const news = useLoaderData();
  const newsIdStr = useParams();
  const newsId = parseInt(newsIdStr.id);
  const { bookmark, setBookmark } = useContext(BookmarkContext);

  const handleBookmark = (data) => {
    const alreadyBookmarked = bookmark.find((b) => b.id === data.id);
    if (!alreadyBookmarked) {
      setBookmark([...bookmark, data]);
      toast.success("Added to bookmark!");
    } else {
      setBookmark(bookmark.filter((b) => b.id !== data.id));
      toast.info("Removed from bookmark!");
    }
  };

  const filteredNews = news.filter((n) => {
    if (newsId !== 0 && newsId !== 1) {
      return n.category_id === newsId;
    } else if (newsId === 0) {
      return n;
    } else if (newsId === 1) {
      return n.others.is_today_pick === true;
    }
  });

  return (
    <div>
      {filteredNews.length > 0 ? (
        <div className="px-6 lg:px-0">
          {filteredNews.map((news) => {
            const isBookmarked = bookmark.find((b) => b.id === news.id);
            return (
              <div
                key={news.id}
                className="mb-4 lg:w-xl mx-auto border border-gray-200 rounded-md"
              >
                <div className="gray-main-div bg-gray-100 flex justify-between items-center p-4">
                  {/* Author info */}
                  <div className="flex text-xs gap-2">
                    <img
                      className="w-[30px] h-[30px] rounded-[50%]"
                      src={news.author.img}
                      alt=""
                    />
                    <div>
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

                  {/* Bookmark & Share */}
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

                {/* News content */}
                <div className="white-main-div px-4">
                  <h3 className="font-bold my-2">{news.title}</h3>
                  <img
                    className="lg:w-xl mx-auto"
                    src={news.thumbnail_url}
                    alt=""
                  />
                  <div className="my-4 text-xs border-b border-gray-300 pb-4">
                    <p className="mb-2 text-gray-500">
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
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="flex justify-center gap-2 items-center min-h-[calc(100vh-280px)] text-4xl font-bold">
          No News Here <CircleOff color="#EF4444" size={32} />
        </h3>
      )}
    </div>
  );
};

export default News;
