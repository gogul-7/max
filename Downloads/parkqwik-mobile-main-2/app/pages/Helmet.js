import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Helmet2 from "../components/helmet/Helmet2";
import Helmet1 from "../components/helmet/Helmet1";
import Helmet3 from "../components/helmet/Helmet3";
import Helmet4 from "../components/helmet/Helmet4";
import Helmet5 from "../components/helmet/Helmet5";
import Helmet6 from "../components/helmet/Helmet6";
import Helmet7 from "../components/helmet/Helmet7";
import Helmet8 from "../components/helmet/Helmet8";

const HelmetStack = createStackNavigator();

const Helmet = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <HelmetStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <HelmetStack.Screen
        name="helmet1"
        component={Helmet1}
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
      />
      <HelmetStack.Screen
        name="helmet2"
        component={Helmet2}
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
      />
      <HelmetStack.Screen name="helmet3" component={Helmet3} />
      <HelmetStack.Screen
        name="helmet4"
        component={Helmet4}
        options={{
          header: () => {
            return <Header title={"Personal Details"} />;
          },
        }}
      />
      <HelmetStack.Screen
        name="helmet5"
        component={Helmet5}
        options={{
          header: () => {
            return <Header title={"Vehicle Details"} />;
          },
        }}
      />
      <HelmetStack.Screen
        name="helmet6"
        component={Helmet6}
        options={{
          header: () => {
            return <Header title={"Select Address"} />;
          },
        }}
      />
      <HelmetStack.Screen
        name="helmet7"
        component={Helmet7}
        options={{
          header: () => {
            return <Header title={"Select Address"} />;
          },
        }}
      />
      <HelmetStack.Screen
        name="helmet8"
        component={Helmet8}
        options={{
          header: () => {
            return <Header title={"Select Vehicle"} />;
          },
        }}
      />
    </HelmetStack.Navigator>
  );
};

export default Helmet;

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
