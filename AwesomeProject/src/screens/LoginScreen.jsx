import { Text, View, StyleSheet, ImageBackground } from "react-native";
import LogInForm from "../components/LoginForm";
import bcgImg from "../../assets/images/PhotoBG.png";

export default LogInScreen = () => {
  return (
    <ImageBackground source={bcgImg} resizeMode="cover" style={styles.image}>
      <View style={styles.formContainer}>
        <Text style={styles.text} fontWeight="500">
          Увійти
        </Text>
        <LogInForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  formContainer: {
    paddingTop: 32,
    paddingBottom: 144,
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
    fontFamily: "RobotoMedium",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
});
