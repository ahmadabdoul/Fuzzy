import {StyleSheet} from 'react-native';
import {windowHeight} from '../../../theme/appConstant';
import {external} from '../../../style/external.css';
import colors from '../../../theme/colors';

const style = StyleSheet.create({
  shipingView: {
    borderWidth: 1,
    height: windowHeight(42),
    borderColor: 'rgba(18, 38, 54, 0.07);',
    borderRadius: windowHeight(8),
    ...external.ai_center,
    ...external.fd_row,
    ...external.ph_10,
    ...external.mt_5,
  },
  verticleLine: {
    height: '50%',
    width: 0.2,
    backgroundColor: colors.backgroungVoucher,
    ...external.mh_8,
  },
});

export {style};
