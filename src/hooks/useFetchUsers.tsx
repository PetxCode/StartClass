import { useEffect, useState } from "react";
import { refreshToken } from "../utils/APIs";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser, updateToken } from "../Global/GlobalState";
import { useNavigate } from "react-router-dom";

export const useFetchUser = (fn: any) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  console.log("reading users: ", user);
  useEffect(() => {
    const timerOut = setInterval(() => {
      if (user) {
        refreshToken(user.refreshToken).then((res) => {
          console.log(res?.data.message);
          if (res?.data.message === "jwt expired") {
            navigate("/sign");
            dispatch(logOutUser());
            clearInterval(timerOut);
          }
          dispatch(updateToken(res?.data?.data?.token));
        });
      }
    }, 15000);

    if (user.token) {
      fn(user.token).then((res: any) => {
        setAllUsers(res?.data.data);
      });
    }
  }, []);

  return allUsers;
};
