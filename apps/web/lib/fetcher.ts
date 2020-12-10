export const fetcher = (...args) => {
  const [url] = args;

  return fetch(url).then((res) => res.json());
};
