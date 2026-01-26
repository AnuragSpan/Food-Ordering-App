import { Star, Timer } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/slices/cart";
import { toast } from "react-toastify";

const RestaurentCards = ({ res }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store?.cart?.addCart)
  const handleAddToCart = (items) => {
    const cartProducts = cartItems?.some((item) => item.id === items.id)
    if (!cartProducts) {
      toast.success("Item added to Cart ✅")
      dispatch(addToCart(res));
      navigate("/cart");
    } else {
      toast.info("Item already in Cart !")
    }
  };

  const goToDetails = () => {
    navigate(`/res-details/${res.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">

      <div onClick={goToDetails} className="cursor-pointer">
        <img
          src={res.image}
          alt={res.name}
          className="h-48 w-full object-cover"
        />

        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">
            {res.name}
          </h2>

          <p className="text-sm text-gray-500">
            {res.cuisine}
          </p>

          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md flex items-center gap-1">
              <Star size={14} /> {res.rating}
            </span>

            <span className="text-sm text-gray-600 flex items-center gap-1">
              <Timer size={14} /> {res.prepTimeMinutes} mins
            </span>
          </div>

          <div className="mt-3">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Ingredients:
            </p>
            <ul className="text-xs text-gray-600 list-disc list-inside line-clamp-3">
              {res.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(res)}
        className="w-full mt-4 cursor-pointer bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Add to cart
      </button>
    </div>
  );
};

export default RestaurentCards;
