import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Booking1 from "../components/bookings/Booking1";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Booking2 from "../components/bookings/Booking2";
import Booking3 from "../components/bookings/Booking3";

const BookingStack = createStackNavigator();

const Bookings = () => {
  const { setHideHeader } = useContext(AppContext);

  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });

  return (
    <BookingStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <BookingStack.Screen
        name="booking1"
        component={Booking1}
        options={{
          header: () => {
            return <Header title={"Bookings & Orders"} />;
          },
        }}
      />
      <BookingStack.Screen
        name="booking2"
        component={Booking2}
        options={{
          header: () => {
            return <Header title={"Bookings & Orders"} />;
          },
        }}
      />
      <BookingStack.Screen
        name="booking3"
        component={Booking3}
        options={{
          header: ({ route }) => {
            return <Header name={route.name} title={"Bookings & Orders"} />;
          },
        }}
      />
    </BookingStack.Navigator>
  );
};

export default Bookings;

const Header = ({ title, name }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  if (name !== "booking3") {
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
  }
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
