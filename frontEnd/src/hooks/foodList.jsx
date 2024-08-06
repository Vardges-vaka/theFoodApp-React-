import React, { useState, useEffect } from "react";

function useFoodlist (){
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
let fetchFoodList= async () => {
    try {
        const response = await fetch("http://localhost:4000/api/food/list");
        const data = await response.json();
        setData(data.data);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        console.error("error");
    }
};
useEffect(() => {
    fetchFoodList();
}, []);

return [data, isLoading ] ;
}



export default useFoodlist;