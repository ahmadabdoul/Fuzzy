import React from "react";

import EmptyContainer from "../../../commonComponent/emptyContainer";
import { useValues } from "../../../../App";
import Images from "../../../utils/images";

const EmptyOrder: React.FC = () => {
  const { isDark } = useValues();
  const darkGif = isDark ? Images.orderDarkGif : Images.orderGif;
  return (
    <EmptyContainer
      value={"transData.emptyorder"}
      img={darkGif}
      title={"transData.noOrderAvailable"}
      subtitle={"transData.ifYouHave"}
      buttonText={"transData.startShoppig"}
    />
  );
};

export default EmptyOrder;
