import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Replace1 from "../components/fastag/Replace1";
import Replace3 from "../components/fastag/Replace3";
import BuyFastPay from "../components/fastag/BuyFastPay";
import AppContext from "../context/AppContext";
import Replace2 from "../components/fastag/Replace2";
import { useNavigation } from "@react-navigation/native";

const ReplaceStack = createStackNavigator();

const ReplaceFast = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <ReplaceStack.Navigator
      screenOptions={{
        header: () => {
          return <Header />;
        },
      }}
    >
      <ReplaceStack.Screen
        options={{
          header: () => {
            return <Header />;
          },
        }}
        name="replace1"
        component={Replace1}
      />
      <ReplaceStack.Screen
        options={{
          header: () => {
            return <Header />;
          },
        }}
        name="replace2"
        component={Replace2}
      />
      <ReplaceStack.Screen
        options={{
          header: () => {
            return <Header />;
          },
        }}
        name="replace3"
        component={Replace3}
      />
      <ReplaceStack.Screen
        name="replace4"
        options={{
          header: () => {
            return null;
          },
        }}
        component={BuyFastPay}
      />
    </ReplaceStack.Navigator>
  );
};

const Header = () => {
  const { headerNum } = useContext(AppContext);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Pressable onPress={handlePress}>
          <Image
            style={{ width: 23, height: 23 }}
            source={require("../assets/images/arrowleft.png")}
          />
        </Pressable>
        <Text style={styles.text}>Replace FASTag</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",

            gap: 8,
          }}
        >
          <View style={styles.circle1}>
            <View style={styles.circle}>
              <Image
                style={{ maxWidth: 25, maxHeight: 25 }}
                source={require("../assets/images/greencar.png")}
              />
            </View>
          </View>
          <Text style={[styles.text, { fontSize: 10 }]}>Vehicle Details</Text>
        </View>
        <View
          style={
            headerNum < 2
              ? [styles.line, { marginLeft: -10, opacity: 0.5 }]
              : [styles.line, { marginLeft: -10 }]
          }
        />
        <View
          style={
            headerNum < 2
              ? { display: "flex", alignItems: "center", gap: 8, opacity: 0.5 }
              : { display: "flex", alignItems: "center", gap: 8 }
          }
        >
          <View style={styles.circle1}>
            <View style={styles.circle}>
              <Image
                style={{ maxWidth: 25, maxHeight: 25 }}
                source={require("../assets/images/greenlocation.png")}
              />
            </View>
          </View>
          <Text style={[styles.text, { fontSize: 10 }]}>Location</Text>
        </View>
        <View
          style={
            headerNum < 3 ? [styles.line, { opacity: 0.5 }] : [styles.line]
          }
        ></View>
        <View
          style={
            headerNum < 3
              ? { display: "flex", alignItems: "center", gap: 8, opacity: 0.5 }
              : { display: "flex", alignItems: "center", gap: 8 }
          }
        >
          <View style={styles.circle1}>
            <View style={styles.circle}>
              <FontAwesomeIcon size={25} icon="money-bills" color="#1A9E75" />
            </View>
          </View>

          <Text style={[styles.text, { fontSize: 10 }]}>Payment</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 15,
    gap: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 4,
  },
  circle1: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#rgba(0, 157, 109, 0.20)",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    height: 37,
    width: 37,
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 55,
    height: 1,
    borderBottomWidth: 0.5,
    borderStyle: "dashed",
    borderColor: "white",
    marginBottom: 20,
  },
});

export default ReplaceFast;
