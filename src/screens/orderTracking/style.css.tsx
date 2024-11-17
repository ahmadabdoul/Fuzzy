import {StyleSheet} from 'react-native';
import {windowHeight} from '../../theme/appConstant';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.layoutBg,
    marginHorizontal: windowHeight(15),
    height: 419,
    borderRadius: windowHeight(10),
  },
  stepIndicator: {
    paddingHorizontal: 20,
  },
  lableContainer: {
    paddingLeft: 20,
    width: 250,
  },
  lableText: {
    color: colors.primary,
  },
});

export {styles};
