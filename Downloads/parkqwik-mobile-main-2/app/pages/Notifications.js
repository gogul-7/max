import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";
import Notification1 from "../components/notifications/Notification1";
import Notification2 from "../components/notifications/Notification2";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const NotificationStack = createStackNavigator();

const Notifications = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });

  return (
    <NotificationStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <NotificationStack.Screen
        name="notification1"
        component={Notification1}
        options={{
          header: () => {
            return <Header title={"Notification"} />;
          },
        }}
      />
      <NotificationStack.Screen
        name="notification2"
        component={Notification2}
      />
    </NotificationStack.Navigator>
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

export default Notifications;
