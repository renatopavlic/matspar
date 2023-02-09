import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import styles from "./SearchBar.module.css";
import RecentSearches from "../RecentSearches/RecentSearches";
import { useSearchBar } from "@/hooks/useSearchBar";

interface SearchBarProps {
  searchSuggestion: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ searchSuggestion }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSumbit = useSearchBar();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setisVisible] = useState(false);
  const isVisibleRef = useRef(false);

  const onSearch = (e: any) => {
    e.preventDefault();

    handleSumbit(searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <nav className={styles.wrapper}>
        <Image alt="burger" src="/Menu.svg" height={24} width={24} />
        <form className={styles.form} onSubmit={onSearch}>
          <Image
            alt="burger"
            src="/Search.svg"
            height={24}
            width={24}
            className={styles.searchIcon}
          />
          <input
            onClick={() => setisVisible(true)}
            ref={searchInputRef}
            value={searchValue}
            onChange={handleChange}
            placeholder="Search Product"
            className={styles.searchInput}
          />
        </form>
      </nav>
      {isVisible && (
        <RecentSearches
          searchSuggestion={searchSuggestion}
          setisVisible={setisVisible}
        />
      )}
    </>
  );
};

export default SearchBar;
