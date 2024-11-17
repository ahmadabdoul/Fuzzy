import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { RedHeart, RedHeartFill } from "../../utils/icon";

interface RedHeartsContainerProps {
  size?: number;
}

const RedHeartsContainer: React.FC<RedHeartsContainerProps> = ({ size }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const selectHeart = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={selectHeart}>
      {checked ? <RedHeartFill size={size} /> : <RedHeart size={size} />}
    </TouchableOpacity>
  );
};

export default RedHeartsContainer;
