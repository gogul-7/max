import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Crime1 from "../components/crime/Crime1";
import Crime2 from "../components/crime/Crime2";
import Crime3 from "../components/crime/Crime3";

const CrimeStack = createStackNavigator();

const Crime = () => {
  return (
    <CrimeStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <CrimeStack.Screen name="crime1" component={Crime1} />
      <CrimeStack.Screen name="crime2" component={Crime2} />
      <CrimeStack.Screen name="crime3" component={Crime3} />
    </CrimeStack.Navigator>
  );
};

export default Crime;
