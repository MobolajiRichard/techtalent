import { MenuOutlined } from "@mui/icons-material"

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-5 w-full">
        <p className="font-amazing text-xl md:text-3xl">TechTime</p>
        <div className="md:flex justify-around basis-1/2 hidden md:visible items-center font-satoshi">
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>Testimonial</p>
            <p>Community</p>
            <button className="bg-white text-[#004DB3] p-3 rounded-[4px]">Enroll Now</button>
        </div>
        <div className="md:hidden">
          <MenuOutlined/>
        </div>
    </div>
  )
}

export default Header