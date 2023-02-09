import { useRouter } from "next/router";

export function useSearchBar() {
  const router = useRouter();

  const handleSubmit = (url: any) => {
    const query: any = {};

    if (url) {
      query.url = url;
    }

    router.push({
      pathname: "/results",
      query: query.url,
    });
  };

  return handleSubmit;
}
