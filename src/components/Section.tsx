import NewsCard from "./NewsCard";

interface CategorySectionProps {
  category: {
    id: number;
    name: string;
    news_type: {
      id: number;
      date: string;
      headline: string;
      content: string;
      category: string;
    }[];
  };
  limit?: number;
  isAllNewPage?: boolean;
}

function Section({ category, limit, isAllNewPage }: CategorySectionProps) {
  const newsToShow = limit
    ? category.news_type
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit)
    : category.news_type;

  return (
    <div className="w-full mt-4 mb-6">
      {isAllNewPage ? (
        <div className="text-[#213547] font-bold text-xl sm:text-2xl py-3 sm:py-5 flex justify-center items-center">
          {category.name}
        </div>
      ) : (
        <div className="text-[#213547] font-bold text-base sm:text-lg mb-4">
          ประเภทข่าว: {category.name}
        </div>
      )}

      <div className="grid grid-cols-1  gap-4">
        {newsToShow.map((news) => (
          <NewsCard key={news.id} news={news} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
}

export default Section;
