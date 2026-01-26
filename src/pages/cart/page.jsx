import { useDispatch, useSelector } from "react-redux";
import { cartIncrement, clearCart } from "../../store/slices/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.addCart)

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrement = (id)=>{
    dispatch(cartIncrement(id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>

          {cartData.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-sm cursor-pointer text-red-500 font-semibold hover:underline"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartData.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is empty 🛒
            </h2>
            <p className="text-gray-500 mt-2">
              Add items to start shopping
            </p>
          </div>
        )}

        {cartData.length > 0 && (
          <>
            <div className="space-y-6">
              {cartData.map((item) => {
                const title = item.title || item.name;
                const subtitle = item.brand || item.cuisine;
                const image = item.thumbnail || item.image;
                const price =
                  Math.floor(item.price) ||
                  item.caloriesPerServing ||
                  0;

                return (
                  <div
                    key={item.id}
                    className="flex gap-4 items-start border-b pb-6"
                  >
                    <img
                      src={image}
                      alt={title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h2 className="font-semibold text-gray-800">
                        {title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {subtitle}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border rounded-lg overflow-hidden">
                          <button className="px-3 py-1 cursor-pointer text-lg bg-gray-100">
                            −
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button onClick={() => handleIncrement(item.id)} className="px-3 cursor-pointer py-1 text-lg bg-gray-100">
                            +
                          </button>
                        </div>

                        <span className="font-bold text-gray-900">
                          ₹{item.quantity*price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-xl space-y-3">
              <div className="flex justify-between text-sm">
                <span>Item Total</span>
                <span>₹2348</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Taxes & Charges</span>
                <span>₹112</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>To Pay</span>
                <span>₹2500</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
