import { homeDecor, officeFurniture, relaxingFurniture } from "../../constant";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import Images from "../../utils/images";

export const onBordingSwiperData = [
  {
    id: 0,
    img: Images.onBordingOne,
    title: officeFurniture,
    imgs: false,
    marginTop: windowHeight(70),
    height: windowHeight(200),
    width: windowWidth(320),
    top: "40%",
  },
  {
    id: 1,
    img: Images.onBordingThree,
    title: relaxingFurniture,
    imgs: false,
    marginTop: windowHeight(60),
    height: windowHeight(220),
    width: windowWidth(370),
    top: "40%",
  },
  {
    id: 2,
    img: Images.onBordingTwo,
    title: homeDecor,
    imgs: true,
    height: windowHeight(230),
    width: windowWidth(400),
    marginTop: windowHeight(5),
    top: "51%",
  },
];
