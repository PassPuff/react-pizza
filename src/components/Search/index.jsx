import React from "react";

import styles from "./Search.module.scss";

const searchBlock = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <svg className={styles.icon} width="24" height="24">
        <use xlinkHref="#icon-search"></use>
      </svg>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          width="18"
          height="18"
        >
          <use xlinkHref="#icon-close"></use>
        </svg>
      )}
    </div>
  );
};

export default searchBlock;
