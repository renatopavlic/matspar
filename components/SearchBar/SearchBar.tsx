import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useSearchBar } from "@/hooks/useSearchBar";
import styles from "./SearchBar.module.css";
import { RecentSearches } from "../RecentSearches";
import { getRecentSearch } from "@/services/search/api";
import { initialSuggestions } from "./consts";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSumbit = useSearchBar();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>(initialSuggestions);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const onSearch = (e: any) => {
    e.preventDefault();
    handleSumbit(searchValue);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);

    try {
      // should use custom debounce function here
      const result = await getRecentSearch(value);
      setSuggestions(result);
    } catch (error) {}
  };

  const handleSearchInputClicked = async () => {
    if (!isVisible) {
      setIsVisible((prev) => !prev);
    }
    try {
      const searchSuggestion = await getRecentSearch("");
      setSuggestions(searchSuggestion);
    } catch (error) {
      console.log("sugesstions error: ", error);
    }
  };

  const handleOptionDelete = (opt: string) => {
    const filteredOptions = suggestions.filter((s) => s !== opt);
    setSuggestions(filteredOptions);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    },
    [wrapperRef]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={wrapperRef}>
      <nav className={styles.wrapper}>
        {!isVisible && (
          <Image alt="burger" src="/Menu.svg" height={24} width={24} />
        )}

        <form className={styles.form} onSubmit={onSearch}>
          <Image
            alt="burger"
            src="/Search.svg"
            height={24}
            width={24}
            className={styles.searchIcon}
          />
          <input
            onClick={handleSearchInputClicked}
            ref={searchInputRef}
            value={searchValue}
            onChange={handleChange}
            placeholder="Search Product"
            className={styles.searchInput}
            onBlur={() => null}
          />
        </form>
      </nav>
      {isVisible ? (
        <RecentSearches
          searchSuggestion={suggestions}
          setIsVisible={setIsVisible}
          onClear={() => setSuggestions([])}
          onDelete={handleOptionDelete}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
