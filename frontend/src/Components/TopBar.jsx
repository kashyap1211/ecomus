import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaSortDown } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="hidden md:block border-b border-gray-300">
      <div className="container mx-auto px-4 my-2">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <FaFacebook className="text-2xl" />
            <FaSquareXTwitter className="text-2xl" />
            <FaSquareInstagram className="text-2xl" />
            <AiFillTikTok className="text-2xl" />
          </div>
          <div>
            <p>Summer Sale Discount 70%</p>
          </div>
          <div className="flex gap-5">
            <p className="flex gap-2">
              USD <FaSortDown />
            </p>
            <p className="flex gap-2">
              English <FaSortDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
