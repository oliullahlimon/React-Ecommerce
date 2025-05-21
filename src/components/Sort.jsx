import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">View:</span>
        <div className="flex gap-2">
          <button
            onClick={setGridView}
            className={`p-2 rounded-lg ${
              grid_view
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BsFillGridFill className="text-xl" />
          </button>
          <button
            onClick={setListView}
            className={`p-2 rounded-lg ${
              !grid_view
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <BsList className="text-xl" />
          </button>
        </div>
      </div>

      <div className="text-gray-600 text-center sm:text-left">
        {filter_products.length} products found
      </div>

      <select
        name="sort"
        id="sort"
        className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        onChange={sorting}
      >
        <option value="lowest">Price (lowest)</option>
        <option value="highest">Price (highest)</option>
        <option value="a-z">Name (A-Z)</option>
        <option value="z-a">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default Sort;
