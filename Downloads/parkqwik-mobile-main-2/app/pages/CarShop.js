import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Shop1 from "../components/shop/Shop1";
import Shop3 from "../components/shop/Shop3";
import Shop4 from "../components/shop/Shop4";
import Shop2 from "../components/shop/Shop2";
import Shop5 from "../components/shop/Shop5";
import Shop6 from "../components/shop/Shop6";

const ShopStack = createStackNavigator();

const CarShop = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <ShopStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Shop"} />;
          },
        }}
        name="shop1"
        component={Shop1}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Car Perfumes"} />;
          },
        }}
        name="shop2"
        component={Shop2}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Shop3"} />;
          },
        }}
        name="shop3"
        component={Shop3}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        name="shop4"
        component={Shop4}
      />
      <ShopStack.Screen
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
        name="shop5"
        component={Shop5}
      />
      <ShopStack.Screen name="shop6" component={Shop6} />
    </ShopStack.Navigator>
  );
};

export default CarShop;

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Pressable onPress={handlePress}>
          <Image
            style={{ width: 23, height: 23 }}
            source={require("../assets/images/arrowleft.png")}
          />
        </Pressable>
        {title !== "Shop3" && <Text style={styles.text}>{title}</Text>}
      </View>
      <View>
        {(title === "Shop" || title === "Car Perfumes") && (
          <View style={{ flexDirection: "row", gap: 18, alignItems: "center" }}>
            <Image
              source={require("../assets/images/Search1.png")}
              style={{ width: 20, height: 20 }}
            ></Image>
            <Image
              source={require("../assets/images/favorite1.png")}
              style={{ width: 24, height: 24 }}
            ></Image>
            <Image
              source={require("../assets/images/shopping_cart.png")}
              style={{ width: 24, height: 24 }}
            ></Image>
          </View>
        )}
        {title === "Shop3" && (
          <View style={{ flexDirection: "row", gap: 18, alignItems: "center" }}>
            <Image
              source={require("../assets/images/shopping_cart.png")}
              style={{ width: 24, height: 24, right: 5 }}
            ></Image>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    paddingTop: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
});
