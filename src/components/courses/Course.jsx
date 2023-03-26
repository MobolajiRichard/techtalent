import Card from "./Card";
import { Grid } from "@mui/material";
import { courseList } from "./courselist";
import { useState, useEffect } from "react";

const Course = () => {
    const [courses, setCourses] = useState(courseList)
    const [category, setCategory] = useState('all')

    useEffect(()=>{
        if(category === 'des'){
            setCourses(courseList.filter(a => a.category.toLowerCase() === 'design'))
        }else if(category === 'mar'){
            setCourses(courseList.filter(a => a.category.toLowerCase() === 'marketing'))
        }else if (category === 'dev'){
            setCourses(courseList.filter(a => a.category.toLowerCase() === 'development'))
        }else{
            setCourses(courseList)
        }
    }, [category])

    const changeCategory = (cat) => {
        setCategory(cat)
    }
  return (
    <div className="flex flex-col items-center font-satoshi bg-[#F8F9FC] overflow-x-clip px-6 ">
      <p className="font-clash text-[24px] text-center md:text-start md:text-5xl md:leading-none ">
        Browse Our Popular Courses
      </p>
      <p className=" text-[#a1a1a1] w-[70%] md:w-[50%] text-[8px] text-center md:text-base  mt-4 ">
        High-Defination Video Is Video of Higher Resolution And Quality Than
        Standard Definition. While There’s No Standard Meaning For High
        Definition, Generally Any Standard Video Image
      </p>
      <div className="md:w-[50%] w-[80%] flex items-center justify-around text-xs md:text-base text-[#a1a1a1] mt-8 mb-8">
        <button onClick={() => changeCategory('all')} className={category === "all" && "active_button"}>
          All Categories
        </button>
        <button onClick={() => changeCategory('des')} className={category === "des" && "active_button"}>Design</button>
        <button onClick={() => changeCategory('dev')} className={category === "dev" && "active_button"}>Development</button>
        <button onClick={() => changeCategory('mar')} className={category === "mar" && "active_button"}>Marketing</button>
      </div>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
        // columns={{ xs: 6, sm:6, md: 4, }}
      >
        {courses.map((c, i) => (
          <Grid key={i} item sm={6} md={4} xs={6}>
            <Card {...c}/>
          </Grid>
        ))}
      </Grid>
      <button className='bg-[#004DB3] mt-8 text-white rounded-md px-8 py-4 font-satoshi'>Explore All Courses</button>
    </div>
  );
};

export default Course;
