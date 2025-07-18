import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../theme/colors";

const Profile = () => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M14.1865 12.6817C14.0698 12.67 13.9298 12.67 13.8015 12.6817C11.0248 12.5884 8.81982 10.3134 8.81982 7.51337C8.81982 4.65504 11.1298 2.33337 13.9998 2.33337C16.8582 2.33337 19.1798 4.65504 19.1798 7.51337C19.1682 10.3134 16.9632 12.5884 14.1865 12.6817Z"
        stroke={colors.lightText}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.35334 16.9866C5.53001 18.8766 5.53001 21.9566 8.35334 23.835C11.5617 25.9816 16.8233 25.9816 20.0317 23.835C22.855 21.945 22.855 18.865 20.0317 16.9866C16.835 14.8516 11.5733 14.8516 8.35334 16.9866Z"
        stroke={colors.lightText}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Profile;
