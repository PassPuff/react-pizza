import React from "react";
import PizzaItem from "./PizzaItem";


function PizzasList(title, price) {
  return (
    <div className="content__items">
      <PizzaItem title="Мексиканская" price="550" />
      <PizzaItem title="Чизбергер-пицца" price="250" />
    </div>
  )
}

export default PizzasList;