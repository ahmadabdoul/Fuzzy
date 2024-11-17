import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {style} from './style.css';
import colors from '../../../theme/colors';
import {useValues} from '../../../../App';

const RowInput = () => {
  const {isDark, t} = useValues();
  const colorTextColor = isDark ? colors.screenBg : colors.primary;

  return (
    <View style={style.inputWrapView}>
      <View style={style.inputWrap}>
        <Text style={[style.label, {color: colorTextColor}]}>
          {t('transData.city')}
        </Text>
        <View
          style={[
            style.containerView,
            {backgroundColor: isDark ? colors.primary : colors.screenBg},
            {borderTopColor: isDark ? colors.primary : colors.layoutBg},
          ]}>
          <TextInput
            style={style.inputDate}
            placeholder={t('transData.enterCityName')}
            placeholderTextColor={colors.lightText}
            keyboardType="default"
          />
        </View>
      </View>

      <View style={style.inputWrapSpace}>
        <Text style={[style.label, {color: colorTextColor}]}>
          {t('transData.zipCode')}
        </Text>
        <View
          style={[
            style.containerView,
            {backgroundColor: isDark ? colors.primary : colors.screenBg},
            {borderTopColor: isDark ? colors.primary : colors.layoutBg},
          ]}>
          <TextInput
            style={style.inputCvv}
            placeholder={t('transData.enterZipCode')}
            maxLength={17}
            placeholderTextColor={colors.lightText}
            keyboardType="phone-pad"
          />
        </View>
      </View>
    </View>
  );
};

export default RowInput;
