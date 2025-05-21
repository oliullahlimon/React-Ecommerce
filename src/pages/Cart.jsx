import { useCartContext } from "../context/cartContext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="grid place-items-center h-[50vh]">
        <h3 className="text-4xl font-light capitalize">No Items in Cart</h3>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cart Header */}
        <div className="grid grid-cols-5 text-center items-center mb-4">
          <p className="font-medium">Item</p>
          <p className="hidden md:block">Price</p>
          <p className="font-medium">Quantity</p>
          <p className="hidden md:block">Subtotal</p>
          <p className="font-medium">Remove</p>
        </div>
        <hr className="my-4" />

        {/* Cart Items */}
        <div className="space-y-8 py-8">
          {cart.map((curElem) => (
            <CartItem key={curElem.id} {...curElem} />
          ))}
        </div>
        <hr className="my-4" />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
          <NavLink to="/products">
            <button className="w-full md:w-auto button">
              Continue Shopping
            </button>
          </NavLink>
          <button
            className="bg-red-500 hover:bg-red-600 w-full md:w-auto button"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Order Total */}
        <div className="w-full mt-12">
          <div className="border border-gray-200 p-8 max-w-md ml-auto space-y-6">
            <div className="flex justify-between">
              <p className="font-medium">Subtotal:</p>
              <p>${(total_price / 10000).toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Shipping Fee:</p>
              <p>${(shipping_fee / 10000).toFixed(2)}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between bg-gray-50 p-2">
              <p className="font-bold">Order Total:</p>
              <p className="font-bold text-gray-800">
                ${((shipping_fee + total_price) / 10000).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
