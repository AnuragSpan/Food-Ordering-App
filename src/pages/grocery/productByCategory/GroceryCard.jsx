import React from 'react'
import { ShoppingCart, Star } from "lucide-react";

const GroceryCard = ({grocery}) => {
    
  return (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {grocery.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
                    >
                        {/* Image */}
                        <div className="h-44 bg-gray-100 flex items-center justify-center">
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="h-full object-contain group-hover:scale-105 transition"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-2">
                            <p className="text-xs uppercase tracking-wide text-gray-400">
                                {item.brand}
                            </p>

                            <h3 className="font-semibold text-gray-800 line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 line-clamp-2">
                                {item.description}
                            </p>

                            {/* Price & Rating */}
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-lg font-bold text-gray-900">
                                    ₹{Math.round(item.price * 100)}
                                </span>

                                <span className="flex items-center gap-1 text-sm text-green-600">
                                    <Star size={14} className="fill-green-600" />
                                    {item.rating}
                                </span>
                            </div>

                            {/* Add to cart */}
                            <button className="mt-3 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
)
}

export default GroceryCard