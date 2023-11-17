import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const RegisterForm = () => {
  const [logIn, setLogIn] = useState("Useless Text");
  const [email, setEmail] = useState("");

  return (
    <View>
      <TextInput style={styles.input} onChangeText={setLogIn} value={logIn} />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="useless placeholder"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
