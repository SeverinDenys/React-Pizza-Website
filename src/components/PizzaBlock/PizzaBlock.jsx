import { pizzaData } from "../../../pizzaInfo";
import PizzaItem from "../PizzaItem/PizzaItem";

const PizzaBlock = () => {
  return (
    <>
      {pizzaData.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
};

export default PizzaBlock;