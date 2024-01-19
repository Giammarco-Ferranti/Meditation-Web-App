import axios from "axios";

const DB__POSTS = "http://localhost:3000";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default fetchData;
