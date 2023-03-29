import { Close, MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  //state to hold the current page/component
  //This is used to apply styling to the active link tag
  const [page, setPage] = useState("home");

  //state to hold the mobile view navigation display
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex justify-between items-center mt-5 w-full">
      <p className="font-amazing text-xl md:text-3xl">TechTime</p>
      <div className="md:flex justify-around basis-1/2 hidden md:visible items-center font-satoshi text-[#AAC4E6] cursor-pointer">
        <a
          href="#home"
          className={`${page === "home" && "text-white"}`}
          onClick={() => setPage("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={`${page === "about" && "text-white"}`}
          onClick={() => setPage("about")}
        >
          About Us
        </a>
        <a
          href="#courses"
          className={`${page === "courses" && "text-white"}`}
          onClick={() => setPage("courses")}
        >
          Courses
        </a>
        <a
          href="#testimony"
          className={`${page === "testimonial" && "text-white"}`}
          onClick={() => setPage("testimonial")}
        >
          Testimonial
        </a>
        <a
          href="#community"
          className={`${page === "community" && "text-white"}`}
          onClick={() => setPage("community")}
        >
          Community
        </a>
        <button className="bg-white text-[#004DB3] p-3 rounded-[4px]">
          Enroll Now
        </button>
      </div>
      <div className="md:hidden relative">

          <div>
            <IconButton
              onClick={() => setShowNav(true)}
              sx={{ color: "white" }}
            >
              <MenuOutlined />
            </IconButton>
          </div>
        {showNav && (
          <div className="flex flex-col ease-in-out duration-700 items-center w-40 p-4 z-20 pt-1 absolute top-0 right-0 bg-blue-400">
            <IconButton
              onClick={() => setShowNav(false)}
              sx={{ color: "white" }}
            >
              <Close />
            </IconButton>
            <a
              href="#home"
              className={`${page === "home" && "text-white"} mb-5 mt-5`}
              onClick={() => setPage("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${page === "about" && "text-white"} mb-5`}
              onClick={() => setPage("about")}
            >
              About Us
            </a>
            <a
              href="#courses"
              className={`${page === "courses" && "text-white"} mb-5`}
              onClick={() => setPage("courses")}
            >
              Courses
            </a>
            <a
              href="#testimony"
              className={`${page === "testimonial" && "text-white"} mb-5`}
              onClick={() => setPage("testimonial")}
            >
              Testimonial
            </a>
            <a
              href="#community"
              className={`${page === "community" && "text-white"} mb-5`}
              onClick={() => setPage("community")}
            >
              Community
            </a>
            <button className="bg-white text-[#004DB3] p-3 rounded-[4px]">
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
