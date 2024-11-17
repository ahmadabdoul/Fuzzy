import { FreeDelivery } from "../../assets/icons/freeDelivery";
import { Return, Truck } from "../../utils/icon";
import colors from "../../theme/colors";
import Images from "../../utils/images";

export const productDetailsOneData = [
  { img: Images.yellowChair },
  { img: Images.yellowChairTwo },
  { img: Images.yellowChair },
];
export const deliveryData = [
  {
    id: 0,
    title: "transData.freeDelivery",
    icon: <Truck />,
  },
  {
    id: 1,
    title: "transData.codAvailable",
    icon: <FreeDelivery />,
  },
  {
    id: 2,
    title: "transData.daysReturn",
    icon: <Return />,
  },
];
export const chairColors = [
  { color: colors.yellowColor },
  { color: colors.chairColor1 },
  { color: colors.chairColor2 },
];
export const reviewData = [
  {
    id: 0,
    title: "transData.reviewOne",
    name: "transData.smithWilliams",
    time: "transData.justNow",
    img: Images.reviewOne,
    rating: "4.5",
  },
  {
    id: 1,
    title: "transData.reviewTwo",
    name: "transData.rinaJones",
    time: "transData.minAgo",
    img: Images.reviewTwo,
    rating: "4.2",
  },
];
