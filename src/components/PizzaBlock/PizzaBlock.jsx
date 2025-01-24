import { Plus } from "lucide-react";
import {pizzaData} from '../../../pizzaInfo'

const PizzaBlock = () => {
  return (
    <>
      {pizzaData.map((pizza, index) => (
        <div key={index} className="pizza-block">
          <img className="pizza-block__image" src={pizza.img} alt="Pizza" />
          <h4 className="pizza-block__title">{pizza.name}</h4>
          <div className="pizza-block__selector">
            <ul>
              <li className="active">{pizza.firstSizeName}</li>
              <li>{pizza.secondSizeName}</li>
            </ul>
            <ul>
              <li className="active">{pizza.firstPortionSize}</li>
              <li>{pizza.secondPortionSize}</li>
              <li>{pizza.thirdPortionSize}</li>
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">from {pizza.price} $</div>
            <div className="button button--outline button--add">
              <Plus />
              <span>Add</span>
              <i className="added-amount">2</i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PizzaBlock