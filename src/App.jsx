import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
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
        </div>
      </div>
    </>
  );
}

export default App;
