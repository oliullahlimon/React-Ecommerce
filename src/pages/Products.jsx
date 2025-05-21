import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        {/* Filters Section */}
        <div className="md:sticky md:top-4 md:h-[calc(100vh-32px)] md:overflow-y-auto">
          <FilterSection />
        </div>

        {/* Products List Section */}
        <section className="space-y-8">
          <Sort />
          <ProductList />
        </section>
      </div>
    </section>
  );
};

export default Products;
