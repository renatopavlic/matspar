import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import styles from "./RecentSearches.module.css";

interface RecentSearchesProps {
  searchSuggestion: string[];
  setisVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecentSearches: React.FC<RecentSearchesProps> = ({
  searchSuggestion = [],
  setisVisible,
}) => {
  const router = useRouter();
  const [options, setOptions] = useState(searchSuggestion);

  const handleClearAll = (e: any) => {
    e.stopPropagation();
    if (!options.length) {
      return;
    }
    setOptions([]);
  };

  const handleItemClicked = (url: string) => {
    router.push({
      pathname: "/results",
      query: url,
    });
  };

  useEffect(() => {
    setOptions(searchSuggestion);
  }, [searchSuggestion]);

  return (
    <div className={styles.wrapper} onBlur={() => setisVisible(false)}>
      <div className={styles.headerWrapper}>
        <p>Recent searches</p>
        <button className={styles.clearButton} onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <ul>
        {options.map((o, i) => (
          <li
            key={i}
            className={styles.listItem}
            onClick={() => handleItemClicked(o)}
          >
            <p>{o}</p>
            <button className={styles.deleteButton}>
              <Image src="/Close.svg" height={15} width={15} alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
