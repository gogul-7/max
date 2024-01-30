import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Valet1 from "../components/valet/Valet1";
import Valet2 from "../components/valet/Valet2";
import Valet3 from "../components/valet/Valet3";
import Valet4 from "../components/valet/Valet4";
import Valet5 from "../components/valet/Valet5";
import Valet6 from "../components/valet/Valet6";
import Valet7 from "../components/valet/Valet7";

const ValetStack = createStackNavigator();

const Valet = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <ValetStack.Navigator>
      <ValetStack.Screen
        name="valet1"
        component={Valet1}
        options={{
          header: () => {
            return <Header title={"Valet Parking"} />;
          },
        }}
      />
      <ValetStack.Screen
        name="valet2"
        component={Valet2}
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
      />
      <ValetStack.Screen
        name="valet3"
        component={Valet3}
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
      />
      <ValetStack.Screen
        name="valet4"
        component={Valet4}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <ValetStack.Screen
        name="valet5"
        component={Valet5}
        options={{
          header: () => {
            return <Header title={"Personal Details"} />;
          },
        }}
      />
      <ValetStack.Screen
        name="valet6"
        component={Valet6}
        options={{
          header: () => {
            return <Header title={"Select Vehicle"} />;
          },
        }}
      />
      <ValetStack.Screen
        name="valet7"
        component={Valet7}
        options={{
          header: () => {
            return <Header title={"Vehicle Details"} />;
          },
        }}
      />
    </ValetStack.Navigator>
  );
};

export default Valet;

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
