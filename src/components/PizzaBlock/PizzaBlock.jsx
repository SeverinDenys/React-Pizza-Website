import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/PizzaItem";

const PizzaBlock = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("https://67a21092409de5ed52542862.mockapi.io/items");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setItems(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchedData();
  }, []);
 
  return (
    <>
      {items.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
};

export default PizzaBlock;
