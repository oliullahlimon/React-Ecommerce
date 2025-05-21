import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg p-2 w-fit">
      <button
        onClick={setDecrease}
        className="p-3 rounded-md bg-white hover:bg-gray-100 transition-colors shadow-sm"
      >
        <FaMinus className="text-gray-700 w-3 h-3" />
      </button>

      <span className="text-xl font-bold text-gray-800 mx-6 min-w-[2rem] text-center">
        {amount}
      </span>

      <button
        onClick={setIncrease}
        className="p-3 rounded-md bg-white hover:bg-gray-100 transition-colors shadow-sm"
      >
        <FaPlus className="text-gray-700 w-3 h-3" />
      </button>
    </div>
  );
};

export default CartAmountToggle;
