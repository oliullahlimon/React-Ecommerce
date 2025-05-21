import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-orange-500 text-2xl" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-orange-500 text-2xl" />
        ) : (
          <AiOutlineStar className="text-orange-500 text-2xl" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1">
      {ratingStar}
      <p className="ml-3 text-gray-600">({reviews} customer reviews)</p>
    </div>
  );
};

export default Star;
