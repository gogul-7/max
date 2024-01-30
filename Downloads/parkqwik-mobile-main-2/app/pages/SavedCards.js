import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { createStackNavigator } from "@react-navigation/stack";
import Cards1 from "../components/savedcards/Cards1";
import { useNavigation } from "@react-navigation/native";
import Cards2 from "../components/savedcards/Cards2";

const CardsStack = createStackNavigator();

const SavedCards = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <CardsStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <CardsStack.Screen
        options={{
          header: () => {
            return <Header title={"Saved Cards"} />;
          },
        }}
        name="cards1"
        component={Cards1}
      />
      <CardsStack.Screen
        options={{
          header: () => {
            return <Header title={"Add Card Details"} />;
          },
        }}
        name="cards2"
        component={Cards2}
      />
    </CardsStack.Navigator>
  );
};

export default SavedCards;

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
