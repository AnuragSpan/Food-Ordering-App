import ProductByCategory from "./productByCategory/page";
import { useProductCategoryApi } from "../../utils/helpers/useRestaurentApi";
import { useState } from "react";

const Grocery = () => {
  const [viewProducts, setViewProducts] = useState("")
  const [endPoint, setEndPoint] = useState("");
  const groceryList = useProductCategoryApi()

  const handleTagClick = (tags) => {
    setEndPoint(tags)
    setViewProducts((prev)=>prev === tags ? null : tags)
  }
  return (
    <div>
      <h1 className="text-xl font-bold text-center m-4">Shop By Categories🛍️</h1>
      {groceryList.map((tags, indx) => (
        <div key={indx} className="mx-auto w-6/12">
          <div onClick={() => handleTagClick(tags)} className="flex mx-auto w-full justify-between p-4 m-2 shadow-lg font-bold ">
            <span>{tags.charAt(0).toUpperCase() + tags.slice(1)}</span>
            <button>🔻</button>
          </div>
          {viewProducts === tags && <ProductByCategory endPoint={endPoint} />}
        </div>
      ))
      }

    </div>
  );
};

export default Grocery;
