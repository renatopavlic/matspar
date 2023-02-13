import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./RecentSearches.module.css";

interface RecentSearchesProps {
  onClear: () => void;
  searchSuggestion: string[];
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (option: string) => void;
}

const RecentSearches: React.FC<RecentSearchesProps> = ({
  onClear,
  searchSuggestion,
  setIsVisible,
  onDelete,
}) => {
  const router = useRouter();

  const handleItemClicked = (url: string) => {
    router.push({
      pathname: "/results",
      query: url,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <p>Recent searches</p>
        {searchSuggestion.length ? (
          <button className={styles.clearButton} onClick={() => onClear()}>
            Clear All
          </button>
        ) : null}
      </div>
      <ul>
        {searchSuggestion.map((o, i) => (
          <li
            key={i}
            className={styles.listItem}
            onClick={() => {
              handleItemClicked(o);
              setIsVisible(false);
            }}
          >
            <p>{o}</p>
            <button
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(o);
              }}
            >
              <Image src="/Close.svg" height={15} width={15} alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
