import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      <div className="flex items-center">
        <span className="mr-2 font-medium">Color:</span>
        <div className="flex items-center space-x-2">
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={`w-8 h-8 rounded-full ml-2 border border-gray-300 flex items-center justify-center ${
                color === curColor
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-75"
              }`}
              onClick={() => setColor(curColor)}
              aria-label={`Select ${curColor} color`}
            >
              {color === curColor && <FaCheck className="text-white text-xs" />}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Quantity:</h3>
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setAmount(Math.max(1, amount - 1))}
          setIncrease={() => setAmount(Math.min(stock, amount + 1))}
        />
      </div>

      {/* Add to Cart Button */}
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <button className="button flex items-center gap-2 mt-4">
          <FaCartShopping className="w-6 h-6" />
          Add to Cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
