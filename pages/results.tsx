import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getAllProducts } from "@/services/api";
import { Product } from "@/types/Product";
import { getRecentSearch } from "@/services/search/api";
import { ProjectCard, SearchBar } from "@/components";

interface ResultProps {
  result: Product[];
  searchSuggestion: string[];
}

const Results: React.FC<ResultProps> = ({ result, searchSuggestion }) => {
  return (
    <>
      <Head>
        <title>Results</title>
      </Head>
      <SearchBar searchSuggestion={searchSuggestion} />
      <main style={{ padding: "0 1rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {result.map((r) => (
            <ProjectCard key={r.id} product={r} />
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
