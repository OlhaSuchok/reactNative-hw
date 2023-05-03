import { auth } from "../../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const authSignUpUser = (data) => async (dispatch, getState) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignInUser = (data) => async (dispatch, getState) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch, getState) => {};
