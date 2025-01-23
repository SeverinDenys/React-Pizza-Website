import PizzaLogoIcon from "../../assets/icons/pizza-logo.svg";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src={PizzaLogoIcon} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>The most delicious Pizza in Universe</p>
          </div>
        </div>
        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>20 $</span>
            <div className="button__delimiter"></div>
            <ShoppingCart size={30} />
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
