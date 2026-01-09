import { useEffect, useState } from "react";


export const useRestaurentApi = ()=>{
    const [foodData, setFoodData] = useState([]);
    const[searchedData,setSearchedData] = useState([]);

    useEffect(()=>{
        fetchRestaurentData()
    },[])

const fetchRestaurentData =async()=>{
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
       setFoodData(data?.recipes);
            setSearchedData(data?.recipes)
}
return {foodData,searchedData,setFoodData}
}


export const useRestaurentDetailsApi =(resId)=>{
    const [resDetails, setResDetails] = useState(null);

    useEffect(()=>{
        fetchResDetails()
    },[resId])

    const fetchResDetails = async()=>{
        const res = await fetch("https://dummyjson.com/recipes/" + resId);
        const json = await res.json();
        setResDetails(json);
    }
    return resDetails;
}