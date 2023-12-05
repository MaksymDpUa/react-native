import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "../components/Avatar";
import RegisterForm from "../components/RegisterForm";

export default RegistrationScreen = () => {
  return (
    <View style={styles.formContainer}>
      <Avatar />
      <Text style={styles.text}>Реєстрація</Text>
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: "relative",
    paddingTop: 92,
    height: 549,
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
