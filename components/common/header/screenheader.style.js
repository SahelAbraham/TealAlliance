import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.teal,
    borderRadius: SIZES.xLarge / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
