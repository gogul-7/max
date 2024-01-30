import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import BannerItem from "./BannerItem";
import { useNavigation } from "@react-navigation/native";

const banner = [
  {
    id: 1,
    title: "Recharge Fastag",
    desc: "Get exciting prizes",
    buttonText: "Recharge Now",
    linear: false,
    image: require("../assets/images/frame1.png"),
    route: "FASTag Recharge2",
  },
  {
    id: 2,
    title: "Add money to wallet",
    desc: "Get 2% cashback",
    buttonText: "Add Money",
    linear: true,
    image: require("../assets/images/frame2.png"),
    route: "Wallet",
  },
  {
    id: 3,
    title: "Doorstep Car Wash",
    desc: "Get 20% off on your first car wash",
    buttonText: "Book Now",
    linear: false,
    image: require("../assets/images/frame3.png"),
    route: "Wash",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {}, [navigation]);

  const onViewableItemsChanged = ({ viewableItems }) => {
    setActiveIndex(viewableItems[0].index);
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={banner}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          pagingEnabled
          bounces={false}
          renderItem={({ item }) => <BannerItem item={item} />}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.indicatorContainer}>
        <View
          style={activeIndex === 0 ? styles.activeIndicator : styles.indicator}
          onPress={() => navigation.navigate("FASTag Recharge")}
        ></View>
        <View
          onPress={() => navigation.navigate("FASTag Recharge")}
          style={activeIndex === 1 ? styles.activeIndicator : styles.indicator}
        ></View>
        <View
          onPress={() => navigation.navigate("FASTag Recharge")}
          style={activeIndex === 2 ? styles.activeIndicator : styles.indicator}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 170,
  },
  indicatorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    backgroundColor: "#1A9E75",
    borderRadius: 50,
  },
});

export default Banner;
