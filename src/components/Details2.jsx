import { Cast, CastConnectedRounded, Group, Groups, LocalAtm, LocalAtmTwoTone, WatchLater, ChangeHistoryOutlined } from "@mui/icons-material";
import image3 from "../asset/image/image3.png";
import {ReactComponent as Zig} from '../asset/icon/zig2.svg'

const Details2 = () => {
  return (
    <div id="about" className="flex px-[6%] flex-col items-center md:flex-row bg-[#F8F9FC] md:items-start mt-32 relative">
      <div className="basis-1/2 flex flex-col items-center md:items-start relative">
      <p className="h-1 w-1 hidden md:block bg-[#FFBE4E] rounded-full absolute md:-top-[2%]  md:left-[30%]"></p>
        <p className="font-clash text-[24px] text-center md:text-start md:text-5xl md:leading-none ">
          This Is Why We Are Best From Others
        </p>
        <p className="font-satoshi text-[#a1a1a1] w-[90%] text-[8px] text-center md:text-base  mt-4 md:text-start">
          High-Defination Video Is Video of Higher Resolution And Quality Than
          Standard Definition. While There’s No Standard Meaning For High
          Definition, Generally Any Standard Video Image
        </p>
        <img src={image3} className="w-[90%] mt-4" />
      </div>
      <div className="basis-1/2 mt-10 md:pl-10 relative">
        <div className="absolute hidden md:block -top-[15%] right-[52%]">
          <Zig/>
        </div>
        <div className=" flex items-end w-full">
        <div className="h-[40%] w-[50%] md:w-[40%] bg-white p-[3%] rounded-md mr-4">
          <div className="bg-[#4C7FBD] h-8 w-8 flex items-center justify-center">
            <CastConnectedRounded fontSize="small" sx={{color:"white"}}/>
          </div>
          <p className="font-bold text-sm md:text-base mt-3">Experienced Mentors</p>
          <p className="text-xs md:text-[12px] text-[#a1a1a1] mt-3">
            High-Defination Video Is Video of Higher Resolutio And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </div>
        <div className="h-[40%] w-[50%] md:w-[40%] bg-white p-[3%] rounded-md">
          <div className="bg-[#AECD5E] h-8 w-8 flex items-center justify-center">
            <WatchLater fontSize="small" sx={{color:"white"}}/>
          </div>
          <p className="font-bold text-sm md:text-base mt-3">One-on-One Meetings</p>
          <p className="text-xs md:text-[12px] text-[#a1a1a1] mt-3">
            High-Defination Video Is Video of Higher Resolutio And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </div>
        </div>   
        <div className=" flex mt-4">
        <div className="h-[40%] w-[50%] md:w-[40%] bg-white p-[3%] rounded-md mr-4">
          <div className="bg-[#ED6BA6] h-8 w-8 flex items-center justify-center">
            <Groups fontSize="small" sx={{color:"white"}}/>
          </div>
          <p className="font-bold text-sm md:text-base mt-3">One-on-One Meetings</p>
          <p className="text-xs md:text-[12px] text-[#a1a1a1] mt-3">
            High-Defination Video Is Video of Higher Resolutio And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </div>
        <div className="h-[40%] w-[50%] md:w-[40%] bg-white p-[3%] rounded-md">
          <div className="bg-[#EA6B45] h-8 w-8 flex items-center justify-center">
            <LocalAtmTwoTone fontSize="small" sx={{color:"white"}}/>
          </div>
          <p className="font-bold text-sm md:text-base mt-3">Affordable Prices</p>
          <p className="text-xs md:text-[12px] text-[#a1a1a1] mt-3">
            High-Defination Video Is Video of Higher Resolutio And Quality Than
            Standard Definition. While There’s No Standard Meaning For High
            Definition, Generally Any Standard Video Image
          </p>
        </div>
        </div>
      </div>

      <ChangeHistoryOutlined
          sx={{
            rotate: "160deg",
            color: "#00D280",
            position: "absolute",
            bottom: "15%",
            left: "1%",
          }}
          />
        <p className="h-3 w-3 md:h-5 md:w-5 rounded-full absolute bottom-[30%] md:bottom-[10%] right-[2%] border-2 md:border-4 border-[#9143FD]"></p>
    </div>
  );
};

export default Details2;
