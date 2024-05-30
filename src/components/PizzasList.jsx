import React from "react";
import pizzas from "../assets/db.json";
import PizzaItem from "./PizzaItem";

function PizzasList() {
  return (


    <div className="content__items">
      {pizzas.map((obj) => (
        <PizzaItem {...obj} key={obj.id}/>
      ))}
    </div>
  );
}

export default PizzasList;
