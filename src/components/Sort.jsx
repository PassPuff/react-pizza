import React from "react";

function Sort({ value, onChangeSort, orderType, setOrderType }) {
  const [openSortList, setOpenSortList] = React.useState(false);

  const listSort = [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ];

  const onClickSortTabs = (index) => {
    onChangeSort(index);
    setOpenSortList(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            setOpenSortList(!openSortList);
          }}
        >
          {value.name}
        </span>
        <button onClick={() => setOrderType("asc")}>↑</button>
        <button onClick={() => setOrderType("desc")}>↓</button>
      </div>
      {openSortList && (
        <div className="sort__popup">
          <ul>
            {listSort.map(({ ...obj }) => {
              return (
                <li
                  onClick={() => {
                    onClickSortTabs(obj);
                  }}
                  className={
                    value.sortProperty === obj.sortProperty ? "active" : ""
                  }
                  key={obj.name}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
