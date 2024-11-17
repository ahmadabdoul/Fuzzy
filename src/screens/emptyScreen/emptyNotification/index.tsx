import React from "react";
import EmptyContainer from "../../../commonComponent/emptyContainer";
import { useValues } from "../../../../App";
import Images from "../../../utils/images";

const EmptyNotification: React.FC = () => {
  const { isDark } = useValues();
  const darkGif = isDark ? Images.notifictionDark : Images.notifiction;

  return (
    <EmptyContainer
      value={"transData.emptyNotification"}
      img={darkGif}
      title={"transData.noNotifications"}
      subtitle={"transData.nonotificationText"}
      buttonText={"transData.refresh"}
      inputs={true}
    />
  );
};

export default EmptyNotification;
