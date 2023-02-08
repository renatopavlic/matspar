import React from "react";
import Image from "next/image";

import styles from "./ProjectCard.module.css";
import { Product } from "@/types/Product";

interface ProjectCardProps {
  product: Product;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ product }) => {
  const { imageUrl, name, brand, price } = product;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt="product"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.brand}>{brand}</p>
      <p className={styles.price}>$ {price}</p>
    </div>
  );
};

export default ProjectCard;
