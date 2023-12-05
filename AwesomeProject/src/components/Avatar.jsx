import { View, StyleSheet } from "react-native";

import Svg, { Circle, Path, Rect } from "react-native-svg";
export const Avatar = () => {
  return (
    <View style={styles.thumb}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="132"
        height="120"
        viewBox="0 0 132 120"
        fill="none"
      >
        <Rect width="120" height="120" rx="16" fill="#F6F6F6" />
        <Circle cx="119.5" cy="93.5" r="12" fill="white" stroke="#FF6C00" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M120 87H119V93H113V94H119V100H120V94H126V93H120V87Z"
          fill="#FF6C00"
        />
      </Svg>
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
});
