import { Image, View, StyleSheet } from "react-native";
import { AddPhotoButton } from "./AddPhotoButton";
import AddPhoto from "../../assets/addPhoto.svg";
export const Avatar = () => {
  return (
    <View style={styles.thumb}>
      {/* <AddPhotoButton /> */}
      {/* <AddPhoto /> */}
      <AddPhoto></AddPhoto>
    </View>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(246, 246, 246, 1)",
    position: "absolute",
    top: -60,
    alignSelf: "center",
    borderRadius: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    // left: 176,
    // transform: translateX(50),
  },
});
