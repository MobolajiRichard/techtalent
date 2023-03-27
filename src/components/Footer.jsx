import {
  FacebookTwoTone,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { ReactComponent as Discord } from "../asset/icon/discord.svg";

const Footer = () => {
  return (
    <div className="bg-[#000F24] text-white font-satoshi px-3 py-8 flex flex-col md:flex-row">
      <div className=" md:basis-1/4">
        <p className="font-amazing text-xl md:text-3xl">TechTime</p>
        <p className="mt-3 w-[70%] ">
          Reach out to us on any of our social media platform
        </p>
        <div className="flex justify-between items-center mt-3 w-[60%] md:w-[70%] ">
          <FacebookTwoTone fontSize="medium" sx={{ color: "#2a2a2b" }} />
          <Twitter fontSize="medium" sx={{ color: "#2a2a2b" }} />
          <YouTube fontSize="medium" sx={{ color: "#2a2a2b" }} />
          <Instagram fontSize="medium" sx={{ color: "#2a2a2b" }} />
          <Discord />
        </div>
      </div>
      <div className="mt-4  md:basis-1/4">
        <p className="font-clash text-lg ">Useful Links</p>
        <p className="mt-2">Home</p>
        <p className="mt-2">About Us</p>
        <p className="mt-2">Our Courses</p>
        <p className="mt-2">Testimonies</p>
        <p className="mt-2">Our Community</p>
      </div>
      <div className="mt-4  md:basis-1/4">
        <p className="font-clash text-lg ">Community</p>
        <p className="mt-2">Help Centers</p>
        <p className="mt-2">Connections</p>
        <p className="mt-2">Suggestions</p>
        <p className="mt-2">Blogs</p>
        <p className="mt-2">Newsletter</p>
      </div>
      <div className="mt-4  md:basis-1/4">
        <p className="font-clash text-lg">Subscribe Us</p>
        <div className="flex items-center mt-2">
          <input
            className="bg-[#2a2a2b] indent-3 outline-none border-2 border-[#054FB3] h-12 w-[60%] placeholder-[#424141]"
            placeholder="nft123@gmail.com"
          />
          <button className="bg-[#054FB3] text-xs px-2 h-12">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
