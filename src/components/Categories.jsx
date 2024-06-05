import React from "react";

function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <ul className="categories">
      {categories.map((categoryName, index) => (
        <li
          onClick={() => onChangeCategory(index)}
          className={value === index ? "active" : ""}
          key={categoryName}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
