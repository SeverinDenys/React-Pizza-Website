/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import Skeleton from "../Skelleton/Skeleton";

const PizzaBlock = ({value}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const url = value === 0 
        ? "https://67a21092409de5ed52542862.mockapi.io/items" // Fetch all when category is 0
        : `https://67a21092409de5ed52542862.mockapi.io/items?category=${value}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setItems(result);
        setIsLoading(false);
        window.scrollTo(0, 0); //when first time render scroll to top of page
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchedData();
  }, [value]);

  return (
    <>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)}
      </div>
    </>
  );
};

export default PizzaBlock;
