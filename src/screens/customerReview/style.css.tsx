import {StyleSheet} from 'react-native';
import {commonStyles} from '../../style/commonStyle';
import {external} from '../../style/external.css';
import {windowHeight, windowWidth} from '../../theme/appConstant';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  delivery: {
    height: windowHeight(42),
    backgroundColor: colors.screenBg,
    ...external.mv_13,
    borderRadius: windowHeight(7),
    ...external.fd_row,
    ...external.ai_center,
    ...external.ph_10,
  },
  deliveryText: {
    ...external.ph_5,
    width: windowWidth(95),
    ...commonStyles.PrimarysizeFourHund,
  },
  verticleLine: {
    height: '80%',
    width: 1,
    backgroundColor: colors.layoutBg,
    marginHorizontal: windowHeight(2),
  },
});

export {styles};
