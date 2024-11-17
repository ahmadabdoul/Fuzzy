import React from 'react';
import {View} from 'react-native';
import ProfileTextInput from '../../../commonComponent/profileInputs';
import colors from '../../../theme/colors';

const AddNewInput = () => {
  return (
    <View>
      <ProfileTextInput
        title={'transData.name'}
        placeHolder={'transData.enterName'}
        AddCard={true}
        color={colors.screenBg}
      />
      <ProfileTextInput
        title={'transData.phoneNumber'}
        placeHolder={'transData.enterPhoneNumber'}
        AddCard={true}
        color={colors.screenBg}
      />
      <ProfileTextInput
        title={'transData.streetAddress'}
        placeHolder={'transData.enterstreetAddress'}
        AddCard={true}
        color={colors.screenBg}
      />
      <ProfileTextInput
        title={'transData.landMark'}
        placeHolder={'transData.enterLandMark'}
        AddCard={true}
        color={colors.screenBg}
      />
    </View>
  );
};

export default AddNewInput;
