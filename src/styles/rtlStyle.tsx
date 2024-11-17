export const textRTLStyle = (value: boolean): "right" | "left" => {
  const direction = value ? "right" : "left";
  return direction;
};

export const viewRTLStyle = (value: boolean): "row-reverse" | "row" => {
  const direction = value ? "row-reverse" : "row";
  return direction;
};

export const imageRTLStyle = (value: boolean): number => {
  const direction = value ? -1 : 1;
  return direction;
};

export const viewSelfRTLStyle = (value: boolean): "flex-start" | "flex-end" => {
  const direction = value ? "flex-start" : "flex-end";
  return direction;
};
