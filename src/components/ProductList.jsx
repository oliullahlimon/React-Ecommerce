import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (filter_products.length < 1) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm text-center">
        <h3 className="text-xl font-medium text-gray-700">
          No products match your search...
        </h3>
      </div>
    );
  }

  return grid_view ? (
    <GridView products={filter_products} />
  ) : (
    <ListView products={filter_products} />
  );
};

export default ProductList;
