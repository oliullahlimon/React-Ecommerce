import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink
      to={`/singleProduct/${id}`}
      className="group block bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-105"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wide shadow-sm">
          {category}
        </span>
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-blue-600 font-medium">
            ${(price / 10000).toFixed(2)}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
