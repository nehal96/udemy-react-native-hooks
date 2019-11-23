import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracker"
        buttonText="Sign up"
        errorMessage={state.errorMessage}
        onSubmit={signUp}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  },
  link: {
    color: "blue"
  }
});

export default SignupScreen;
