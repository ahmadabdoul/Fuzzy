import {StyleSheet} from 'react-native';
import {fontSizes, windowHeight} from '../../theme/appConstant';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    paddingTop: windowHeight(8),
  },
  chiarText: {
    fontSize: fontSizes.FONT23,
  },
});

export {styles};
