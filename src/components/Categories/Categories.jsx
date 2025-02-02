import { useState } from "react";
import { categories } from "../../../categories";

const Categories = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleClickCategory = (index) => {
    setActiveCategoryIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((categorieValue, index) => (
          <li
            key={index}
            onClick={() => handleClickCategory(index)}
            className={activeCategoryIndex === index ? "active" : ""}
          >
            {categorieValue}
          </li>
        ))}
       
      </ul>
    </div>
  );
};

export default Categories;
