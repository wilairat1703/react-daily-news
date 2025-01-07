import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

function Navbar() {
  const [active, setActive] = useState("หน้าหลัก");
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const navigate = useNavigate();
  const navItems = [
    { path: "/home", label: "หน้าหลัก" },
    { path: "/news/0", label: "ข่าวทั้งหมด" },
    { path: "/news/1", label: "ข่าวกีฬา" },
    { path: "/news/2", label: "ข่าวการเมือง" },
    { path: "/news/3", label: "ข่าวดารา" },
    { path: "/news/4", label: "ข่าวทั่วไป" },
  ];

  return (
    <div className="h-screen">
      <div className="bg-[#f3f3f3] w-full px-6 lg:px-24 py-7 flex justify-between items-center gap-4 relative">
        {/* Logo */}
        <img
          src={logo}
          alt="Title"
          className="object-contain hover:cursor-pointer w-10"
          onClick={() => navigate("/")}
        />

        {/* Hamburger Button for smaller screens */}
        <button
          className="block md:hidden text-[#454551] text-2xl z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden md:flex"
          } flex flex-col md:flex-row text-center gap-4 md:gap-10 bg-[#f3f3f3] md:bg-transparent absolute md:relative left-0 md:left-auto top-16 md:top-0 w-full md:w-auto py-4 md:py-0 px-6 md:px-0 z-10 transition-all duration-300`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => {
                setActive(item.label);
                setMenuOpen(false); // Close menu after clicking on a link
              }}
              className={`font-noto font-bold ${
                active === item.label ? "text-[#90d6e3]" : "text-[#454551]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
