import { StyleSheet } from "react-native";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "../../../theme/appConstant";
import colors from "../../../theme/colors";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBg,
    paddingTop: windowHeight(30),
  },
  img: {
    width: "100%",
    height: windowHeight(196),
    position: "absolute",
  },
  inputView: {
    width: "100%",
    backgroundColor: colors.screenBg,
    height: windowHeight(35),
    borderRadius: windowHeight(7),
    ...external.mt_10,
  },
  checkView: {
    width: "35%",
    backgroundColor: colors.primary,
    height: windowHeight(35),
    borderRadius: windowHeight(7),
    position: "absolute",
    ...external.as_end,
    ...external.ai_center,
    ...external.js_center,
  },
  textInput: {
    ...external.mh_8,
    ...commonStyles.textsizeFiveHund,
  },
  detailsView: {
    height: windowHeight(90),
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(8),
    ...external.mv_10,
    ...external.ph_10,
    ...external.pt_10,
  },
  detailText: {
    ...commonStyles.textsizeFourHund,
    width: windowWidth(360),
    lineHeight: 22,
  },
  reviewView: {
    backgroundColor: colors.screenBg,
    ...external.mv_10,
    ...external.p_10,
    borderRadius: windowHeight(8),
  },
  imgs: {
    width: "18%",
    height: "90%",
    ...external.rm_contain,
  },
  rating: {
    marginHorizontal: windowHeight(2),
    marginTop: windowHeight(3),
  },
  write: {
    fontSize: fontSizes.FONT20,
  },
  viewList: {
    backgroundColor: colors.screenBg,

    ...external.mt_10,
  },
  centeredView: {
    flex: 1,
    ...external.js_end,
    ...external.ai_center,
    backgroundColor: colors.modelBgColor,
  },
  modalView: {
    backgroundColor: colors.screenBg,
    borderRadius: 20,
    width: "100%",

    paddingVertical: windowHeight(10),
    paddingHorizontal: windowHeight(15),
  },
  modalText: {
    marginBottom: 15,
    ...external.ti_center,
  },
  uploadBox: {
    borderRadius: windowHeight(8),
    borderWidth: 1,
    borderStyle: "dashed",
    height: windowHeight(80),
    borderColor: colors.subtitle,
    marginVertical: windowHeight(5),
    ...external.js_center,
  },
  reviewBox: {
    borderRadius: windowHeight(8),
    height: windowHeight(80),
    borderColor: colors.subtitle,
    marginVertical: windowHeight(5),
    backgroundColor: colors.layoutBg,
    ...external.ph_5,
  },
  plusFont: {
    ...external.ti_center,
    fontSize: fontSizes.FONT45,
    color: colors.lightText,
  },
  upload: {
    bottom: windowHeight(5),
  },
  textInptStyle: {
    ...commonStyles.textsizeFiveHund,
  },

  backColor: {
    backgroundColor: colors.primary,
    height: windowHeight(40),
    width: "90%",
    ...external.mh_20,
    borderRadius: windowHeight(8),
    ...external.ai_center,
    ...external.fd_row,
    ...external.ph_10,
    ...external.js_space,
  },
  chairText: {
    fontSize: fontSizes.FONT23,
  },
});

export { styles };
