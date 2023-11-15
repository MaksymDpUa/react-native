import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bcgImg from "../assets/images/PhotoBG.png";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bcgImg}
        resizeMode="cover"
        // imageStyle={{ height: 300 }}
        style={styles.image}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Lets try</Text>
        <RegistrationScreen />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // height: 100,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: 0,
    // paddingRight: 16,
    // paddingBottom: 0,
    // paddingLeft: 16,
  },
});
