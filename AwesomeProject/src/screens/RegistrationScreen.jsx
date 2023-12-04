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
    // flex: 1,
    // width: 375,
    height: 549,
    // flex: 2,
    // flexShrink: 1,
    marginTop: "auto",
    puddingLeft: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderRadius: "25px 25px 25px 25px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // height: 100,
  },
  // image: {
  //   flex: 1,
  //   justifyContent: "center",
  // },
  text: {
    marginBottom: 32,
    color: "#212121",
    margin: 0,
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
  },
});
