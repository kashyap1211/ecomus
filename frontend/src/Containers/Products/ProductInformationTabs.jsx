import React, { useState } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { GiWashingMachine, GiWaterDrop, GiClothes } from "react-icons/gi";
import { GiIronHulledWarship } from "react-icons/gi";

const ProductInformationTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    "Description",
    "Additional Information",
    "Review",
    "Shipping",
    "Return Policies",
  ];

  return (
    <div className="container mx-auto px-4 py-7">
      <div className="p-4 border border-gray-300 rounded-md">
        {/* --- Tabs Header --- */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-700 font-medium border-b">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 md:pb-4 border-b-2 transition-all duration-200 
                ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent hover:border-black hover:text-black"
                }`}
            >
              {tab}
            </p>
          ))}
        </div>

        {/* --- Tabs Content --- */}
        <div className="mt-6 text-gray-700">
          {/* --- Description Tab --- */}
          {activeTab === "Description" && (
            <div>
              <p className="mb-6">
                Button-up shirt sleeves and a relaxed silhouette. It’s tailored
                with drapey, crinkle–texture fabric that’s made from LENZING™
                ECOVERO™ Viscose — responsibly sourced wood-based fibres
                produced through a process that reduces impact on forests,
                biodiversity and water supply.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3">Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Front button placket</li>
                    <li>Adjustable sleeve tabs</li>
                    <li>Babaton embroidered crest at placket and hem</li>
                  </ul>

                  <h3 className="font-semibold mt-6 mb-3">Materials Care</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                    <li>Care: Hand wash</li>
                    <li>Imported</li>
                  </ul>
                </div>

                {/* Icons Side */}
                <div>
                  <h3 className="font-semibold mb-3">Materials Care</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <GiWashingMachine /> Machine wash max. 30°C. Short spin.
                    </li>
                    <li className="flex items-center gap-3">
                      <GiIronHulledWarship /> Iron maximum 110°C.
                    </li>
                    <li className="flex items-center gap-3">
                      <GiWaterDrop /> Do not bleach.
                    </li>
                    <li className="flex items-center gap-3">
                      <FaCheckCircle /> Do not dry clean.
                    </li>
                    <li className="flex items-center gap-3">
                      <GiClothes /> Tumble dry, medium heat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* --- Additional Information Tab --- */}
          {activeTab === "Additional Information" && (
            <table className="w-full border text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold w-1/3">Color</td>
                  <td className="p-3">White, Pink, Black</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Size</td>
                  <td className="p-3">S, M, L, XL</td>
                </tr>
              </tbody>
            </table>
          )}

          {/* --- Review Tab --- */}
          {activeTab === "Review" && (
            <div>
              {/* Rating Summary */}
              <div className="flex items-center gap-8 mb-6">
                <div className="text-center">
                  <p className="text-5xl font-bold">4.8</p>
                  <div className="flex justify-center text-yellow-500 my-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <p className="text-sm text-gray-500">(168 Ratings)</p>
                </div>

                {/* Rating Bars */}
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((star, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-6">{star} ★</span>
                      <div className="flex-1 bg-gray-200 h-2 rounded">
                        <div
                          className="bg-yellow-400 h-2 rounded"
                          style={{ width: star >= 4 ? "80%" : "10%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-sm text-gray-500">
                        {star === 5 ? 59 : star === 4 ? 46 : 0}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <h3 className="font-semibold text-lg mb-4">03 Comments</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">
                        Superb quality apparel that exceeds expectations
                      </p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Great theme – we were looking for a theme with lots of built-in features
                    and flexibility and this was perfect. Support was swift and helpful.
                  </p>

                  {/* Reply */}
                  <div className="ml-12 mt-3 border-l pl-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      <p className="font-semibold">Reply from Modave</p>
                    </div>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Shipping Tab --- */}
          {activeTab === "Shipping" && (
            <div>
              <h3 className="font-semibold text-xl mb-4">
                The Company Private Limited Policy
              </h3>
              <p className="mb-3 text-gray-600">
                The Company Private Limited and each of their respective
                subsidiary, parent and affiliated companies is deemed to operate
                this Website (“we” or “us”) recognizes that you care how
                information about you is used and shared...
              </p>
              <p className="text-gray-600">
                Please read this Privacy Policy carefully. Your use of the
                Website indicates that you have read and accepted our practices.
              </p>
            </div>
          )}

          {/* --- Return Policies Tab --- */}
          {activeTab === "Return Policies" && (
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-4 text-3xl">
                <GiWashingMachine />
                <GiIronHulledWarship />
                <GiWaterDrop />
                <FaCheckCircle />
                <GiClothes />
              </div>
              <p className="text-gray-600">
                LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900
                Grms/mt
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInformationTabs;
