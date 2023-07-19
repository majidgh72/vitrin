import axios from "axios";

export const getLoaderData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data[1];
};
