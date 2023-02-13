import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getAllProducts } from "@/services/api";
import { Product } from "@/types/Product";
import { getRecentSearch } from "@/services/search/api";
import { ProjectCard, SearchBar } from "@/components";

interface ResultProps {
  result: Product[];
}

const Results: React.FC<ResultProps> = ({ result }) => {
  return (
    <>
      <Head>
        <title>Results</title>
      </Head>
      <SearchBar />
      <main style={{ margin: "0 20px" }}>
        <h1 style={{ margin: "20px 0 2rem 0" }}>
          Find your favorite products now.
        </h1>
        <div style={{ display: "flex", marginBottom: 28 }}>
          <p className="category-link active">Trandy Foods</p>
          <p className="category-link">Bread</p>
          <p className="category-link">Milk</p>
          <p className="category-link">Egg</p>
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "1rem",
            rowGap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {result.map((p) => (
            <ProjectCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Results;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query) {
    return {
      props: {
        result: [],
      },
    };
  }

  try {
    const url = Object.keys(query)[0];
    const result = await getAllProducts(url);
    const searchSuggestion = await getRecentSearch("");
    return {
      props: {
        result,
        searchSuggestion: searchSuggestion,
      },
    };
  } catch (error) {
    return {
      props: {
        result: [],
        searchSuggestion: [],
      },
    };
  }
};
