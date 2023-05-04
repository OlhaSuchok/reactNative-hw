import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const authSignUpUser = (data) => async (dispatch, getState) => {
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
    auth.currentUser;

    await updateProfile(auth.currentUser, {
      displayName: data.nickname,
    });

    const { uid, displayName } = auth.currentUser;
    console.log("uid, displayName", uid, displayName);

    dispatch(
      updateUserProfile({
        userId: uid,
        userName: displayName,
      })
    );
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

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    signOut(auth);
    dispatch(authSignOut());
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          updateUserProfile({
            userId: user.uid,
            userName: user.displayName,
          })
        );
        dispatch(authStateChange({ isAuth: true }));
      }
    });
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
