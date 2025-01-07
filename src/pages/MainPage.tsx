// import { Link } from "react-router-dom";
// import login from "../assets/login.png";

// function MainPage() {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen p-16 ">
//       <div className="flex flex-col justify-center items-center h-screen w-full rounded-xl shadow-2xl">
//         <img src={login} alt="Title" className="object-contain" />
//         <p className="text-[#213547] font-bold p-3">ogs Daily News</p>
//         <Link to="/home">
//           <button className="font-noto mt-3 bg-[#374151] text-white p-3 font-bold rounded-lg">
//             เข้าสู่เว็บไซต์
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default MainPage;

import { Link } from "react-router-dom";
import login from "../assets/login.png";

function MainPage() {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4 sm:px-8 md:px-16">
      <div className="flex flex-col justify-center items-center w-full max-w-lg p-5 sm:p-10 rounded-xl shadow-2xl bg-white">
        <img
          src={login}
          alt="Title"
          className="object-contain w-32 sm:w-40 md:w-48 mb-4"
        />
        <p className="text-[#213547] font-bold text-lg sm:text-xl mb-4">
          ogs Daily News
        </p>
        <Link to="/home">
          <button className="font-noto mt-3 bg-[#374151] text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-bold rounded-lg transition-transform transform hover:scale-105">
            เข้าสู่เว็บไซต์
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;

