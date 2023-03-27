import { AccordionSummary, AccordionDetails } from "@mui/material";
import { AddOutlined, ExpandMore, RemoveOutlined } from "@mui/icons-material";
import { useState } from "react";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { ReactComponent as Left } from "../asset/icon/left.svg";
import { ReactComponent as Zig } from "../asset/icon/zig2.svg";

import { ReactComponent as Right } from "../asset/icon/right.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    "Is there a free trial available?",
    "Can i change my plan later?",
    "Are the courses lifetime?",
    "Do i get certified after taking courses?",
    "How do i reach out to mentors?",
    "Do we get job ready after taking courses?",
  ];

  return (
    <div className="flex flex-col items-center px-2  py-10  bg-white relative">
      <p className="font-clash text-[24px] md:text-[56px] text-center md:w-[70%] ">
        {" "}
        Frequently Asked Questions
      </p>
      <p className="font-satoshi text-[#a1a1a1] w-[90%] md:w-[50%] text-[8px] md:text-base  mt-4 text-center">
        High-Defination Video Is Video of Higher Resolution And Quality Than
        Standard Definition. While There’s No Standard Meaning For High
        Definition, Generally Any Standard Video Image
      </p>
      <div className="md:w-[65%] mt-10 ">
        {questions.map((q, i) => (
          <Accordion
            key={i}
            expanded={expanded === `panel${i + 1}`}
            onChange={(e, isExpanded) =>
              handleChange(isExpanded, `panel${i + 1}`)
            }
            square
            disableGutters
            sx={{ border: "none" }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${i + 1}` ? (
                  <RemoveOutlined />
                ) : (
                  <AddOutlined />
                )
              }
              aria-controls={`panel${i + 1}a-content`}
              id={`panel${i + 1}a-header`}
              sx={{ color: `${expanded === `panel${i + 1}` ? "#004DB3" : ""}` }}
            >
              <p className="font-satoshi font-bold text-[14px] md:text-[24px]">
                {q}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-satoshi text-[#a1a1a1] text-[8px] md:text-base">
                High-Defination Video Is Video of Higher Resolution And Quality
                Than Standard Definition. While There’s No Standard Meaning For
                High Definition, Generally Any Standard Video Image
              </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <p className=" hidden md:block h-2 w-2 bg-[#FFBE4E] rounded-full absolute bottom-[10%] right-[10%]"></p>
      <p className="h-3 w-3 md:h-5 md:w-5 rounded-full absolute top-[2%] right-[4%] md:top-[13%] md:right-[15%] border-2 md:border-4 border-[#9143FD]"></p>
      <div className="absolute md:block top-[25%] md:top-[30%] left-0">
        <Zig />
      </div>
      <div className=" hidden md:block absolute left-0 -bottom-[10%]">
        <Left />
      </div>
      <div className=" hidden md:block absolute right-0 rotate-180">
        <Left />
      </div>
    </div>
  );
};

export default FAQ;
