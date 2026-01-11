import { Star, Timer } from 'lucide-react';

const RestaurentCards = ({res}) => {
  return (
 <div
            key={res.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={res.image}
              alt={res.name}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {res.name}
              </h2>

              <p className="text-sm text-gray-500">
                {res.cuisine}
              </p>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md">
                  <Star /> {res.rating}
                </span>

                <span className="text-sm text-gray-600">
                  <Timer /> {res.prepTimeMinutes} mins
                </span>
              </div>

              {/* Ingredients */}
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

              {/* CTA */}
              <button className="w-full mt-4 cursor-pointer bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                View Details
              </button>
            </div>
          </div>  )
}



export default RestaurentCards;