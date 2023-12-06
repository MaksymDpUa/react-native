import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export const Avatar = () => {
  return (
    <View style={styles.thumb}>
      <AntDesign name="pluscircleo" size={24} style={styles.icon} />
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
  },
  icon: {
    color: "rgba(255, 108, 0, 1)",
    position: "absolute",
    right: -12,
    bottom: 12,
  },
});
