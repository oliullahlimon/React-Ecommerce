import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <div className="text-2xl text-center md:text-3xl font-semibold mb-14">
      <NavLink to="/" className="hover:text-blue-600 transition-colors">
        Home
      </NavLink>
      <span className="mx-2">/</span>
      {title}
    </div>
  );
};

export default PageNavigation;
