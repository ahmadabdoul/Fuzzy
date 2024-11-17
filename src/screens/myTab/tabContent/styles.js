import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../theme/appConstant';

export default styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: windowHeight(65),
    width: '100%',
    alignItems: 'center',
  },
  tabContainer: {
    height: windowHeight(52),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  tabView: {
    width: '20%',
    alignItems: 'center',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  line: {
    width: windowWidth(40),
    height: windowHeight(4),
    borderRadius: 10,
    position: 'absolute',
    top: 0,
  },
});
