import { useEffect, useState } from "react";

const ProductByCategory = ({endPoint}) => {

    useEffect(() => {
        const groceryDatas = async () => {
            const res = await fetch(
                `https://dummyjson.com/products/category/${endPoint}`
            );
            const json = await res.json();
            console.log("Products:", json.products);
        };
        groceryDatas();
    }, [endPoint]);
    return (
        <div>productByCategory</div>
    )
}

export default ProductByCategory