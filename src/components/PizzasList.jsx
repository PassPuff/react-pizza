import React from "react";
import Index from "./PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";

function PizzasList() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6658651b5c3617052648415e.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);

  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <Index key={obj.id} {...obj} />)}
    </div>
  );
}

export default PizzasList;
