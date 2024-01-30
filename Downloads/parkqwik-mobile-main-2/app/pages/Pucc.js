import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Pucc1 from "../components/pucc/Pucc1";

const PuccStack = createStackNavigator();

const Pucc = () => {
  return (
    <PuccStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <PuccStack.Screen name="pucc1" component={Pucc1} />
    </PuccStack.Navigator>
  );
};

export default Pucc;
