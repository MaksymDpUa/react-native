import { Button } from "react-native";
import AddPhoto from "../../assets/addPhoto.svg";
import Svg, { Path } from "react-native-svg";
export const AddPhotoButton = () => {
  const onPress = () => {};
  return (
    <Button title="ввв" onPress={onPress}>
      {/* <Svg width={20} height={20} viewBox="0 0 20 20">
        <Path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill="#000" />
      </Svg> */}
      <AddPhoto />
    </Button>
  );
};
