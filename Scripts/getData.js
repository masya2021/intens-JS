export const getData = (url) => {
  return fetch(url).then((data) => {
    return data.json();
  });
};

/*  БЫЛО 
export const getData = () => {
  return fetch("data.json").then((data) => {
    return data.json();
  });
};
*/
