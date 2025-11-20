import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaChevronDown } from "react-icons/fa";
const Faqs = () => {

  const accordion =[
    {
      heading:"Shopping Information",
      title:"Pellentesque habitant morbi tristique senectus et netus?",
      para:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
      title2:"How much is shipping and how long will it take?",
      para2:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title3:"How long will it take to get my package?",
      para3:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
      title4:"Branding is simply a more efficient way to sell things?",
      para4:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    },
    {
      heading:"Payment Information",
      title:"Pellentesque habitant morbi tristique senectus et netus?",
      para:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
      title2:"How much is shipping and how long will it take?",
      para2:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title3:"How long will it take to get my package?",
      para3:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
      title4:"Branding is simply a more efficient way to sell things?",
      para4:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    },{
      heading:"Order Returns",
      title:"Pellentesque habitant morbi tristique senectus et netus?",
      para:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
      title2:"How much is shipping and how long will it take?",
      para2:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      title3:"How long will it take to get my package?",
      para3:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
      title4:"Branding is simply a more efficient way to sell things?",
      para4:"The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    },
  ]
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-50 via-red-50 to-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-black mb-2">Faqs</h2>
      </div>
      <div className="container mx-auto px-4 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="col-span-2">
            <div>
              {accordion.map((item, index) => (
                <div key={index}>
                  <h2 className="text-2xl py-5 font-semibold">{item.heading}</h2>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.para}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">
                        {item.title2}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.para2}
                      </Typography>
                    </AccordionDetails>
                  </Accordion><Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">
                        {item.title3}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.para3}
                      </Typography>
                    </AccordionDetails>
                  </Accordion><Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography component="span">
                        {item.title4}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.para4}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 bg-gray-100 h-[50%]">
              <div className="p-5">
                <h2 className="text-2xl py-5 font-semibold">Have a question</h2>
                <p className="py-5">If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.</p>
                
                <p className="py-5">Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued</p>
                <button className="bg-black px-5 py-2 text-white rounded-2xl">Contact Us</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
