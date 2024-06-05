import React from "react";

import Skeleton from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

const Home = ({ searchValue }) => {
  console.log(searchValue);
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const [orderType, setOrderType] = React.useState("asc");

  React.useEffect(() => {
    const sortBy = sortType.sortProperty;
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    setLoading(true);

    fetch(
      `https://6658651b5c3617052648415e.mockapi.io/items?sortBy=${sortBy}&order=${orderType}${category}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, orderType]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
    })
    .map((obj) => <Index key={obj.id} {...obj} />);

  const skeletonPizzas = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <main>
      <section className="navigation  container">
        <h2 className="visually-hidden">Pizza Navigation</h2>
        <div className="navigation__wrapper">
          <Categories
            value={categoryId}
            onChangeCategory={(id) => setCategoryId(id)}
          />
          <Sort
            value={sortType}
            onChangeSort={(id) => setSortType(id)}
            orderType={orderType}
            setOrderType={(id) => setOrderType(id)}
          />
        </div>
      </section>
      <section className="content container">
        <h2 className="content__title">Все пиццы</h2>
        <ul className="content__items">
          {isLoading ? skeletonPizzas : pizzas}
        </ul>
      </section>
    </main>
  );
};

export default Home;
