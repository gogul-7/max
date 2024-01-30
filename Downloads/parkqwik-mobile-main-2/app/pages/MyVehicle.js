import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vehicle from "../components/myvehicle/Vehicle";
import Vehicle2 from "../components/myvehicle/Vehicle2";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Vehicle3 from "../components/myvehicle/Vehicle3";

const VehicleStack = createStackNavigator();

const MyVehicle = () => {
  const { setHideHeader } = useContext(AppContext);

  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });

  return (
    <VehicleStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <VehicleStack.Screen
        name="vehicle3"
        options={{
          header: () => {
            return <Header2 title={"Add Vehicle"} />;
          },
        }}
        component={Vehicle3}
      />
      <VehicleStack.Screen
        name="vehicle2"
        options={{
          header: () => {
            return <Header title={"My Vehicles"} />;
          },
        }}
        component={Vehicle2}
      />
      <VehicleStack.Screen
        name="vehicle1"
        options={{
          header: () => {
            return <Header title={"My Vehicles"} />;
          },
        }}
        component={Vehicle}
      />
    </VehicleStack.Navigator>
  );
};

export default MyVehicle;

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack;
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

export const Header2 = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack;
  };

  return (
    <ImageBackground
      source={require("../assets/images/vehiclebg2.png")}
      style={styles.headerImage}
    >
      <View style={styles.container}>
        <Pressable onPress={handlePress}>
          <Image
            style={{ width: 23, height: 23 }}
            source={require("../assets/images/arrowleft.png")}
          />
        </Pressable>
        <Text style={styles.text}>{title}</Text>
      </View>
    </ImageBackground>
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
  headerImage: {
    width: "100%",
    height: 180,

    paddingTop: 45,
  },
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
