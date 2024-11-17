import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import ProfileTextInput from "../../../commonComponent/profileInputs";
import SolidLine from "../../../commonComponent/solidLine";
import colors from "../../../theme/colors";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const ModelView: React.FC = () => {
  const { isDark, t } = useValues();
  const colorBgImg = isDark ? colors.primary : colors.layoutBg;
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <>
      <View>
        <ProfileTextInput
          title={t("transData.name")}
          placeHolder={t("transData.enterName")}
          AddCard={true}
        />
        <ProfileTextInput
          title={t("transData.email")}
          placeHolder={t("transData.emailId")}
          AddCard={true}
        />
        <ProfileTextInput
          title={t("transData.reviewTitle")}
          placeHolder={t("transData.reviewSub")}
          AddCard={true}
        />
        <SolidLine
          marginVertical={10}
          color={isDark ? colors.textinputBG : colors.layoutBg}
        />
        <Text
          style={[
            commonStyles.fontsizeFiveHund as StyleProp<TextStyle>,
            { color: colorText },
          ]}
        >
          {t("transData.addPhoto")}
        </Text>
        <View style={styles.uploadBox as StyleProp<ViewStyle>}>
          <View>
            <Text style={styles.plusFont as StyleProp<TextStyle>}>+</Text>
            <Text
              style={[
                commonStyles.h1primary as StyleProp<TextStyle>,
                external.ti_center as StyleProp<TextStyle>,
                styles.upload as StyleProp<TextStyle>,
              ]}
            >
              {t("transData.upload")}
            </Text>
          </View>
        </View>
        <SolidLine
          marginVertical={10}
          color={isDark ? colors.textinputBG : colors.layoutBg}
        />
        <Text
          style={[
            commonStyles.fontsizeFiveHund as StyleProp<TextStyle>,
            { color: colorText },
          ]}
        >
          {t("transData.reviews")}
        </Text>
        <View
          style={[
            styles.reviewBox as StyleProp<ViewStyle>,
            { backgroundColor: colorBgImg },
          ]}
        >
          <TextInput
            style={styles.textInptStyle as StyleProp<TextStyle>}
            placeholder={t("transData.writeYourReviewHere")}
            placeholderTextColor={colors.lightText}
          />
        </View>
      </View>
    </>
  );
};

export default ModelView;
