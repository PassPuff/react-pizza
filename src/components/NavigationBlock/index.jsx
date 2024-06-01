import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";

const NavigationBlock = () => {
  return (
    <section className="navigation  container">
      <h2 className="visually-hidden">Pizza Navigation</h2>
      <div className="navigation__wrapper">
        <Categories/>
        <Sort/>
      </div>
    </section>
  );
};

export default NavigationBlock;
