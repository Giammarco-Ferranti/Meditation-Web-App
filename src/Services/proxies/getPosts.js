import axios from "axios";

const DB__COMMENTS = "http://localhost:3000";

const getPosts = async () => {
  const response = await axios.get(`${DB__COMMENTS}/comments`);
  return response.data;
};

export default getPosts;
