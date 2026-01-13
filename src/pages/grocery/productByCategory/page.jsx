import GroceryCard from "./GroceryCard";
import { useGroceryByCategoryApi } from "../../../utils/helpers/useRestaurentApi";

const ProductByCategory = ({ endPoint }) => {

    const grocData = useGroceryByCategoryApi(endPoint)

    return (
        <div className="bg-gray-50 p-4 rounded-xl">
            <GroceryCard grocery={grocData} />
        </div>
    );

};



export default ProductByCategory;
