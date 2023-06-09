import LandingPage from "./components/Landing-Page/LandingPage";
import Banner from "./components/Banner";
import Details1 from "./components/Details1";
import Details2 from "./components/Details2";
import Course from "./components/courses/Course";
import Testimonies from "./components/testimony/Testimonies";
import Connect from "./components/Connect";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  //all individual components are merged together
  return (
    <div className="w-full box-border overflow-x-hidden bg-[#f8f9fc]">
      <LandingPage />
      <Banner />
      <Details1 />
      <Details2 />
      <Course />
      <Testimonies />
      <Connect />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
