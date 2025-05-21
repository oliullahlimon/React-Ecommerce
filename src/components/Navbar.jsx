import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cartContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { total_item } = useCartContext();

  return (
    <div className="header-section h-[132px] sm:h-[144px] sticky top-0 left-0 z-10">
      <div className="nav-container">
        <nav className="nav-section container mx-auto">
          <div className="text-2xl font-serif font-semibold text-blue-600">
            <NavLink to="/">OLIULLAH SHOP</NavLink>
          </div>
          <ul className="nav-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link cart-trolley-link">
                <GiShoppingCart className="cart-trolley" />
                <span className="cart-total-item"> {total_item} </span>
              </NavLink>
            </li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`sidebar-menu ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-50"
        }`}
      >
        <div className="p-4 text-right">
          <button onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <ul onClick={toggleSidebar} className="sidebar-menu-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-link cart-trolley-link">
              <GiShoppingCart className="cart-trolley" />
              <span className="cart-total-item"> {total_item} </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
