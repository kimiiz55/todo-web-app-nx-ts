import fetch from 'isomorphic-unfetch'

export const fetcher = (...args) => {

  return fetch(...args).then((res) => res.json());
};
