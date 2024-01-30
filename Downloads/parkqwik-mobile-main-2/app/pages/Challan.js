import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PayChallan from "../components/challan/PayChallan";
import ChallanDetails from "../components/challan/ChallanDetails";
import ChallanHeader from "../components/challan/ChallanHeader";
import ChallanPayment from "../components/challan/ChallanPayment";
import ChallanPaySuccess from "../components/challan/ChallanPaySuccess";
import TrafficFInes from "../components/challan/TrafficFInes";

const Challan = () => {
  const Challan = createStackNavigator();

  return (
    <Challan.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <Challan.Screen name="challan1" component={PayChallan}></Challan.Screen>
      <Challan.Screen
        name="challan2"
        component={ChallanDetails}
        options={{
          header: () => {
            return <ChallanHeader />;
          },
        }}
      ></Challan.Screen>
      <Challan.Screen
        name="challan3"
        component={ChallanPayment}
      ></Challan.Screen>
      <Challan.Screen
        name="challan4"
        component={ChallanPaySuccess}
      ></Challan.Screen>
      <Challan.Screen name="challan5" component={TrafficFInes}></Challan.Screen>
    </Challan.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Challan;
