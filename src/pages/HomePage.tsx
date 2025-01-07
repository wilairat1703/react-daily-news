import Section from "../components/Section";
import { data_new } from "../data/data_new";

function HomePage() {
  return (
    <div className="bg-white font-noto py-5 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="flex flex-col justify-center items-center bg-white">
        {data_new.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mb-6"
          >
            <div className="text-[#213547] font-bold text-2xl sm:text-3xl">
              {data.title}
            </div>
            <div className="mt-6 sm:mt-10 text-[#213547] font-bold text-sm sm:text-base text-center">
              {data.sub_title}
            </div>
          </div>
        ))}

        <div className="w-full">
          {data_new.map((category) =>
            category.type_new.map((type) => (
              <Section
                key={type.id}
                category={type}
                limit={2}
                isAllNewPage={false}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
