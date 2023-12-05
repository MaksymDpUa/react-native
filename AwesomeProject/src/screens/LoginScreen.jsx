import { Text, View, StyleSheet } from "react-native";
import LogInForm from "../components/LoginForm";

export default LogInScreen = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Увійти</Text>
      <LogInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingTop: 32,
    height: 489,
    marginTop: "auto",
    puddingLeft: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  text: {
    marginBottom: 33,
    color: "#212121",
    margin: 0,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
});
