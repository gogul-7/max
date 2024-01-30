import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toll1 from "../components/toll/Toll1";
import Toll2 from "../components/toll/Toll2";

const TollStack = createStackNavigator();

const Toll = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <TollStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <TollStack.Screen
        name="toll1"
        component={Toll1}
        options={{
          header: () => {
            return <Header title={"Toll Estimator"} />;
          },
        }}
      />
      <TollStack.Screen
        name="toll2"
        component={Toll2}
        // options={{
        //   header: () => {
        //     return <Header title={"Toll Estimator"} />;
        //   },
        // }}
      />
    </TollStack.Navigator>
  );
};

export default Toll;

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
