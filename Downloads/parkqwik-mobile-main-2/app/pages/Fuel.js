import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Fuel1 from "../components/fuel/Fuel1";
import Fuel2 from "../components/fuel/Fuel2";

const FuelStack = createStackNavigator();

const Fuel = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <FuelStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <FuelStack.Screen
        options={{
          header: () => {
            return <Header title={"Fuel Price"} />;
          },
        }}
        name="fuel1"
        component={Fuel1}
      />
      <FuelStack.Screen name="fuel2" component={Fuel2} />
    </FuelStack.Navigator>
  );
};

export default Fuel;

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={handlePress}>
        <Image
          style={{ width: 23, height: 23 }}
          source={require("../assets/images/arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
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
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
});
