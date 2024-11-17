import {Cargoes, Economy, ShippingBox, WhiteTruck} from '../../utils/icon';

export const shippingData = [
  {
    id: 0,
    title: 'transData.economy',
    icon: <Economy />,
    subtitle: 'transData.estimated',
    price: 10,
  },
  {
    id: 1,
    title: 'transData.regular',
    icon: <ShippingBox />,
    subtitle: 'transData.estimated',
    price: 15,
  },
  {
    id: 2,
    title: 'transData.cargo',
    icon: <Cargoes />,
    subtitle: 'transData.estimated',
    price: 20,
  },
  {
    id: 3,
    title: 'transData.express',
    icon: <WhiteTruck />,
    subtitle: 'transData.estimated',
    price: 30,
  },
];
