import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  console.log(imgs);
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Thumbnails */}
      <div className="order-2 md:order-1 flex md:flex-col justify-center gap-2">
        {imgs.map((curElm, index) => (
          <div
            key={index}
            onClick={() => setMainImage(curElm)}
            className={`max-w-24 max-h-24 sm:h-24 sm:w-24 p-1 border-2 rounded-lg transition-all duration-300 ${
              mainImage.url === curElm.url
                ? "border-blue-500 scale-105"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="min-h-[180px] order-1 md:order-2 flex justify-center items-center">
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className="w-full h-full object-contain object-center"
        />
      </div>
    </div>
  );
};

export default MyImage;
