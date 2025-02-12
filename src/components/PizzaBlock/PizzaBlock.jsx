/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import Skeleton from "../Skelleton/Skeleton";

const PizzaBlock = ({ value, selectedSortType }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        // Base URL
        let url = "https://67a21092409de5ed52542862.mockapi.io/items";

        // Add category filter if value is not 0
        const categoryParam = value !== 0 ? `category=${value}` : "";

        // Add sorting parameters
        const sortParam = selectedSortType
          ? `sortBy=${selectedSortType.sortProperty}&order=${selectedSortType.order}`
          : "";

        // Combine parameters
        const params = [categoryParam, sortParam]
          .filter((param) => param) // Remove empty strings
          .join("&");

        // Construct final URL
        const finalUrl = params ? `${url}?${params}` : url;

        const response = await fetch(finalUrl);
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }

        const result = await response.json();
        setItems(result);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };

    fetchedData();
  }, [value, selectedSortType]);

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
