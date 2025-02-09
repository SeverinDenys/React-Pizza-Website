import { Route, Routes, useLocation } from "react-router";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  const location = useLocation(); // Get current route
  const isHomePage = location.pathname === "/"; // Check if it's the homepage

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container">
          {isHomePage && (
            <>
              <div className="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 className="content__title">All Pizzas</h2>
            </>
          )}
           
            <Routes>
              <Route path="/" element={<PizzaBlock />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
     
    </>
  );
}

export default App;
