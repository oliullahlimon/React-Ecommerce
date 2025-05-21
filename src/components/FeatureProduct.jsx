import { useProductContext } from "../context/productContext";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts, isError } = useProductContext();

  return (
    <section className="main-container">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-6">
          <span className="font-medium uppercase tracking-wide">
            Check Now!
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-8">Our Feature Services</h2>
        </div>
        {isLoading && <div className="text-center py-8">Loading...</div>}
        {isError ? (
          <div className="text-center py-8">Something went wrong...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featureProducts.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureProduct;
