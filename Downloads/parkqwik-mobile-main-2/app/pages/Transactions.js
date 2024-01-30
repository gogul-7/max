import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Transaction1 from "../components/transactions/Transaction1";
import Transaction2 from "../components/transactions/Transaction2";
import FailedTrans from "../components/transactions/FailedTrans";

const TransStack = createStackNavigator();

const Transactions = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <TransStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <TransStack.Screen
        options={{
          header: () => {
            return <Header title={"Transactions"} />;
          },
        }}
        name="trans1"
        component={Transaction1}
      />
      <TransStack.Screen name="trans2" component={Transaction2} />
      <TransStack.Screen name="trans3" component={FailedTrans} />
    </TransStack.Navigator>
  );
};
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

export default Transactions;
