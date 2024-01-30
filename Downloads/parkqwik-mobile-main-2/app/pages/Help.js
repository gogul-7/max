import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Help1 from "../components/help/Help1";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import Help2 from "../components/help/Help2";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import Help3 from "../components/help/Help3";
const HelpStack = createStackNavigator();

const Help = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <HelpStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <HelpStack.Screen
        name="help1"
        component={Help1}
        options={{
          header: () => {
            return <Header title={"Help & Support"} />;
          },
        }}
      />
      <HelpStack.Screen
        name="help2"
        component={Help2}
        options={{
          header: () => {
            return <Header title={"Help & Support"} />;
          },
        }}
      />
      <HelpStack.Screen
        name="help3"
        component={Help3}
        options={{
          header: () => {
            return <Header title={"My Tickets"} />;
          },
        }}
      />
    </HelpStack.Navigator>
  );
};

export default Help;

const Header = ({ title }) => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(false);

  const handleNavigate = () => {
    navigation.navigate("help3");
  };

  const handlePress = () => {
    setMenu(false);
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
      {title !== "My Tickets" && (
        <Pressable
          onPress={() => setMenu(true)}
          style={{ position: "absolute", right: 15, bottom: 19 }}
        >
          <FontAwesomeIcon icon={"ellipsis-vertical"} color="white" />
        </Pressable>
      )}
      <Modal
        isVisible={menu}
        backdropOpacity={0.1}
        backdropColor="white"
        onBackdropPress={() => setMenu(false)}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
      >
        <Pressable onPress={handleNavigate} style={styles.menu}>
          <Image
            style={{ width: 15, height: 11 }}
            source={require("../assets/images/ticket.png")}
          />
          <Text
            style={[
              styles.normal,
              { paddingTop: 2, fontSize: 12, color: "#393939" },
            ]}
          >
            My Tickets
          </Text>
        </Pressable>
      </Modal>
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
  normal: {
    fontFamily: "Poppins_400Regular",
  },
  menu: {
    width: 122,
    height: 44,
    backgroundColor: "white",
    position: "absolute",
    top: 15,
    right: 2,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
});
