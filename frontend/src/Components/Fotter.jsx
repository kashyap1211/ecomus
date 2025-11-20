import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { path } from "../constant";
import { useNavigate } from "react-router-dom";

const Fotter = () => {

  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b py-5 border-gray-500">
        <div>
          <p className="font-serif text-3xl py-2"> ecomus </p>
          <p className="py-3">
            Address: 1234 Fashion Street, Suite 567, New York, NY 10001
          </p>
          <p className="py-3">Email: info@fashionshop.com</p>
          <p className="py-3">Phone: (212) 555-1234</p>
          <p className="py-1">Get direction</p>
          <div className="flex gap-5">
            <FaFacebook className="text-2xl" />
            <FaSquareXTwitter className="text-2xl" />
            <FaSquareInstagram className="text-2xl" />
            <AiFillTikTok className="text-2xl" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold py-3">Help</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">Privacy Policy</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py- cursor-pointer hover:font-semibold">Returns + Exchanges</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">Shipping</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">Terms & Conditions</p>
          <p onClick={(()=>navigate(path.faqs))}className="py-1 cursor-pointer hover:font-semibold">FAQ’s</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">Compare</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">My Wishlist</p>
        </div>
        <div>
          <p className="text-2xl font-semibold py-3">About us</p>
          <p onClick={(()=>navigate(path.aboutus))} className="py-1 cursor-pointer hover:font-semibold">Our Story</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">Visit Our Store</p>
          <p onClick={(()=>navigate(path.contact))} className="py-1 cursor-pointer hover:font-semibold">Contact Us</p>
          <p onClick={(()=>navigate(path.pagenotfound))} className="py-1 cursor-pointer hover:font-semibold">Account</p>
        </div>
        <div>
          <p className="text-2xl font-semibold py-3">Sign Up for Email</p>
          <p className="py-1">Sign up to get first dibs on new arrivals,</p>
          <p className="py-1">sales, exclusive content, events and more!</p>
          <div className="border border-gray-500 px-3 py-1 my-2">
            <input type="text" placeholder="Enter Your E-Mail..." />
            <button className="px-3 py-1 bg-black text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <p className="text-gray-700 py-2">
            © 2025 Ecomus Store. All Rights Reserved
          </p>
        </div>
        <div className="flex justify-end gap-3 py-2">
          <img
            src="https://themesflat.co/html/ecomus/images/payments/visa.png"
            alt=""
          />
          <img
            src="https://themesflat.co/html/ecomus/images/payments/img-1.png"
            alt=""
          />
          <img
            src="https://themesflat.co/html/ecomus/images/payments/img-2.png"
            alt=""
          />
          <img
            src="https://themesflat.co/html/ecomus/images/payments/img-3.png"
            alt=""
          />
          <img
            src="https://themesflat.co/html/ecomus/images/payments/img-4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Fotter;
