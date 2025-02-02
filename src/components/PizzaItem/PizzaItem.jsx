/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";
import { useState } from "react";


const PizzaItem = ({ pizza }) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const handleAddClick = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={pizza.img} alt={pizza.name} />
      <h4 className="pizza-block__title">{pizza.name}</h4>

      <div className="pizza-block__selector">
        <ul>
          {pizza.types.map((type, index) => (
            <li key={index} onClick={() => setActiveType(index)} className={activeType === index ? "active" : ""}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((size, index) => (
            <li key={index} onClick={() => setActiveSize(index)} className={activeSize === index ? "active" : ""}>
              {size} cm.
            </li>
          ))}
        </ul>
      </div>

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {pizza.price} $</div>
        <button onClick={handleAddClick} className="button button--outline button--add">
          <Plus />
          <span>Add</span>
          <i className="added-amount">{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;
