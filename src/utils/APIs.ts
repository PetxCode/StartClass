import axios from "axios";
const url: string = "http://localhost:3355/api/user/";

export const getUser = async () => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};
