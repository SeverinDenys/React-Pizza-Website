import PizzaLogoIcon from "../../assets/icons/pizza-logo.svg";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={PizzaLogoIcon} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>The most delicious Pizza in Universe</p>
            </div>
          </div>
        </Link>
        <Search/>
        <div className="header__cart">
          <Link to="/cart.html" className="button button--cart">
            <span>20 $</span>
            <div className="button__delimiter"></div>
            <ShoppingCart size={30} />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
