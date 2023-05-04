import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { authStateChangeUser } from "../../../redux/auth/authOperations";

import { useRoute } from "../../../router";

export const Main = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log("isAuth user", isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRoute(isAuth);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
