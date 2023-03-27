import Card from "./Card";
import { Grid } from "@mui/material";
import { courseList } from "./courselist";
import { useState, useEffect } from "react";
import { ReactComponent as Cross } from "../../asset/icon/cross.svg";

const Course = () => {
  //creating state to hold the courses array
  const [courses, setCourses] = useState(courseList);

  //state to hold the current category, set to 'all' by default
  const [category, setCategory] = useState("all");

  //useEffect is used to filter the courselist array based on the category
  useEffect(() => {
    if (category === "des") {
      setCourses(
        courseList.filter((a) => a.category.toLowerCase() === "design")
      );
    } else if (category === "mar") {
      setCourses(
        courseList.filter((a) => a.category.toLowerCase() === "marketing")
      );
    } else if (category === "dev") {
      setCourses(
        courseList.filter((a) => a.category.toLowerCase() === "development")
      );
    } else {
      setCourses(courseList);
    }
  }, [category]);

  //function to change category
  const changeCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <div
      data-testid="course"
      id="courses"
      className="flex flex-col items-center font-satoshi bg-[#F8F9FC] overflow-x-clip px-[6%] mt-24 relative"
    >
      <p className="font-clash text-[24px] text-center md:text-start md:text-5xl md:leading-none ">
        Browse Our Popular Courses
      </p>
      <div className="absolute -top-[5%] left-0 md:left-[12%] md:top-[6%]">
        <Cross />
      </div>
      <p className=" text-[#a1a1a1] w-[70%] md:w-[50%] text-[8px] text-center md:text-base  mt-4 ">
        High-Defination Video Is Video of Higher Resolution And Quality Than
        Standard Definition. While There’s No Standard Meaning For High
        Definition, Generally Any Standard Video Image
      </p>
      <div className="md:w-[50%] w-[80%] flex items-center justify-around text-xs md:text-base text-[#a1a1a1] mt-8 mb-8">
        <button
          onClick={() => changeCategory("all")}
          className={`${
            category === "all" && "active_button"
          } hover:text-[#004DB3]`}
        >
          All Categories
        </button>
        <button
          onClick={() => changeCategory("des")}
          className={`${
            category === "des" && "active_button"
          } hover:text-[#004DB3]`}
        >
          Design
        </button>
        <button
          onClick={() => changeCategory("dev")}
          className={`${
            category === "dev" && "active_button"
          } hover:text-[#004DB3]`}
        >
          Development
        </button>
        <button
          onClick={() => changeCategory("mar")}
          className={`${
            category === "mar" && "active_button"
          } hover:text-[#004DB3]`}
        >
          Marketing
        </button>
      </div>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
      >
        {courses.map((c, i) => (
          <Grid key={i} item sm={6} md={4} xs={6}>
            <Card {...c} />
          </Grid>
        ))}
      </Grid>
      <button className="bg-[#004DB3] mt-8 text-white rounded-md px-8 py-4 font-satoshi">
        Explore All Courses
      </button>
    </div>
  );
};

export default Course;
