import React, { useState, useEffect } from "react";
import {} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { auth } from "../../../firebase/config";
import { authStateChangeUser } from "../../../redux/auth/authOperations";

import { useRoute } from "../../../router";

export const Main = () => {
  const [user, setUser] = useState(null);
  console.log("user Main", user);

  const state = useSelector((state) => state);
  console.log("state Main", state);

  auth.onAuthStateChanged((user) => setUser(user));

  const routing = useRoute(user);

  useEffect(() => {
    // authStateChangeUser();
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
