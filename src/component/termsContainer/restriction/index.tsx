import React from "react";
import { Text, View, TextStyle, StyleProp } from "react-native";
import { tearmData } from "../../../data/termsData";
import { styles } from "./style.css";
import { useValues } from "../../../../App";
import { external } from "../../../styles/external.css";
import { commonStyles } from "../../../styles/commonStyle";

interface TermData {
  title: string;
}

const Restriction: React.FC = () => {
  const { textRTLStyle, viewRTLStyle, t } = useValues();

  return (
    <View>
      {tearmData.map((item: TermData, index: number) => (
        <View
          style={[
            external.mt_5,
            external.fd_row,
            { flexDirection: viewRTLStyle },
          ]}
          key={index}
        >
          <Text
            style={[
              commonStyles.textsizeFourHund as StyleProp<TextStyle>,
              { textAlign: textRTLStyle },
            ]}
          >
            •
          </Text>
          <Text
            style={[
              styles.restriction as StyleProp<TextStyle>,
              { textAlign: textRTLStyle },
            ]}
          >
            {t(item.title)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Restriction;
