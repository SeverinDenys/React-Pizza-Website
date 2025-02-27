import { useState } from "react";
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

  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [selectedSortType, setSelectedSortType] = useState({
    name: 'popularity',
    sortProperty: 'rating'
  });

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container">
          {isHomePage && (
            <>
              <div className="content__top">
                <Categories value={activeCategoryId} onClickCategory={(i) => setActiveCategoryId(i)} />
                <Sort selectedSortType={selectedSortType} setSelectedSortType={(i) => setSelectedSortType(i)} />
              </div>
              <h2 className="content__title">All Pizzas</h2>
            </>
          )}

          <Routes>
            <Route path="/" element={<PizzaBlock value={activeCategoryId} selectedSortType={selectedSortType}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
