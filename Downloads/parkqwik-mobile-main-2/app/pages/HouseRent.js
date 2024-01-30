import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rent1 from "../components/houserent/Rent1";
import Rent2 from "../components/houserent/Rent2";
import Rent3 from "../components/houserent/Rent3";
import Rent4 from "../components/houserent/Rent4";
import Rent5 from "../components/houserent/Rent5";
import Rent6 from "../components/houserent/Rent6";

const RentStack = createStackNavigator();

const HouseRent = () => {
  return (
    <RentStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <RentStack.Screen name="rent1" component={Rent1} />
      <RentStack.Screen name="rent2" component={Rent2} />
      <RentStack.Screen name="rent3" component={Rent3} />
      <RentStack.Screen name="rent4" component={Rent4} />
      <RentStack.Screen name="rent5" component={Rent5} />
      <RentStack.Screen name="rent6" component={Rent6} />
    </RentStack.Navigator>
  );
};

export default HouseRent;
