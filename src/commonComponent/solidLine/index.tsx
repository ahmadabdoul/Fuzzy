import React from "react";
import { DimensionValue, View, ViewStyle } from "react-native";
import colors from "../../theme/colors";
import { external } from "../../styles/external.css";

interface SolidLineProps {
  width?: DimensionValue | any;
  height?: number;
  color?: string;
  marginVertical?: number;
}

const SolidLine: React.FC<SolidLineProps> = ({
  width,
  height = 1,
  color = colors.solidLine,
  marginVertical = 5,
}) => {
  const style: ViewStyle = {
    width: width || external.width_100,
    height,
    backgroundColor: color,
    marginVertical,
  };

  return <View style={style} />;
};

export default SolidLine;
