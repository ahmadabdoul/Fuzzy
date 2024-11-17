import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import colors from '../../theme/colors';
import {useValues} from '../../../App';

export function DownArrow() {
  const {isDark} = useValues();

  return (
    <Svg
      fill={isDark ? colors.screenBg : colors.primary}
      height="16"
      width="16"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 511.787 511.787">
      <G>
        <G>
          <Path
            d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
           c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
           C512.827,136.693,512.827,129.867,508.667,125.707z"
          />
        </G>
      </G>
    </Svg>
  );
}
