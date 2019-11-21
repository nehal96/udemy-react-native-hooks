import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    console.log(response.data);
  } catch (err) {
    console.log(err.response.data);
  }
};

const signIn = dispatch => ({ email, password }) => {};

const signOut = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { isSignedIn: false }
);
