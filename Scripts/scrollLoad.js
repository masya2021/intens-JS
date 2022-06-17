import { createCardPhoto } from "./createCardPhoto.js";
import { getData } from "./getData.js";

export const scrollLoad = (gallery, grid, endElement) => {
  const observer = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting) {
        // console.log("я тебя вижу");
        const photos = await getData();
        const cards = photos.map(createCardPhoto);

        Promise.all(cards).then((cards) => {
          gallery.append(...cards);
          grid.appended(cards);
        });
      }
    },
    {
      rootMargin: "170px",
    }
  );

  observer.observe(endElement);
};
