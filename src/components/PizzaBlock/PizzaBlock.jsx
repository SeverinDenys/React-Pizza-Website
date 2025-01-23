import { Plus } from "lucide-react";

const PizzaBlock = () => {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">Pizza</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">thin</li>
          <li>traditional</li>
        </ul>
        <ul>
          <li className="active">26 cm.</li>
          <li>30 cm.</li>
          <li>40 cm.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from 15 $</div>
        <div className="button button--outline button--add">
          <Plus />
          <span>Add</span>
          <i className="added-amount">2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
