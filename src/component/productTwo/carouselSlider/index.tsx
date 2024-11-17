import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { productDetailsOneData } from "../../../data/productOne";
import { windowHeight, windowWidth } from "../../../theme/appConstant";

const { width, height } = Dimensions.get("window");

const App = () => {
  return (
    <View style={styles.container}>
      <Swiper loop autoplay autoplayTimeout={3} showsPagination={false}>
        {productDetailsOneData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.cardText} source={item.img} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width - 100,
    height: height * 0.3,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight(30),
  },
  cardText: {
    height: windowHeight(270),
    width: windowWidth(300),
    resizeMode: "contain",
  },
  paginationContainer: {
    bottom: windowHeight(10),
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
});

export default App;
