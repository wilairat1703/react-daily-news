import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { data_new } from "../data/data_new";

function DetailNew() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const idtype = searchParams.get("idtype");
  const idnews = searchParams.get("idnews");
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: 0,
    headline: "",
    content: "",
    date: "",
    time: "",
    category: "",
    publisher: "",
  });

  useEffect(() => {
    const type = data_new[0].type_new.find((type) => type.id === Number(idtype));
    const news = type? type.news_type.find((news) => news.id === Number(idnews)): null;

    if (!name || !type || !news) {
      navigate("/home");
    }else{
      setData({...news});
    }
  }, [name, idtype, idnews, navigate]);

  return (
    <div className="font-noto flex flex-col px-2 md:px-16  lg:px-32">
      <div className="text-[#213547] font-bold text-base flex justify-end py-5">
        ผู้เข้าชม:{name}
      </div>
      <div className="text-[#213547] font-bold text-xl py-5 flex flex-row justify-center items-center">
        รายละเอียด{data.headline}
      </div>
      <div className="w-full p-7 mb-4 rounded-lg border-black border">
        <p>รหัสข่าว: {data.id}</p>
        <p>วันที่ลงข่าว: {data.date}</p>
        <p>เวลาที่ลงข่าว: {data.time}</p>
        <p>หัวข้อข่าว: {data.headline}</p>
        <p>เนื้อหาข่าว: {data.content}</p>
        <p>ประเภทข่าว: {data.category}</p>
        <p>สำนักข่าว: {data.publisher}</p>
      </div>
    </div>
  );
}

export default DetailNew;
