import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Electricity1 from "../components/electricty/Electricity1";
import ElectricityHeader from "../components/electricty/ElectricityHeader";
import Electricity2 from "../components/electricty/Electricity2";
import Electricity3 from "../components/electricty/Electricity3";
import ElectricityPay from "../components/electricty/ElectricityPay";
import PaySuccess from "../components/electricty/PaySuccess";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const ElectricityStack = createStackNavigator();

const Electricity = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <ElectricityStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <ElectricityHeader name={route.name} />;
        },
      }}
    >
      <ElectricityStack.Screen
        name="electricity1"
        component={Electricity1}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="electricity2"
        component={Electricity2}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="electricity3"
        component={Electricity3}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="electricitypay"
        component={ElectricityPay}
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
      ></ElectricityStack.Screen>
      <ElectricityStack.Screen
        name="paysuccess"
        component={PaySuccess}
      ></ElectricityStack.Screen>
    </ElectricityStack.Navigator>
  );
};

export default Electricity;

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
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
});
