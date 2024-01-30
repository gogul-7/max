import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rto1 from "../components/rto/Rto1";

const RtoStack = createStackNavigator();

const Rto = () => {
  return (
    <RtoStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <RtoStack.Screen name="rto1" component={Rto1} />
    </RtoStack.Navigator>
  );
};

export default Rto;
