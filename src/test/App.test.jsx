import { render, screen, waitFor } from "@testing-library/react";
import Details1 from "../components/Details1";
import Details2 from "../components/Details2";
import Course from "../components/courses/Course";
import LandingPage from "../components/Landing-Page/LandingPage";

//To run test 
//enter npm run test on your terminal

describe("App", () => {
  //Test for the landing page
  test("Landing page component renders correctly", () => {
    render(<LandingPage />);

  //check if the landing page renders 
   const header = screen.getByTestId("landing-page");
   expect(header).toBeInTheDocument()

  //check if it contains the heading text
  const headerText = screen.getByText("Grow your skills to advance your career path");
    expect(headerText).toBeInTheDocument();

  //check if there's two Enroll Now button displayed in the landing page
  expect(screen.getAllByRole("button", { name: "Enroll Now" })).toHaveLength(2);
  });

  //Test for the Details 1 component (component after landing page)
  test("Details 1 component  renders correctly", () => {
   render(<Details1 />);
  
   //check if the component renders
   const details1 = screen.getByTestId("details1");
   expect(details1).toBeInTheDocument()

   //check if the text appears in the component after render
   const detailText = screen.getByText(
      "High quality video, audio & live classes"
    );
    expect(detailText).toBeInTheDocument();

   //check if the view courses button exists and it's only one
   expect(
      screen.getAllByRole("button", { name: "View Courses" })
    ).toHaveLength(1);
  });

  //Test for details 2 component
  test("Details 2 component renders correctly", () => {
  render(<Details2 />);

  //check if the component renders sucessfully
  const details2 = screen.getByTestId("details2");
  expect(details2).toBeInTheDocument()

  //check if the main text appears after rendering
  const detail2Text = screen.getByText("This Is Why We Are Best From Others");
  expect(detail2Text).toBeInTheDocument();
  });

  //Test for the course component
  test("Course component renders correctly", () => {
  render(<Course />);

  //check if the course component renders sucessfully
  const course = screen.getByTestId("course");
  expect(course).toBeInTheDocument()

  //check if the main text appears after rendering
  const courseText = screen.getByText("Browse Our Popular Courses");
  expect(courseText).toBeInTheDocument();

  //check that six card components are displayed on render 
  const cards = screen.getAllByTestId("card");
  expect(cards).toHaveLength(6);
  });
});
