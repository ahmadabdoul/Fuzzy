import React from 'react';
import { Text, View, TextStyle, StyleProp } from 'react-native';
import { styles } from './style.css';
import { useValues } from '../../../../App';
import colors from '../../../theme/colors';

const PropertyRight: React.FC = () => {
  const { isDark, textRTLStyle, t } = useValues();

  const textColor = isDark ? colors.screenBg : colors.primary;

  return (
    <View>
      <Text
        style={[
          styles.introduction as StyleProp<TextStyle>,
          { color: textColor },
          { textAlign: textRTLStyle },
        ]}
      >
        {t('transData.intellectualRights')}
      </Text>
      <Text style={[styles.IntroductionWeb as StyleProp<TextStyle>, { textAlign: textRTLStyle }]}>
        {t('transData.propertyRights')}
        {'\n'}
        {'\n'}
        {t('transData.propertyDetails')}
      </Text>
    </View>
  );
};

export default PropertyRight;
