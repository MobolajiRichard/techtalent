import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimony from "./Testimony";
import avatar3 from "../../asset/image/tutor_three.png";
import avatar1 from "../../asset/image/tutor_six.png";
import avatar2 from "../../asset/image/tutor_five.png";
import avatar4 from "../../asset/image/tutor_four.png";

const Testimonies = () => {
  //setting for the carousel, gotten from the docs
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //array to create four testimonies instead of manually writing it out
  const client = [
    {
      name: "Mobolaji Richard",
      avatar: avatar1,
    },
    {
      name: "Samuel Fortune",
      avatar: avatar2,
    },
    {
      name: "Bella Moon",
      avatar: avatar3,
    },
    {
      name: "Bryce Jason",
      avatar: avatar4,
    },
  ];
  return (
    <div
      id="testimony"
      className="flex flex-col bg-[#F8F9FC] px-6 w-full mt-24"
    >
      <p className="font-clash text-[24px] self-center text-center md:text-start md:text-5xl md:leading-none ">
        What Our Clients Are Saying
      </p>
      <p className="self-center text-[#a1a1a1] w-[70%] md:w-[50%] text-[8px] text-center md:text-base  mt-4 mb-10">
        High-Defination Video Is Video of Higher Resolution And Quality Than
        Standard Definition. While There’s No Standard Meaning For High
        Definition, Generally Any Standard Video Image
      </p>
      <Slider adaptiveHeight={false} {...settings}>
        {client.map((c, i) => (
          <Testimony key={i} {...c} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonies;
