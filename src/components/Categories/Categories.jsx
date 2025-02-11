/* eslint-disable react/prop-types */
import { useState } from "react";
import { categories } from "../../../categories";

const Categories = ({ value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categorieValue, index) => (
          <li key={index} onClick={() => onClickCategory(index)} className={value === index ? "active" : ""}>
            {categorieValue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
