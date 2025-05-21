import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="space-y-6">
      {products.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <div
            key={id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-6">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="md:w-2/3 p-6 md:border-l border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {name}
                </h3>
                <p className="text-lg font-bold text-blue-600 mb-4">
                  ${(price / 100).toFixed(2)}
                </p>
                <p className="text-gray-600 mb-4">
                  {description.slice(0, 150)}...
                </p>
                <NavLink
                  to={`/singleproduct/${id}`}
                  className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
