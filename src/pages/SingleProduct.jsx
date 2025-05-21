import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isLoadingSingle, singleProduct } =
    useProductContext();
  const { id } = useParams();
  console.log(id);

  const {
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isLoadingSingle) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <section className="max-w-6xl main-container">
      <PageNavigation title={name} />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <MyImage imgs={image} />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-bold">{name}</h2>
          <Star stars={stars} reviews={reviews} />

          <div className="space-y-4">
            <p className="text-xl font-bold">
              MRP: $<del className="text-gray-500">{price / 1000 + 100} </del>
            </p>
            <p className="text-xl font-bold text-blue-600">
              Deal of the Day: ${price / 1000}
            </p>
          </div>

          <p className="text-gray-600">{description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-b">
            {warrantyData.map((item, index) => (
              <div key={index} className="flex flex-col  gap-2">
                {item.icon}
                <p className="text-sm ">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-lg">
            <p>
              Available:{" "}
              <span className="font-semibold">
                {stock > 0 ? "In Stock" : "Not Available"}
              </span>
            </p>

            <p>
              Brand : <span className="font-semibold">{company}</span>
            </p>
          </div>
          <hr />
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </section>
  );
};

const warrantyData = [
  {
    icon: (
      <TbTruckDelivery className="w-16 h-16 p-4 bg-gray-100 rounded-full" />
    ),
    text: "Free Delivery",
  },
  {
    icon: <TbReplace className="w-16 h-16 p-4 bg-gray-100 rounded-full" />,
    text: "30 Days Replacement",
  },
  {
    icon: (
      <TbTruckDelivery className="w-16 h-16 p-4 bg-gray-100 rounded-full" />
    ),
    text: "Oliullah Delivered",
  },
  {
    icon: <MdSecurity className="w-16 h-16 p-4 bg-gray-100 rounded-full" />,
    text: "2 Year Warranty",
  },
];

export default SingleProduct;
