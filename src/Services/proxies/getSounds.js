import axios from "axios";

const DB__POSTS = "http://localhost:3000";

const getSounds = async () => {
  const response = await axios.get(`${DB__POSTS}/posts`);
  return response.data;
};

export default getSounds;
