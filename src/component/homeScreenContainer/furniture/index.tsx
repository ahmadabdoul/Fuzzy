import React from "react";
import { FlatList, View } from "react-native";
import { FurnitureData } from "../../../data/furnitureData";
import H3HeadingCategory from "../../../commonComponent/headingCategory/H3HeadingCategory";
import FurnitureContainer from "../../../commonComponent/furniture";
import { external } from "../../../styles/external.css";

const Funniture = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={[external.mr_10, external.mt_10]}>
        <FurnitureContainer img={item.img} chairName={item.title} />
      </View>
    );
  };
  return (
    <>
      <View style={[external.mh_20, external.mt_15]}>
        <H3HeadingCategory
          value={"transData.furniture"}
          seeall={"transData.viewAll"}
          onPress={() => navigation.navigate("SearchScreen")}
        />
      </View>
      <FlatList
        data={FurnitureData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[external.mh_20, external.mt_15]}
      />
    </>
  );
};

export default Funniture;
