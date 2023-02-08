import Image from "next/image";
import React, { useState } from "react";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit", searchValue);
  };

  return (
    <nav className={styles.wrapper}>
      <Image alt="burger" src="/Menu.svg" height={24} width={24} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Image
          alt="burger"
          src="/Search.svg"
          height={24}
          width={24}
          className={styles.searchIcon}
        />
        <input
          value={searchValue}
          onChange={handleChange}
          placeholder="Search Product"
          className={styles.searchInput}
        />
      </form>
    </nav>
  );
};

export default SearchBar;
