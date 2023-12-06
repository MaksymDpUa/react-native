import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.formBox}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Адреса електронної пошти"
        />
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Пароль"
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => {}}
          >
            <Text style={styles.showPassword}>Показати</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
        <Text style={styles.submitText}>Увійти</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.logInText}>Немає акаунту? Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formBox: {
    paddingEnd: 16,
    paddingStart: 16,
  },
  inputBox: {
    gap: 16,
    marginBottom: 43,
  },
  input: {
    width: "100%",
    height: 50,
    flexShrink: 1,
    paddingLeft: 16,
    fontSize: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 14,
  },
  submitButton: {
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
    backgroundColor: "rgba(255, 108, 0, 1)",
  },
  submitText: {
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
  },
  logInText: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
    fontFamily: "Roboto",
  },
  showPasswordButton: {
    width: 80,
    position: "absolute",
    right: 16,
    top: 16,
  },

  showPassword: {
    color: "#1B4371",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

export default LogInForm;
