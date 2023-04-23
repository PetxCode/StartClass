import axios from "axios";
const url: string = "http://localhost:3355/api/user";
const mainURL: string = "http://localhost:3355/api";

export const verifiedUser = async (id: string) => {
  try {
    return await axios.patch(`${url}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (data: {}) => {
  try {
    console.log(data);
    return await axios.post(`${url}/create`, data);
  } catch (error) {
    console.log(error);
  }
};

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

export const getProduct = async (userToken: string) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userToken}`,
      },
    };

    return await axios.get(`${mainURL}/product`, config);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (userToken: string, data: {}) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userToken}`,
      },
    };

    return await axios.post(`${mainURL}/product/create`, data, config);
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

