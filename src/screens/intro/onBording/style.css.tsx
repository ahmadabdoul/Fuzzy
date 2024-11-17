import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBg,
    width: windowHeight(45),
    height: windowHeight(45),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowHeight(45),
    margin: 1,
    borderWidth: 5,
    borderColor: colors.primary,
  },
  viewBorderWidth: {
    borderWidth: 5,
    borderRadius: windowHeight(90),
  },
  linearBorder: {
    borderRadius: windowHeight(90),
  },
  viewContainer: {
    backgroundColor: colors.bgColordark,
    width: "100%",
    ...external.ai_center,
  },
  logoImage: {
    height: windowHeight(42),
    width: windowWidth(150),
  },
  logoImageText: {
    height: windowHeight(90),
    width: windowWidth(150),
    marginTop: windowHeight(6),
    resizeMode: "contain",
  },
  img: {
    resizeMode: "contain",
  },
  imgBg: {
    flex: 1,
    // height: '100%',
    // width: '100%',
  },
  titletext: {
    fontSize: fontSizes.FONT26,
    fontWeight: "600",
    paddingTop: windowHeight(15),
  },
  activityDot: {
    width: windowWidth(33),
    height: windowHeight(6),
    borderRadius: windowHeight(8),
  },
  pagination: { height: "66%" },
  subtitleText: {
    width: "80%",
    paddingTop: windowHeight(15),
  },
  bottomArrow: {
    top: "16%",
  },
  viewRotation: {
    position: "absolute",
    height: windowHeight(260),
    width: windowHeight(260),
    borderRadius: windowHeight(130),
    alignItems: "center",
    justifyContent: "center",
    top: windowHeight(85),
    left: windowWidth(41),
    borderWidth: 4,
    borderColor: "#152939",
  },
  animationView: {
    height: windowHeight(254),
    width: windowHeight(254),
    borderRadius: windowHeight(124),
    borderWidth: 20,
    borderTopColor: "#122636",
    borderRightColor: "#122636",
    borderBottomColor: "#192D3C",
    borderLeftColor: "#192D3C",
  },
});

export { style };
