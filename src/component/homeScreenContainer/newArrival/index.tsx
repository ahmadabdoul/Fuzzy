import React from "react";
import { FlatList, Pressable, View } from "react-native";
import H3HeadingCategory from "../../../commonComponent/headingCategory/H3HeadingCategory";
import NewArrivalContainer from "../../../commonComponent/newArrivalContainer";
import { useNavigation } from "@react-navigation/native";
import { newArrivalData } from "../../../data/newArrivalData";
import { external } from "../../../styles/external.css";

const NewArrival = ({ shows }) => {
  const navigation = useNavigation("");
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={[external.mr_10, external.mv_8]}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <NewArrivalContainer img={item.img} showstart heatShow={true} />
      </Pressable>
    );
  };
  return (
    <>
      <View style={[external.mh_20, external.mt_20]}>
        {shows && (
          <H3HeadingCategory
            value={"transData.newArrivals"}
            seeall={"transData.viewAll"}
          />
        )}
      </View>
      <FlatList
        data={newArrivalData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[external.mh_20]}
      />
    </>
  );
};

export default NewArrival;
