import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {windowHeight, windowWidth} from '../../../theme/appConstant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.layoutBg,
    marginHorizontal: windowHeight(15),
    height: windowHeight(360),
    borderRadius: windowHeight(10),
  },
  stepIndicator: {
    paddingHorizontal: windowHeight(15),
  },
  lableContainer: {
    width: windowWidth(300),
  },
  lableText: {
    color: colors.primary,
  },
});

export {styles};
