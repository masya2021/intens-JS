export const getData = () => {
  return fetch(url).then((data) => {
    return data.json();
  });
};
