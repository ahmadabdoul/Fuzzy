import React from "react";
import EmptyContainer from "../../../commonComponent/emptyContainer";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import { useValues } from "../../../../App";
import Images from "../../../utils/images";

const EmptyWhishlist: React.FC = () => {
  const { isDark } = useValues();
  const darkGif = isDark ? Images.wishlistDark : Images.wishlist;
  return (
    <EmptyContainer
      value={"transData.emptyWhishlist"}
      img={darkGif}
      title={"transData.noYourWishlist"}
      subtitle={"transData.noYourWishlistSubtext"}
      buttonText={"transData.startShoppig"}
      height={windowHeight(300)}
      width={windowWidth(300)}
    />
  );
};

export default EmptyWhishlist;
