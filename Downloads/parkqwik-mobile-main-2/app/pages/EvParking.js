import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Ev1 from "../components/evparking/Ev1";
import Ev2 from "../components/evparking/Ev2";
import Ev3 from "../components/evparking/Ev3";
import Ev4 from "../components/evparking/Ev4";
import Ev5 from "../components/evparking/Ev5";
import Ev6 from "../components/evparking/Ev6";
import Ev8 from "../components/evparking/Ev8";

const EvStack = createStackNavigator();

const EvParking = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <EvStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <EvStack.Screen name="ev1" component={Ev1} />
      <EvStack.Screen
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        name="ev2"
        component={Ev2}
      />
      <EvStack.Screen
        options={{
          header: () => {
            return <Header title={"Personal Details"} />;
          },
        }}
        name="ev3"
        component={Ev3}
      />
      <EvStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Details"} />;
          },
        }}
        name="ev4"
        component={Ev4}
      />
      <EvStack.Screen
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
        name="ev5"
        component={Ev5}
      />
      <EvStack.Screen name="ev6" component={Ev6} />
      <EvStack.Screen
        name="ev8"
        options={{
          header: () => {
            return <Header title={"Select Vehicle"} />;
          },
        }}
        component={Ev8}
      />
    </EvStack.Navigator>
  );
};

export default EvParking;

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
