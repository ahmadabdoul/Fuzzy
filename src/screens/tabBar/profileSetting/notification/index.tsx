import React from "react";
import { Text, View, ViewStyle, TextStyle } from "react-native";
import SafeContainer from "../../../../commonComponent/safeContainer";
import HeadingContainer from "../../../../commonComponent/headingContainer";
import { styles } from "./style.css";
import { notificationData } from "../../../../data/notficationData";
import { useValues } from "../../../../../App";
import colors from "../../../../theme/colors";
import { external } from "../../../../styles/external.css";

interface NotificationsProps {
  navigation: {
    goBack: (routeName?: string) => void;
  };
}

const Notifications: React.FC<NotificationsProps> = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack("");
  };

  const { isDark, textRTLStyle, viewRTLStyle, t } = useValues();

  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer
            value={"transData.notification"}
            onPress={handleBack}
          />
          {notificationData.map((item, index) => (
            <View
              style={[
                styles.ViewContainer,
                {
                  backgroundColor: isDark
                    ? colors.textinputBG
                    : colors.layoutBg,
                },
                { flexDirection: viewRTLStyle } as ViewStyle,
              ]}
              key={index}
            >
              <View
                style={[
                  styles.whiteContainer,
                  {
                    backgroundColor: isDark ? colors.primary : colors.screenBg,
                  },
                ]}
              >
                {item.icon}
              </View>
              <View style={[external.mh_10, external.mt_5]}>
                <Text
                  style={[
                    styles.title,
                    { color: isDark ? colors.screenBg : colors.primary },
                    { textAlign: textRTLStyle } as TextStyle,
                  ]}
                >
                  {t(item.title)}
                </Text>
                <Text style={styles.subtitle}>{t(item.subtitle)}</Text>
              </View>
            </View>
          ))}
        </View>
      }
    />
  );
};

export default Notifications;
