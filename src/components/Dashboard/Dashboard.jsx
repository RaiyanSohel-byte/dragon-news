import React, { use } from "react";
import { Star, Eye, Flame } from "lucide-react";
import { FaFireFlameCurved } from "react-icons/fa6";
const newsPromise = fetch("/data.json").then((res) => res.json());
export default function NewsDashboard() {
  const data = use(newsPromise);
  const newsData = data.filter((d) => d.others.is_trending === true);
  return (
    <div className="min-h-screen  p-6 max-w-9/12 mx-auto lg:ml-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FaFireFlameCurved size={32} color="red" /> Trending
      </h1>
      <div className="grid md:grid-cols-2  gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 border border-gray-100"
          >
            <img
              src={news.thumbnail_url}
              alt={news.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h2>
              {news.others.is_trending && (
                <span className="flex items-center text-orange-600 text-sm font-medium">
                  <Flame className="w-4 h-4 mr-1" /> Trending
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {news.details}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {news.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <img
                  src={news.author.img}
                  alt={news.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-700 text-sm">
                    {news.author.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(news.author.published_date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />{" "}
                  {news.rating.number}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-gray-400" /> {news.total_view}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
