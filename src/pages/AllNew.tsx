import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Section from "../components/Section";
import { data_new } from "../data/data_new";

function AllNew() {
  const { id } = useParams<{ id: string }>(); // Define 'id' as a string from URL params
  const navigate = useNavigate();

  useEffect(() => {
    const validIds = [0, 1, 2, 3, 4];
    if (!validIds.includes(Number(id))) {
      navigate("/home");
    }
  }, [id, navigate]);

  const isShowAll = Number(id) === 0;
  const selectedCategory = data_new[0].type_new.find(
    (category) => category.id === Number(id)
  );

  // return (
  //   <div className="font-noto flex flex-col px-32">
  //     {/* Header */}
  //     {isShowAll && (
  //       <div className="text-[#213547] font-bold text-base flex justify-end py-5">
  //         รวมข่าวทั้งหมด
  //       </div>
  //     )}

  //     {isShowAll ? (
  //       data_new[0].type_new.map((category) => (
  //         <Section key={category.id} category={category}isAllNewPage={true} />
  //       ))
  //     ) : selectedCategory ? (
  //       <Section category={selectedCategory} isAllNewPage={true}/>
  //     ) : (
  //       <div className="text-[#213547] font-bold text-lg py-5">
  //         ไม่พบข้อมูลข่าว
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div className="bg-white font-noto flex flex-col px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Header */}
      {isShowAll && (
        <div className="text-[#213547] font-bold text-sm sm:text-base flex justify-end py-3 sm:py-5">
          รวมข่าวทั้งหมด
        </div>
      )}
  
      {isShowAll ? (
        data_new[0].type_new.map((category) => (
          <Section key={category.id} category={category} isAllNewPage={true} />
        ))
      ) : selectedCategory ? (
        <Section category={selectedCategory} isAllNewPage={true} />
      ) : (
        <div className="text-[#213547] font-bold text-base sm:text-lg py-3 sm:py-5">
          ไม่พบข้อมูลข่าว
        </div>
      )}
    </div>
  );
}

export default AllNew;
