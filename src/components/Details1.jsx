import {
  Description,
  SettingsInputAntenna,
  SlowMotionVideo,
  VolumeUp,
} from "@mui/icons-material";
import image1 from "../asset/image/image1.png";
import image2 from "../asset/image/image2.png";
import student from '../asset/image/student.png'
import React from "react";
import { ReactComponent as Crown } from "../asset/icon/crown.svg";
import { ReactComponent as Stone } from "../asset/icon/stone.svg";
import { ReactComponent as Zig } from "../asset/icon/zig.svg";
import { ReactComponent as HCircle } from "../asset/icon/h-circle.svg";

const Details1 = () => {
  return (
    <div className="flex flex-col md:flex-row px-[6%] font-satoshi bg-[#F8F9FC] p-10 mt-10 relative">
      <div className="basis-1/2 flex flex-col items-center md:items-start">
        <p className="font-clash text-[24px] text-center md:text-start md:text-[56px] md:leading-none ">
          High quality video, audio & live classes
        </p>
        <div className="absolute  top-[3%] left-[2%] md:top-[4%] md:left-[4%]">
        <Stone/>
        </div>
        <p className="font-satoshi text-[#a1a1a1] w-[90%] text-[8px] text-center md:text-base  mt-4 md:text-start">
          High-Defination Video Is Video of Higher Resolutio And Quality Than
          Standard Definition. While There’s No Standard Meaning For High
          Definition, Generally Any Standard Video Image
        </p>
        <button className="bg-[#004DB3] mt-4 text-white rounded-md px-8 py-4 font-satoshi">
          View Courses
        </button>
        <div className="flex mt-4">
          <div className="flex bg-white w-fit items-center text-xs md:text-base  py-2 px-3 rounded-md">
            <div className="bg-green-100 p-2  h-8 w-8 flex items-center justify-center">
              <VolumeUp sx={{ color: "#3FA96A" }} fontSize="small" />
            </div>
            <p className="font-bold ml-2">Audio Classes</p>
          </div>
          <div className="ml-4 flex bg-white w-fit text-xs md:text-base items-center  py-2 px-3 rounded-md">
            <div className="bg-red-100 p-2  h-8 w-8 flex items-center justify-center">
              <SettingsInputAntenna
                sx={{ color: "#F69E8E" }}
                fontSize="small"
              />
            </div>
            <p className="font-bold ml-2">Live Classes</p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex bg-white w-fit text-xs md:text-base items-center py-2  px-3  rounded-md">
            <div className="bg-purple-100 p-2  h-8 w-8 flex items-center justify-center">
              <SlowMotionVideo sx={{ color: "#9269CD" }} fontSize="small" />
            </div>
            <p className="font-bold ml-2">Recorded Classes</p>
          </div>
          <div className="ml-4 flex bg-white w-fit items-center text-xs md:text-base py-4]2 px-3 rounded-md">
            <div className="bg-blue-100 p-2  h-8 w-8 flex items-center justify-center">
              <Description sx={{ color: "#5978CF" }} fontSize="small" />
            </div>
            <p className="font-bold ml-2">50+ Notes</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex items-center justify-center relative pl-6 mt-6 md:mt-0 md:pl-0">
        
        <img src={image1} className="w-[75%] z-10" />
        <img src={student} className="w-[25%] md:-left-[5%] md:top-[30%] left-0 top-[25%] z-20 absolute" />
        <img
          src={image2}
          className="w-[50%] absolute -bottom-[15%] -left-[3%] z-20"
        />
         <div className="absolute right-0 -bottom-[30%] md:-bottom-[4%] md:right-[7%] z-0">
        <HCircle />
        <p className="h-3 w-3 rounded-full absolute md:-bottom-[25%] -bottom-[25%]  border-2 border-[#C8A1FD]"></p>
      </div>
    
      </div>

      <div className="absolute top-[25%]  md:top-0 right-0">
        <Zig />
      </div>
      <div className="absolute bottom-[40%] right-0 md:bottom-0">
        <Crown />
      </div>
    </div>
  );
};

export default Details1;
