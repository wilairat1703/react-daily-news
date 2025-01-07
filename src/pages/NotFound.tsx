import { Link } from "react-router-dom";
import error from "../assets/error.png";
function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 sm:px-8 md:px-16 bg-gray-100">
      <img src={error} alt="Title" className=" object-contain" />
      <Link to="/home">
        <button className="font-noto mt-3 bg-[#374151] text-white p-3 font-bold rounded-lg">
          กลับสู่หน้าหลัก
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
