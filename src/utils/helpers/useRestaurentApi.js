import { useEffect, useState } from "react";


export const useRestaurentApi = () => {
    const [foodData, setFoodData] = useState([]);
    const [searchedData, setSearchedData] = useState([]);
    console.log("foodData", foodData)
    useEffect(() => {
        fetchRestaurentData()
    }, [])

    const fetchRestaurentData = async () => {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setFoodData(data?.recipes);
        setSearchedData(data?.recipes)
    }
    return { foodData, searchedData, setFoodData }
}


export const useRestaurentDetailsApi = (resId) => {
    const [resDetails, setResDetails] = useState(null);
    console.log("resDetails", resDetails)
    useEffect(() => {
        fetchResDetails()
    }, [resId])

    const fetchResDetails = async () => {
        const res = await fetch("https://dummyjson.com/recipes/" + resId);
        const json = await res.json();
        setResDetails(json);
    }
    return resDetails;
}

// Product Category List

export const useProductCategoryApi = () => {
    const [groceries, setGroceries] = useState([]);
    useEffect(() => {
        groceryData();
    }, []);
    const groceryData = async () => {
        const res = await fetch("https://dummyjson.com/products/category-list");
        const json = await res.json();
        setGroceries(json);
    }
    return groceries
}

// Grocery Api

export const useGroceryByCategoryApi = (endPoint)=>{
    const [grocData,setGrocData] = useState([])

    useEffect(()=>{
        fetchGrocByCategoryData()
    },[endPoint])
    const fetchGrocByCategoryData = async()=>{
        const res = await fetch(`https://dummyjson.com/products/category/${endPoint}`)
        const data = await res.json()
        setGrocData(data?.products)
    }
    return grocData;
}