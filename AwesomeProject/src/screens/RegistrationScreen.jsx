import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "../components/Avatar";
import RegisterForm from "../components/RegisterForm";

export default RegistrationScreen = () => {
  return (
    <View style={styles.formContainer}>
      <Avatar />
      <Text style={styles.text}>Реєстрація sasascasascascascsaSCASCA</Text>
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: "relative",
    // flex: 1,
    width: "100%",
    height: 549,
    flexShrink: 0,
    marginTop: "auto",
    borderRadius: "25px 25px 25px 25px",
    backgroundColor: "#fff",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // height: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {},
});
