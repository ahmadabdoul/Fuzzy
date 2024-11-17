import React from "react";
import { Text, View } from "react-native";
import SolidLine from "../../../commonComponent/solidLine";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import colors from "../../../theme/colors";
import { commonStyles } from "../../../styles/commonStyle";
import { external } from "../../../styles/external.css";

const DetailScreen: React.FC = () => {
  const { isDark, textRTLStyle, t } = useValues();
  const colorText = isDark ? colors.screenBg : colors.primary;

  return (
    <>
      <View style={[external.mv_13, external.mh_20]}>
        <Text
          style={[
            commonStyles.fontsizeLargeHund,
            { color: colorText },
            { textAlign: textRTLStyle },
          ]}
        >
          {t("transData.details")}
        </Text>
        <View style={[external.fd_row]}>
          <Text
            style={[
              styles.detailText,
              { color: colorText },
              { textAlign: textRTLStyle },
            ]}
          >
            {t("transData.detailTwo")}{" "}
            <Text
              style={[
                commonStyles.PrimarysizeFourHundMed,
                { color: colorText },
              ]}
            >
              {t("transData.readMore")}
            </Text>
          </Text>
        </View>
      </View>
      <View style={[external.mh_20]}>
        <SolidLine />
      </View>
    </>
  );
};

export default DetailScreen;
