import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Close1 from "../components/fastag/Close1";
import Close2 from "../components/fastag/Close2";
import Close3 from "../components/fastag/Close3";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const CloseStack = createStackNavigator();

const CloseFast = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <CloseStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <CloseStack.Screen
        name="close1"
        options={{
          header: () => {
            return <Header />;
          },
        }}
        component={Close1}
      />
      <CloseStack.Screen
        name="close2"
        options={{
          header: () => {
            return <Header />;
          },
        }}
        component={Close2}
      />
      <CloseStack.Screen name="close3" component={Close3} />
    </CloseStack.Navigator>
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
      <Text style={styles.text}>Close FASTag</Text>
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

export default CloseFast;
