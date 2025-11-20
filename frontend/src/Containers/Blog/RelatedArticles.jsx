import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelatedArticles = () => {
  const relatedarticles = [
    {
      image: "https://themesflat.co/html/ecomus/images/blog/blog-1.jpg",
      title: "Pop-punk is back in fashion",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/blog/blog-2.jpg",
      title: "The next generation of leather alternatives",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/blog/blog-3.jpg",
      title: "An Exclusive Clothing Collaboration",
    },
    {
      image: "https://themesflat.co/html/ecomus/images/blog/blog-4.jpg",
      title: "The next generation of leather alternatives",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-2xl font-semibold mb-5 text-center">Related Articles</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {relatedarticles.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" py-2 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="cursor-pointer mt-2">Read More →</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedArticles;
