import React from "react";
import Image from "next/image";

import styles from "./ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src="/Menu.svg" alt="product" fill />
      </div>
      <h3 className={styles.productName}>Product Name</h3>
      <p className={styles.brand}>Brand</p>
      <p className={styles.price}>$ 166</p>
    </div>
  );
};

export default ProjectCard;
