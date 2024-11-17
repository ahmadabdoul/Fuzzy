import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: windowHeight(290),
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight(270),
  },
  card: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    height: windowHeight(330),
    width: windowWidth(340),
    resizeMode: "contain",
    position: "absolute",
  },
  contentContainer: {
    alignItems: "center",
    height: windowHeight(300),
    paddingLeft: windowWidth(40),
  },
  barContainer: {
    height: 4,
    borderRadius: 10,
    alignSelf: "center",
  },
  bar: {
    height: 4,
    borderRadius: 10,
  },
  chairColors: {
    width: windowHeight(22),
    height: windowHeight(22),
    borderRadius: windowHeight(11),
    borderWidth: 5,
    marginLeft: windowWidth(4),
  },
});

export { styles };
