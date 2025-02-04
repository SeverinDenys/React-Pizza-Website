 
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";

function App() {
   
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            <PizzaBlock />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
