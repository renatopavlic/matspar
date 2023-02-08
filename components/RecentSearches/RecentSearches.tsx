import Image from "next/image";
import React from "react";

import styles from "./RecentSearches.module.css";

const RecentSearches = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <p>Recent searches</p>
        <button className={styles.clearButton}>Clear All</button>
      </div>
      <ul>
        <li className={styles.listItem}>
          <p>Coca cola</p>
          <button className={styles.deleteButton}>
            <Image src="/Close.svg" height={15} width={15} alt="delete" />
          </button>
        </li>
        <li className={styles.listItem}>
          <p>Pepsi</p>
          <button className={styles.deleteButton}>
            <Image src="/Close.svg" height={15} width={15} alt="delete" />
          </button>
        </li>
        <li className={styles.listItem}>
          <p>Fanta</p>
          <button className={styles.deleteButton}>
            <Image src="/Close.svg" height={15} width={15} alt="delete" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RecentSearches;
