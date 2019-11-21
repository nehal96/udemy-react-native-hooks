import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong while signing up."
    });
  }
};

const signIn = dispatch => ({ email, password }) => {};

const signOut = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { isSignedIn: false, errorMessage: "" }
);
