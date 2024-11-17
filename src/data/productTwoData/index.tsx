import {FreeDelivery} from '../../assets/icons/freeDelivery';
import colors from '../../theme/colors';
import {
  EightTeenLb,
  EightyFiveCm,
  FiveKg,
  OneOneFiveCm,
  Return,
  Truck,
} from '../../utils/icon';

export const scaleData = [
  {
    id: 0,
    icon: <OneOneFiveCm />,
    title: 'transData.oneOnecm',
  },
  {
    id: 1,
    icon: <EightyFiveCm />,
    title: 'transData.eightyFivecm',
  },
  {
    id: 2,
    icon: <EightTeenLb />,
    title: 'transData.eightinLb',
  },
  {
    id: 3,
    icon: <FiveKg />,
    title: 'transData.fiveKg',
  },
];
export const deliveryDataTwo = [
  {
    id: 0,
    title: 'transData.freeDelivery',
    icon: <Truck color={colors.screenBg} />,
  },
  {
    id: 1,
    title: 'transData.codAvailable',
    icon: <FreeDelivery color={colors.subtitle} />,
  },
  {
    id: 2,
    title: 'transData.daysReturn',
    icon: <Return color={colors.subtitle} />,
  },
];
