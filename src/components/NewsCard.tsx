import { Link } from "react-router-dom";

interface NewsCardProps {
  news: {
    id: number;
    date: string;
    headline: string;
    content: string;
    category: string;
  };
  categoryId: number;
}

function NewsCard({ news, categoryId }: NewsCardProps) {
  return (
    <Link
      to={`/Detail?idtype=${categoryId}&idnews=${news.id}&name=wilairat`}
      className="block"
    >
      <div
        key={news.id}
        className="bg-white shadow-lg w-full px-4 sm:px-5 py-5 sm:py-7 mx-0 sm:mx-2 mb-4 rounded-lg hover:cursor-pointer 
        hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-150 ease-in-out"
      >
        <p className="text-gray-500 text-sm sm:text-base">{news.date}</p>
        <p className="text-[#213547] font-bold text-base sm:text-lg">
          {news.headline}
        </p>
        <p className="text-[#213547] text-sm sm:text-base line-clamp-3">
          {news.content}
        </p>
        <p className="text-gray-500 font-bold text-sm sm:text-base">
          ประเภทข่าว: {news.category}
        </p>
      </div>
    </Link>
  );
}

export default NewsCard;
