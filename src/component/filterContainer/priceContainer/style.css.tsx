import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import {windowHeight} from '../../../theme/appConstant';

const style = StyleSheet.create({
  textView: {
    backgroundColor: colors.layoutBg,
    width: '80%',
    paddingVertical: windowHeight(5),
    borderRadius: windowHeight(6),
  },
  trackStyle: {
    backgroundColor: colors.primary,
    padding: 3,
  },
  markerStyle: {
    backgroundColor: colors.lightText,
    height: windowHeight(18),
    width: windowHeight(18),
    marginTop: 5,
    borderWidth: 0.5,
  },
  containerStyle: {
    marginHorizontal: windowHeight(30),
  },
});

export {style};
