import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Signup = (props) => {
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeTextStyle}>Join us</Text>
      <Text style={styles.subTextStyle}>Sign up to continue</Text>
      <View style={styles.logInFormContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>UserName</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter your name"
          />
          {!isValidUserName ? (
            <Text style={styles.errorText}>Enter your name</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter your email"
          />
          {!isValidEmail ? (
            <Text style={styles.errorText}>Enter a valid email</Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Enter your password"
          />
          {!isValidPassword ? (
            <Text style={styles.errorText}>Please enter a valid password</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.signupBtnContainer}>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupTextStyle}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  welcomeTextStyle: {
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 5,
  },
  subTextStyle: {
    color: "rgb(173,173,173)",
    fontSize: 18,
  },
  logInFormContainer: {
    marginVertical: 40,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 24,
  },
  input: {
    borderBottomColor: "rgb(183,183,183)",
    borderBottomWidth: 1,
    padding: 0,
    fontSize: 16,
  },
  errorText: {
    marginTop: 5,
    color: "red",
  },
  signupBtnContainer: {
    backgroundColor: "rgb(255, 79, 82)",
    borderRadius: 10,
  },
  signupBtn: {
    padding: 15,
  },
  signupTextStyle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
export default Signup;
