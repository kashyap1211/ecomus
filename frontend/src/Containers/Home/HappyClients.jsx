
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchClients } from "../../api/clientApi";
import { fetchBrands } from "../../api/brandApi";

const HappyClients = () => {
  const { data: clients = [], isLoading: loadingClients } = useQuery({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });

  const { data: brands = [], isLoading: loadingBrands } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  if (loadingClients || loadingBrands) return <p>Loading...</p>;

  return (
    <div className="container px-4 mx-auto py-10 relative">
      <p className="text-2xl text-center py-2 font-semibold md:text-4xl">
        Happy Clients
      </p>
      <p className="text-center py-2 mb-5">Hear what they say about us</p>

      {/* Custom Buttons */}
      <div className="absolute top-2/4 -left-7 z-10">
        <button className="swiper-button-prev">
          <FaArrowLeft className="text-white" />
        </button>
      </div>
      <div className="absolute top-2/4 -right-7 z-10">
        <button className="swiper-button-next">
          <FaArrowRight className="text-white" />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-6"
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-200 rounded-xl shadow-sm p-6 bg-white hover:shadow-lg transition">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <BsStarFill key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="font-semibold text-lg mb-2">{item.title}</p>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm mb-4">{item.location}</p>
              <hr className="my-4 text-gray-300" />
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.productname} className="w-14 h-14 rounded-lg object-cover" />
                <div>
                  <p className="text-sm">{item.productname}</p>
                  <p className="font-semibold">{item.price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Brand Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-5">
        {brands.map((item, index) => (
          <div key={index}>
            <img src={item.image} className="border border-gray-500 p-2" alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
