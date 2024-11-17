import {
  CardPrimary,
  OfferPrimary,
  LocationPrimary,
  WalletPrimary,
} from '../../utils/icon';

export const notificationData = [
  {
    id: 0,
    title: 'transData.notificationDiscount',
    subtitle: 'transData.secialPromotion',
    icon: <OfferPrimary />,
  },
  {
    id: 1,
    title: 'transData.topUp',
    subtitle: 'transData.topWallet',
    icon: <WalletPrimary />,
  },
  {
    id: 2,
    title: 'transData.newService',
    subtitle: 'transData.nowYouCan',
    icon: <LocationPrimary />,
  },
  {
    id: 3,
    title: 'transData.creditCardConnect',
    subtitle: 'transData.creditCardLink',
    icon: <CardPrimary />,
  },
  {
    id: 4,
    title: 'transData.accountSetup',
    subtitle: 'transData.accountCreate',
    icon: <CardPrimary />,
  },
];
