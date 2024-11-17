import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import {windowHeight, windowWidth} from '../../theme/appConstant';
import { external } from '../../styles/external.css';

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    backgroundColor: colors.layoutBg,
    marginTop: windowHeight(13),
    borderRadius: windowHeight(12),
    borderTopWidth: 0.2,
    borderTopColor: colors.layoutBg,
    height: windowHeight(63),
    ...external.ai_center,
    paddingHorizontal: windowHeight(6),
    ...external.fd_row,
  },
  iconView: {
    width: windowWidth(67),
    height: windowHeight(43),
    backgroundColor: colors.screenBg,
    borderRadius: windowHeight(9),
    ...external.ai_center,
    ...external.js_center,
  },
  applyButton: {
    position: 'absolute',
    bottom: windowHeight(16),
    left: 0,
    right: 0,
    ...external.js_end,
    ...external.mh_20,
  },
});

export default styles;
