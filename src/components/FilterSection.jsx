import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, company, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);
    if (attr === "colors") newVal = newVal.flat();
    return ["all", ...new Set(newVal)];
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <div className="bg-white p-6 space-y-8">
      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <input
          type="text"
          name="text"
          placeholder="Search products..."
          value={text}
          onChange={updateFilterValue}
          className="w-full p-3 border border-gray-300 rounded-lg "
        />
      </div>

      {/* Category */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Category</h3>
        <div className="space-y-2">
          {categoryData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              className={`w-full capitalize text-left px-4 py-2 rounded-lg transition-colors ${
                category === curElem
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-50"
              }`}
              onClick={updateFilterValue}
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>

      {/* Company */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <select
          name="company"
          value={company}
          className="w-full p-3 border border-gray-300 rounded-lg capitalize"
          onChange={updateFilterValue}
        >
          {companyData.map((curElem, index) => (
            <option key={index} value={curElem} name="company">
              {curElem}
            </option>
          ))}
        </select>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Colors</h3>
        <div className="flex flex-wrap items-center gap-2">
          {colorsData.map((curColor, index) =>
            curColor === "all" ? (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                className={`px-3 py-1 rounded-full text-sm ${
                  color === curColor
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={updateFilterValue}
              >
                All
              </button>
            ) : (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={`w-8 h-8 rounded-full border-2 ${
                  color === curColor ? "border-blue-500" : "border-gray-200"
                } flex items-center justify-center`}
                onClick={updateFilterValue}
              >
                {color === curColor && (
                  <FaCheck className="text-white text-xs" />
                )}
              </button>
            )
          )}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price</h3>
        <div className="space-y-4">
          <output className="block text-lg font-medium text-blue-600">
            ${(price / 10000).toFixed(2)}
          </output>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
            className="w-full range-slider"
          />
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="w-full py-3 px-6 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSection;
