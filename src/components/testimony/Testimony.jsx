import { Avatar } from "@mui/material";
const Testimony = ({ name, avatar }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl w-full">
      <p className="text-[#a1a1a1] text-[8px] md:text-[14px] mb-4">
        High-defination video is video of higher resolution and quality than
        standard definition. high-defination video is video of higher resolution
        and quality than standard definition. hbuild your future with our
        quality education. the best and largest all-in-one online tutoring
        platform in the worldd definition. high-defination video is video of
        higher resolution and quality than standard definition. the best and
        largest all-in-one online tutoring platform in the worldd
      </p>
      <div className="flex">
        <Avatar src={avatar} fontSize="small" />
        <div className="flex text-sm flex-col  ml-1">
          <p className="font-bold text-[14px]">{name}</p>
          <p className="text-[#a1a1a1] text-xs">Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
