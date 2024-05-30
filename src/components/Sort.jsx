import React from "react";

function Sort() {
  const [selectItem, setTabsSort] = React.useState(0);
  const [openSortList, setOpenSortList] = React.useState(false);
  const listSort = ["популярности", "цене", "алфавиту"];
  const nameSort = listSort[selectItem];

  const onClickSortTabs = (index) => {
    setTabsSort(index);
    setOpenSortList(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg width="10" height="10">
          <use href="#sortingArrow " />
        </svg>
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            setOpenSortList(!openSortList);
          }}
        >
          {nameSort}
        </span>
      </div>
      {openSortList && (
        <div className="sort__popup">
          <ul>
            {listSort.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    onClickSortTabs(index);
                  }}
                  className={selectItem === index ? "active" : ""}
                  key={item}
                >
                  {item}
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
