import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "sign_in":
      return { token: action.payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "sign_in", payload: response.data.token });

    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong while signing up."
    });
  }
};

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "sign_in", payload: response.data.token });

    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong while signing in."
    });
  }
};

const signOut = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, errorMessage: "" }
);
