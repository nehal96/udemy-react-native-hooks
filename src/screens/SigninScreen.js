import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to Tracker"
        buttonText="Sign in"
        errorMessage={state.errorMessage}
        onSubmit={signIn}
      />
      <NavLink
        text="Don't have an account? Sign up instead."
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  }
});

export default SigninScreen;
