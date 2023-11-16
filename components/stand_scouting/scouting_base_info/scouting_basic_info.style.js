import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  whiteText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
  },
  tealText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.teal,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  BigTeal: {
    fontFamily: FONT.bold,
    fontSize: SIZES.moreXLarge,
    color: COLORS.teal,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.large,
  },
  tab: (item) => ({
    paddingVertical: 30 / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.xLarge,
    borderWidth: 3,
    borderColor: COLORS.gray2,
  }),
  tabText: (item) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    textAlign: 'center',
    color: COLORS.teal
  }),
  descriptionText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    textAlign: 'center',
    color: COLORS.lightWhite
  }
});

export default styles;
