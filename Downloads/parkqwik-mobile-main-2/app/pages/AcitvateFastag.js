import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ActivateFast1 from "../components/fastag/ActivateFast1";
import ActivateFast2 from "../components/fastag/ActivateFast2";
import ActivateFast3 from "../components/fastag/ActivateFast3";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const FastagStack = createStackNavigator();

const Fastag = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <FastagStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <FastagStack.Screen
        name="subscreen1"
        options={{
          header: () => {
            return <Header />;
          },
        }}
        component={ActivateFast1}
      />
      <FastagStack.Screen
        name="subscreen2"
        options={{
          header: () => {
            return <Header />;
          },
        }}
        component={ActivateFast2}
      />
      <FastagStack.Screen
        name="subscreen3"
        options={{
          header: () => {
            return null;
          },
        }}
        component={ActivateFast3}
      />
    </FastagStack.Navigator>
  );
};

const Header = () => {
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
      <Text style={styles.text}>Add FASTag</Text>
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

export default Fastag;
