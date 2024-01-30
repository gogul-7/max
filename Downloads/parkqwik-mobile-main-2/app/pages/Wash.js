import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Wash1 from "../components/carwash/Wash1";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Wash2 from "../components/carwash/Wash2";
import Wash3 from "../components/carwash/Wash3";
import Wash4 from "../components/carwash/Wash4";
import Wash5 from "../components/carwash/Wash5";
import Wash6 from "../components/carwash/Wash6";
import Wash7 from "../components/carwash/Wash7";
import Wash8 from "../components/carwash/Wash8";
import Wash9 from "../components/carwash/Wash9";

const WashStack = createStackNavigator();

const Wash = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <WashStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <WashStack.Screen
        name="wash1"
        component={Wash1}
        options={{
          header: () => {
            return <Header title={"Car Wash"} />;
          },
        }}
      />
      <WashStack.Screen
        name="wash2"
        component={Wash2}
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
      />
      <WashStack.Screen
        name="wash3"
        component={Wash3}
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
      />
      <WashStack.Screen
        name="wash5"
        component={Wash5}
        options={{
          header: () => {
            return <Header title={"Personal Details"} />;
          },
        }}
      />
      <WashStack.Screen
        name="wash6"
        component={Wash6}
        options={{
          header: () => {
            return <Header title={"Add vehicle Details"} />;
          },
        }}
      />
      <WashStack.Screen
        name="wash7"
        component={Wash7}
        options={{
          header: () => {
            return <Header title={"Select Address"} />;
          },
        }}
      />
      <WashStack.Screen
        name="wash8"
        component={Wash8}
        options={{
          header: () => {
            return <Header title={"Add Address"} />;
          },
        }}
      />
      <WashStack.Screen name="wash4" component={Wash4} />
      <WashStack.Screen
        name="wash9"
        component={Wash9}
        options={{
          header: () => {
            return <Header title={"Select Vehicle"} />;
          },
        }}
      />
    </WashStack.Navigator>
  );
};

export default Wash;

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
