import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="text-center main-container">
      <div>
        <h2 className="text-[7rem] md:text-[10rem] leading-none font-bold text-gray-800">
          404
        </h2>
        <h3 className="text-[3rem] md:text-[4rem] mt-4 mb-6 text-gray-700">
          UH OH! You're lost.
        </h3>
        <p className="my-8 text-lg text-gray-600 max-w-2xl mx-auto">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>

        <NavLink
          to="/"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back to Home
        </NavLink>
      </div>
    </section>
  );
};

export default Error;
