import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../../style/commonStyle';
import { RightSideArrow, Truck } from '../../../utils/icon';
import { external } from '../../../style/external.css';
import { style } from './style.css';
import { useNavigation } from '@react-navigation/native';
import { useValues } from '../../../../App';

type NavigationProp = {
  navigate: (screen: string) => void;
};

const ShippingType: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const handleChange = () => {
    navigation.navigate('ShippingTypes');
  };

  const { t } = useValues();

  return (
    <Pressable style={style.shipingView} onPress={handleChange}>
      <Truck />
      <View style={style.verticleLine} />
      <Text style={[commonStyles.fontsizeFiveHund, external.fg_1]}>
        {t('transData.chooseShippingType')}
      </Text>
      <TouchableOpacity>
        <RightSideArrow />
      </TouchableOpacity>
    </Pressable>
  );
};

export default ShippingType;
