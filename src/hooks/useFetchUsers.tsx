import { useEffect, useState } from "react";
import { getUser, refreshToken } from "../utils/APIs";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "../Global/GlobalState";
import { useNavigate } from "react-router-dom";

export const useFetchUser = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const tinerOut = setInterval(() => {
      refreshToken(user.refreshToken).then((res) => {
        console.log("New Reads: ", res?.data.message);
        if (res?.data.message === "jwt expired") {
          navigate("/sign");
          clearInterval(tinerOut);
        }
        dispatch(updateToken(res?.data.data.token));
      });
    }, 15000);

    getUser(user.token).then((res) => {
      setAllUsers(res?.data.data);
    });
  }, []);

  return allUsers;
};
