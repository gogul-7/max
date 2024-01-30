import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const Header = ({ title }) => {
  const navigation = useNavigation();
  const { hideHeader, headerName } = useContext(AppContext);
  const handlePress = () => {
    navigation.goBack();
  };

  if (!hideHeader) {
    if (headerName === "null")
      return (
        <View style={styles.headerContainer}>
          <Pressable onPress={handlePress}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/images/arrowleft.png")}
            />
          </Pressable>
          <Text style={styles.text}>{title}</Text>
        </View>
      );
    else {
      return (
        <View style={styles.headerContainer}>
          <Pressable onPress={handlePress}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/images/arrowleft.png")}
            />
          </Pressable>
          <Text style={styles.text}>{headerName ? headerName : title}</Text>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    paddingTop: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
});

export default Header;
