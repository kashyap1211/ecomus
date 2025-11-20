import React from "react";

const ShoptheLook = () => {
  return (
    <div className="container px-4 mx-auto py-7">
      <p className="text-2xl text-center py-2 font-semibold md:text-4xl">
        Shop the look
      </p>
      <p className="text-center py-2">
        Inspire and let yourself be inspired, from one unique fashion to
        another.
      </p>
      <div className="grid py-5 grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src="https://themesflat.co/html/ecomus/images/shop/file/lookbook-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://themesflat.co/html/ecomus/images/shop/file/lookbook-4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ShoptheLook;
