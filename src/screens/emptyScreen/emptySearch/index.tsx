import React from "react";

import EmptyContainer from "../../../commonComponent/emptyContainer";
import { useValues } from "../../../../App";
import Images from "../../../utils/images";

const EmptySearch: React.FC = () => {
  const { isDark } = useValues();
  const darkGif = isDark ? Images.searchDark : Images.search;
  return (
    <EmptyContainer
      value={"transData.emptySearch"}
      img={darkGif}
      title={"transData.noResulttoShow"}
      subtitle={"transData.pleaseCheck"}
      buttonText={"transData.startShoppig"}
    />
  );
};

export default EmptySearch;
