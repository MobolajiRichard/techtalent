import {
  MenuBookOutlined,
  StarRate,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Card = ({
  image,
  category,
  title,
  ratings,
  time,
  lesson,
  name,
  avatar,
  price,
}) => {
  return (
    <div data-testid="card" className=" bg-white  rounded-lg p-[3%]">
      <img src={image} alt="card" />
      <div className="flex justify-between items-center mt-4">
        <p className="bg-blue-100 text-[#1E5DCE] font-bold text-[10px] md:text-[12px] rounded-xl  px-4 py-1">
          {category}
        </p>
        <div className="text-[#a1a1a1] text-[10px] md:text-base flex items-center">
          <p>4.7k</p>
          <StarRate fontSize="small" sx={{ fontSize: 14, color: "#F6B435" }} />
          <p className="ml-2">({ratings})</p>
        </div>
      </div>
      <p className="font-clash text-xs md:text-xl mt-4 w-[90%]">{title}</p>
      <div className="flex justify-between text-[#a1a1a1] text-sm mt-4">
        <div className="flex">
          <WatchLaterOutlined fontSize="small" />
          <p className="ml-1 text-[10px] md:text-base">{time}</p>
        </div>
        <div className="flex">
          <MenuBookOutlined fontSize="small" />
          <p className="ml-1 text-[10px] md:text-base">{lesson} lessons</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <Avatar src={avatar} sizes="small" />
          <p className="font-bold ml-2 text-[10px] md:text-base">{name}</p>
        </div>
        <p className="font-clash text-[#004DB3] text-[10px] md:text-base">
          &#x24;{price}
        </p>
      </div>
    </div>
  );
};

export default Card;
