import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content__top">
            <Categories/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
