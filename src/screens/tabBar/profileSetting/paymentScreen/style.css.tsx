import {StyleSheet} from 'react-native';
import colors from '../../../../theme/colors';
import {windowHeight, windowWidth} from '../../../../theme/appConstant';
import {external} from '../../../../style/external.css';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBg,
    height: windowHeight(52),
    ...external.mt_10,
    ...external.fd_row,
    ...external.ai_center,
  },
  containerView: {
    ...external.fd_row,
    ...external.js_space,
    width: '96%',
    ...external.ai_center,
  },
  img: {
    width: windowWidth(50),
    height: windowHeight(20),
    ...external.rm_contain,
    marginTop: windowHeight(3),
    ...external.mh_8,
  },
});

export {style};
