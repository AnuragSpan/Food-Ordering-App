import { useState } from "react";
import RestaurentCards from "../../components/restaurentCards/page";
import { useRestaurentApi } from "../../utils/helpers/useRestaurentApi";

const SwiggyDelhiRestaurents = () => {
    const [searchText, setSearchText] = useState("");
    const { foodData, searchedData, setFoodData } = useRestaurentApi();

    const handleSearchInput = (e) => {
        setSearchText(e.target.value)
    }

    const DifficultyLevelCards = easyLevelRestaurent(RestaurentCards)


    const searchFood = () => {
        const filteredDatas = searchedData?.filter((filterData) =>
            filterData.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setFoodData(filteredDatas)
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6">
            <div className="flex gap-4">
                <input className="border-2 p-2 rounded-xl" type="text" value={searchText} placeholder="Enter Restaurent Name " onChange={(e) => handleSearchInput(e)} />
                <button onClick={searchFood} className="border-2 rounded-xl p-2">Search</button>
            </div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Restaurants in Delhi
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodData.map((res) => {
                    return <div key={res.id}>
                        {res?.difficulty ? <DifficultyLevelCards res={res} /> : <RestaurentCards res={res} />
                        }<div />
                    </div>
                })}
            </div>
        </div>
    );
};

// Higher Order Component for Food Difficulty Level
const easyLevelRestaurent = (RestaurentCards) => {
    return ({ res }) => {
        return (
            <div>
                <label className="text-white bg-black absolute rounded-lg p-2">{res?.difficulty}</label>
                <RestaurentCards res={res} />
            </div>
        )
    }
}

export default SwiggyDelhiRestaurents;


