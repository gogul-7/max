import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Address1 from "../components/address/Address1";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import Address2 from "../components/address/Address2";

const AddressStack = createStackNavigator();

const Address = () => {
  const { setHideHeader } = useContext(AppContext);

  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <AddressStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <AddressStack.Screen
        options={{
          header: () => {
            return <Header title={"Saved Address"} />;
          },
        }}
        name="address1"
        component={Address1}
      />
      <AddressStack.Screen
        options={{
          header: () => {
            return <Header title={"Add Address Details"} />;
          },
        }}
        name="address2"
        component={Address2}
      />
    </AddressStack.Navigator>
  );
};

export default Address;

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
