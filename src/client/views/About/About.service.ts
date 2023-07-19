import axios from "axios";

export const getLoaderData = async () => {
  const { data } = await axios.get(
    "https://learning.emofid.com/wp-json/wp/v2/posts/30741"
  );

  return data.title;
};
