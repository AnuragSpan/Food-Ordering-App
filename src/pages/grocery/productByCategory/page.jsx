import GroceryCard from "./GroceryCard";
import { useGroceryByCategoryApi } from "../../../utils/helpers/useRestaurentApi";

const ProductByCategory = ({ endPoint }) => {

    const grocData = useGroceryByCategoryApi(endPoint)
        console.log("endpoint in page",endPoint)

    console.log("grocery",grocData)
    // const [grocery, setGrocery] = useState([]);
   
    // useEffect(() => {
    //     const groceryDatas = async () => {
    //         const res = await fetch(
    //             `https://dummyjson.com/products/category/${endPoint}`
    //         );
    //         const json = await res.json();
    //         console.log("json",json)
    //         setGrocery(json?.products || []);
    //     };

    //     groceryDatas();
    // }, [endPoint]);
    return (
        <div className="bg-gray-50 p-4 rounded-xl">
         <GroceryCard  grocery={grocData}/>
        </div>
    );
    
};



export default ProductByCategory;
