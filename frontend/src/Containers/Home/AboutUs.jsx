import React from "react";
import { IoIosQuote } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { LuLeaf } from "react-icons/lu";
import { MdBlurLinear } from "react-icons/md";
import ShopGram from "./ShopGram";

const AboutUs = () => {
  return (
    <div>
      <div
        className="w-full h-[100vh] flex justify-center items-center align-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://themesflat.co/html/ecomus/images/slider/about-banner-01.jpg')",
        }}
      >
        <p className="text-2xl md:text-4xl text-center text-white font-semibold lg:text-6xl">
          Empowering women to achieve <br />
          fitness goals with style
        </p>
      </div>
      <div className="container mx-auto px-4 py-7 ">
        <div className="flex w-[100%] flex-col py-5 justify-center">
          <h2 className="py-2 text-3xl text-center font-semibold">
            We are Ecomus
          </h2>
          <div className="text-gray-500 text-xl p-5 flex justify-center text-center py-2 ">
            <p className="w-[50%] md:w-[80%]">
              Welcome to our classic women's clothing store, where we believe
              that timeless style never goes out of fashion. Our collection
              features classic pieces that are both stylish and versatile,
              perfect for building a wardrobe that will last for years.
            </p>
          </div>
        </div>
        <hr className="my-5 text-gray-500" />
        <div className="grid grid-cols-1 py-5 md:grid-cols-2">
          <div className="p-5">
            <img
              src="https://themesflat.co/html/ecomus/images/collections/collection-69.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center p-5 items-center">
            <h2 className="text-2xl py-5">Our mission</h2>
            <p className="py-2 text-gray-500 text-center">
              Our mission is to empower people through sustainable fashion. We
              want everyone to look and feel good, while also doing our part to
              help the environment.We believe that fashion should be stylish,
              affordable and accessible to everyone. Body positivity and
              inclusivity are values that are at the heart of our brand.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center py-5 items-center">
            <h2 className="text-2xl py-5">Established - 1995</h2>
            <p className="py-2 text-gray-500 text-center">
              Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
              passion for timeless style. Jane had always been drawn to classic
              pieces that could be worn season after season, and she believed
              that there was a gap in the market for a store that focused solely
              on classic women's clothing. She opened the first store in a small
              town in New England, where it quickly became a local favorite.
            </p>
          </div>
          <div className="p-5">
            <img
              className="h-full w-full"
              src="https://themesflat.co/html/ecomus/images/collections/collection-70.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="my-5 p-10 bg-pink-100">
          <h2 className="text-center text-3xl py-5">Quality is our priority</h2>
          <p className="text-center text-lg text-gray-600 py-5">
            Our talented stylists have put together outfits that are perfect for
            the season.They've variety of ways to inspire your next
            fashion-forward look.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-5 ">
              <p className="flex justify-center">
                <LuLeaf className="text-5xl" />
              </p>
              <p className="text-center text-2xl font-semibold py-5">
                Various Sizes
              </p>
              <p className="text-center">
                Crafted with precision and excellence, our activewear is
                meticulously engineered using premium materials to ensure
                unmatched comfort and durability.
              </p>
            </div>
            <div className="p-5 ">
              <p className="flex justify-center">
                <IoDiamond className="text-5xl" />
              </p>
              <p className="text-center text-2xl font-semibold py-5">
                Various Sizes
              </p>
              <p className="text-center">
                Crafted with precision and excellence, our activewear is
                meticulously engineered using premium materials to ensure
                unmatched comfort and durability.
              </p>
            </div><div className="p-5 ">
              <p className="flex justify-center">
                <MdBlurLinear className="text-5xl" />
              </p>
              <p className="text-center text-2xl font-semibold py-5">
                Various Sizes
              </p>
              <p className="text-center">
                Crafted with precision and excellence, our activewear is
                meticulously engineered using premium materials to ensure
                unmatched comfort and durability.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center  p-5">
                <h2 className="text-4xl py-2 font-semibold">Our customer’s reviews </h2>
                <IoIosQuote className="text-5xl text-gray-600 py-2" />
                <p className="py-2 text-2xl">"I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is always fast and the customer service team is friendly and helpful. I highly recommend this site to anyone looking for affordable clothing."</p>
            </div>
            <div className="p-5">
                <img src="https://themesflat.co/html/ecomus/images/item/tets3.jpg" alt="" />
            </div>
        </div>
        <ShopGram/>
      </div>
    </div>
  );
};

export default AboutUs;
