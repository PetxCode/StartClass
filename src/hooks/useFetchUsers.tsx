import { useEffect, useState } from "react";
import { getUser } from "../utils/APIs";

export const useFetchUser = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getUser().then((res) => {
      setAllUsers(res?.data.data);
    });
  }, []);

  return allUsers;
};
