import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Water1 from "../components/water/Water1";
import WaterHeader from "../components/water/WaterHeader";
import Water2 from "../components/water/Water2";
import Water3 from "../components/water/Water3";
import WaterPay from "../components/water/WaterPay";
import WaterSuccess from "../components/water/WaterSuccess";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const WaterStack = createStackNavigator();

const Water = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <WaterStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <WaterHeader name={route.name} />;
        },
      }}
    >
      <WaterStack.Screen name="water1" component={Water1} />
      <WaterStack.Screen name="water2" component={Water2} />
      <WaterStack.Screen name="water3" component={Water3} />
      <WaterStack.Screen name="waterpay" component={WaterPay} />
      <WaterStack.Screen name="watersuccess" component={WaterSuccess} />
    </WaterStack.Navigator>
  );
};

export default Water;
