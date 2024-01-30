import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Recharge1 from "../components/fastag/Recharge1";
import Recharge2 from "../components/fastag/Recharge2";
import Recharge3 from "../components/fastag/Recharge3";
import Recharge4 from "../components/fastag/Recharge4";
import Recharge5 from "../components/fastag/Recharge5";
import Recharge6 from "../components/fastag/Recharge6";

const RechargeStack2 = createStackNavigator();

const RechargeFast2 = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <RechargeStack2.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <RechargeStack2.Screen
        name="recharge5"
        options={{
          header: () => {
            return <Header title={"FASTag Recharge"} />;
          },
        }}
        component={Recharge5}
      />
      <RechargeStack2.Screen
        name="recharge6"
        options={{
          header: () => {
            return <Header title={"FASTag Recharge"} />;
          },
        }}
        component={Recharge6}
      />
      <RechargeStack2.Screen
        name="recharge1"
        options={{
          header: () => {
            return <Header title={"Select Your FASTag Bank"} />;
          },
        }}
        component={Recharge1}
      />
      <RechargeStack2.Screen
        name="recharge2"
        options={{
          header: () => {
            return <Header title={"FASTag Recharge"} />;
          },
        }}
        component={Recharge2}
      />
      <RechargeStack2.Screen
        name="recharge3"
        options={{
          header: () => {
            return <Header title={"Payment"} />;
          },
        }}
        component={Recharge3}
      />
      <RechargeStack2.Screen name="recharge4" component={Recharge4} />
    </RechargeStack2.Navigator>
  );
};

export default RechargeFast2;

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
