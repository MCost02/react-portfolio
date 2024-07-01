/* Helps dynamically import images to site components by constructing absolute paths to each image */
export const getImageUrl = (path) => {
  return new URL("assets/${path}", import.meta.url).href;
};
