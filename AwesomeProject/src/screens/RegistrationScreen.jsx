import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Avatar } from "../components/Avatar";
import RegisterForm from "../components/RegisterForm";
import bcgImg from "../../assets/images/PhotoBG.png";

export default RegistrationScreen = () => {
  return (
    <ImageBackground source={bcgImg} resizeMode="cover" style={styles.image}>
      <View style={styles.formContainer}>
        <Avatar />
        <Text style={styles.text}>Реєстрація</Text>
        <RegisterForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  formContainer: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 78,
    marginTop: "auto",
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
    fontWeight: "500",
    letterSpacing: 0.3,
  },
});
