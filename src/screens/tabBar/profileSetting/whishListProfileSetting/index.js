import React from 'react';
import {View} from 'react-native';
import SafeContainer from '../../../../commonComponent/safeContainer';
import HeadingContainer from '../../../../commonComponent/headingContainer';

const whishListProfile = () => {
  return (
    <SafeContainer
      value={
        <View>
          <HeadingContainer />
        </View>
      }
    />
  );
};

export default whishListProfile;
