import React from "react";

import EmptyContainer from "../../../commonComponent/emptyContainer";
import { useValues } from "../../../../App";
import Images from "../../../utils/images";

const EmptyCart: React.FC = () => {
  const { isDark } = useValues();
  const darkGif = isDark ? Images.cartDark : Images.cart;

  return (
    <EmptyContainer
      value={"transData.emptyCart"}
      img={darkGif}
      title={"transData.yourLuggageIsEmpty"}
      subtitle={"transData.checkYou"}
      buttonText={"transData.startShoppig"}
      inputs={true}
    />
  );
};

export default EmptyCart;
