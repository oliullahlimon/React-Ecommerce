import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <div className="grid grid-cols-5 gap-4 items-center py-4 border-b border-gray-200">
      {/* Product Image & Name */}
      <div className="flex items-center space-x-4 col-span-2 md:col-span-1">
        <figure className="w-16 h-16 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </figure>
        <div>
          <p className="font-medium text-gray-800 line-clamp-1">{name}</p>
          <div className="flex items-center mt-1">
            <p className="text-sm text-gray-500 mr-2">Color:</p>
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
              title={color}
            />
          </div>
        </div>
      </div>

      {/* Price (hidden on mobile) */}
      <div className="hidden md:block text-center">
        <p className="text-gray-700">${(price / 10000).toFixed(2)}</p>
      </div>

      {/* Quantity Toggle */}
      <div className="flex justify-center">
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrement(id)}
          setIncrease={() => setIncrement(id)}
        />
      </div>

      {/* Subtotal (hidden on mobile) */}
      <div className="hidden md:block text-center">
        <p className="text-gray-700 font-medium">
          ${((price * amount) / 10000).toFixed(2)}
        </p>
      </div>

      {/* Remove Item */}
      <div className="flex justify-center">
        <button
          onClick={() => removeItem(id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <FaTrash className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
