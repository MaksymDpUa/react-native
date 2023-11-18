import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const RegisterForm = () => {
  const [logIn, setLogIn] = useState("Useless Text");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.formBox}>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} onChangeText={setLogIn} value={logIn} />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="useless placeholder"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="useless placeholder"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formBox: {
    padding: "0px 16px 0px 16px",
  },
  inputBox: {
    gap: 16,
  },
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",

    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },
});

export default RegisterForm;
