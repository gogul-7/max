import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Road1 from "../components/roadassistance/Road1";
import Road2 from "../components/roadassistance/Road2";

const RoadStack = createStackNavigator();

const RoadAssistance = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <RoadStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <RoadStack.Screen
        name="road1"
        component={Road1}
        options={{
          header: () => {
            return <Header title={"Road Assistance"} />;
          },
        }}
      />
      <RoadStack.Screen name="road2" component={Road2} />
    </RoadStack.Navigator>
  );
};

export default RoadAssistance;

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
