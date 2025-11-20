import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { path } from "../../constant";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const categories = [
    {
      image: "https://themesflat.co/html/ecomus/images/collections/collection-17.jpg",
      name: "Clothing",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/collections/collection-14.jpg",
      name: "Sunglasses",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/collections/collection-18.jpg",
      name: "Bags",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/collections/collection-15.jpg",
      name: "Fashion",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/collections/collection-20.jpg",
      name: "Accessories",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header with custom arrows */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold">Shop By Categories</p>
        <div className="flex gap-3 text-2xl">
          {/* ✅ Custom navigation buttons */}
          <FaChevronCircleLeft
            ref={prevRef}
            className="cursor-pointer text-gray-700 hover:text-black"
          />
          <FaChevronCircleRight
            ref={nextRef}
            className="cursor-pointer text-gray-700 hover:text-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left side: Slider */}
        <div className="col-span-3">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            onInit={(swiper) => {
              // ✅ Assign refs once swiper is ready
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center rounded-lg hover:shadow-lg transition bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full object-cover rounded-md"
                  />
                  <p className="mt-2 font-medium">{item.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right side: Single Box */}
        <div className="col-span-1 flex items-center justify-center border rounded-lg p-6 text-center">
          <div>
            <p className="text-lg font-semibold">Discover all new items</p>
            <FiArrowUpRight  onClick={(()=>navigate(path.collections))} className="mt-5 hover:bg-black hover:text-white  cursor-pointer text-3xl border rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
