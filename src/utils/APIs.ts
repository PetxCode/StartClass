import axios from "axios";
const url: string = "http://localhost:3355/api/user";

export const getUser = async (userToken: string) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userToken}`,
      },
    };

    return await axios.get(url, config);
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (data: {}) => {
  try {
    return await axios.post(`${url}/signin`, data);
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = async (token: string) => {
  try {
    return await axios.post(`${url}/refresh`, { refresh: token });
  } catch (error) {
    console.log(error);
  }
};
