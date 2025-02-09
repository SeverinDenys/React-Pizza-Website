import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import Skeleton from "../Skelleton/Skeleton";

const PizzaBlock = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("https://67a21092409de5ed52542862.mockapi.io/items");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setItems(result);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchedData();
  }, []);

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
