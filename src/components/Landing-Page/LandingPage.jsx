import Header from "./Header";
import Main from "../../asset/image/Main";
import zig from "../../asset/image/zig.png";

const LandingPage = () => {
  return (
    <div
      data-testid="landing-page"
      id="home"
      className="bg-[#004DB3] text-white w-full px-6 md:px-14 pt-6 min-h-screen flex flex-col box-border relative"
    >
      <Header />
      <img
        alt="zig"
        src={zig}
        className="absolute left-0 top-[45%] md:top-[60%]  h-[15px] w-[30px]"
      />
      <Main />
    </div>
  );
};

export default LandingPage;
