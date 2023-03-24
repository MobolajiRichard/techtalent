
const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <p className="font-amazing text-3xl">TechTime</p>
        <div className="flex justify-around basis-1/2 items-center font-satoshi">
            <p>Home</p>
            <p>About Us</p>
            <p>Courses</p>
            <p>Testimonial</p>
            <p>Community</p>
            <button className="bg-white text-[#004DB3] p-3  rounded-[4px]">Enroll Now</button>
        </div>
    </div>
  )
}

export default Header