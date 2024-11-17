import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./style.css";
import { PrimaryBeg } from "../../utils/icon";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const PrimaryBegContain: React.FC = () => {
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate("Checkout");
  };

  return (
    <TouchableOpacity style={styles.primaryBegView} onPress={handleChange}>
      <PrimaryBeg />
    </TouchableOpacity>
  );
};

export default PrimaryBegContain;
