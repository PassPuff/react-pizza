import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

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
        {categories.map((categories, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "active" : ""}
            key={categories}
          >
            {categories}
          </li>
        ))}
      </ul>
  );
}

export default Categories;
