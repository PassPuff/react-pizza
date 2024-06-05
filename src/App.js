import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Card from "./pages/Cart";
import NotFound from "./pages/NotFound";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue}/>}></Route>
        <Route path="/cart" element={<Card />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
