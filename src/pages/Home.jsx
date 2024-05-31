import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzasList from "../components/PizzasList";

const Home = () => {
  return (
    <>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzasList/>
    </>
  )
};

export default Home;