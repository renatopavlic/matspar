export const transformToOptions = (data: any) => {
  if (!data) {
    return;
  }
  const { suggestions } = data;
  return suggestions.map((s: any) => s.text);
};
