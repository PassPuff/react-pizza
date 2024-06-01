import React from "react";

import PizzasList from "../components/PizzasList";
import Navigation from "../components/NavigationBlock"

const Home = () => {
  return (
    <>
      <Navigation />
      <PizzasList/>
    </>
  )
};

export default Home;