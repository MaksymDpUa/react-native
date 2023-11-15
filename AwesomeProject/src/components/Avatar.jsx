import { Image, View, StyleSheet } from "react-native";

export const Avatar = () => {
  return (
    <View style={styles.thumb}>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 132,
    height: 120,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
});
