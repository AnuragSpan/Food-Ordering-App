import { useNavigate, useParams } from "react-router-dom";
import { CircleArrowLeft, Star, Timer, Utensils } from 'lucide-react';
import { useRestaurentDetailsApi } from "../../../utils/constants/helpers/useRestaurentApi";


const RestaurentDetails = () => {
    const { resId } = useParams();
    const navigate = useNavigate()

    const resDetails = useRestaurentDetailsApi(resId);

    const handleBack = () => navigate(-1)

    if (!resDetails) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-xl font-semibold animate-pulse">
                    Loading restaurant details...
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <CircleArrowLeft onClick={handleBack} className="mb-4 cursor-pointer" />
            <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Image */}
                <img
                    src={resDetails.image}
                    alt="Restaurant"
                    className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {resDetails.name}
                    </h1>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-gray-100 rounded-full">
                            <Utensils /> {resDetails.cuisine}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full">
                            <Timer /> {resDetails.prepTimeMinutes} Minutes
                        </span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full">
                            <Star /> {resDetails.rating}
                        </span>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Ingredients
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            {resDetails.ingredients.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-50 px-4 py-2 rounded-lg border"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurentDetails;
