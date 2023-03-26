import {
  ArrowOutward,
  ChangeHistoryOutlined,
  TripOrigin,
  FiberManualRecord,
} from "@mui/icons-material";
import { AvatarGroup, Avatar } from "@mui/material";
import av1 from "../../asset/av1.png";
import av2 from "../../asset/av2.png";
import av3 from "../../asset/av3.png";
import av4 from "../../asset/av4.png";
import av5 from "../../asset/av5.png";
import hero from "../../asset/hero.png";
import bulb from "../../asset/bulb.png";
import { ReactComponent as Angle } from "../../asset/triangle.svg";
import hook from "../../asset/hook.svg";
import figma from "../../asset/figma.png";
import wb from "../../asset/wb.png";
import visual from "../../asset/vs.png";

const Main = () => {
  return (
    <div className="grow flex font-satoshi flex-col items-center md:flex-row justify-between ">
      <div className=" basis-1/2 flex flex-col items-center md:items-start md:mb-6 relative">
        <div className="hidden md:block">
          <TripOrigin
            fontSize="small"
            sx={{
              color: "#00C040",
              position: "absolute",
              top: "1%",
              left: "5%",
            }}
          />
        </div>
        <p className="h-1 hidden md:block w-1 bg-[#FFBE4E] rounded-full absolute top-[5%] right-[30%]"></p>
        <p className="font-clash font-bold  text-center md:text-start text-3xl md:text-6xl mt-4  md:w-[80%] md:mt-20 ">
          Grow your skills to advance your career path
        </p>
        <p className="text-[#e7e7e7] md:w-[74%] mt-4 text-center md:text-start text-[9px] md:text-base">
          Build Your Future With Our Quality Education. The Best And Largest
          All-In-One Online Tutoring Platform In The World
        </p>
        <div className="flex items-center mt-4">
          <div className="flex border border-white p-1 md:p-2 items-center mr-3">
            <p className="text-[11px] md:text-sm mr-2">Get Started Now</p>
            <ArrowOutward size="small" />
          </div>
          <button className="bg-white text-[#004DB3] p-2 md:p-3  rounded-[4px]">
            Enroll Now
          </button>
        </div>
        <div className="flex mt-4 items-center">
          <AvatarGroup spacing='small'>
            <Avatar alt="avatar" src={av1}  sizes="small" />
            <Avatar alt="avatar" src={av2} sizes="small" />
            <Avatar alt="avatar" src={av3} sizes="small" />
            <Avatar alt="avatar" src={av4} sizes="small" />
            <Avatar alt="avatar" src={av5} sizes="small" />
          </AvatarGroup>
          <div className="md:ml-3 ml-1">
            <p className="font-clash leading-none text-sm md:text-base">255k+</p>
            <p className="font-satoshi text-[#e7e7e7] md:text-sm text-[10px]">Previews</p>
          </div>
          <img
            src={hook}
            className="absolute md:-right-[17%] md:bottom-[8%] h-[30%] w-[30%] rotate-[52deg] md:rotate-0 -bottom-10 -right-3"
          />
        </div>
      </div>
      <div className=" flex md:basis-1/2 item-center justify-center relative">
        <img src={hero} className="w-[24em] h-[26em] md:w-[30em] md:h-[35em]" />
        <img
          src={bulb}
          className="absolute left-0 top-0 h-[100px] w-[100px] md:h-[200px] md:w-[200px]"
        />
        <img
          src={figma}
          className="absolute left-0 md:left-[10%] bottom-[30%]  h-[48px] w-[48px] md:w-[70px] md:h-[70px]"
        />
        <img
          src={visual}
          className="absolute right-[3%] md:right-[15%] top-8  h-[48px] w-[48px] md:w-[70px] md:h-[70px]"
        />
        <img
          src={wb}
          className="absolute right-[1%] md:right-[10%] bottom-[2%]  h-[48px] w-[48px] md:w-[70px] md:h-[70px]"
        />
        <ChangeHistoryOutlined
          sx={{
            rotate: "180deg",
            color: "#D2A400",
            position: "absolute",
            top: "40%",
            right: "8%",
          }}
        />
        <p className="h-1 w-1 bg-[#FFBE4E] rounded-full absolute bottom-[10%] left-[10%] md:left-[20%]"></p>
        <p className="h-5 w-5 rounded-full absolute top-[35%] left-[6%] md:left-[15%] border-4 border-[#00C040]"></p>
      </div>
    </div>
  );
};

export default Main;
