import { useEffect } from "react";
import { refreshToken } from "../utils/APIs";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser, updateToken } from "../Global/GlobalState";
import { useNavigate } from "react-router-dom";

export const usePost = (fn: any) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      fn(user.token);
    }
  }, []);
};
