import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DthHeader from "../components/dth/DthHeader";
import Dth1 from "../components/dth/Dth1";
import Dth2 from "../components/dth/Dth2";
import Dth3 from "../components/dth/Dth3";
import Dth4 from "../components/dth/Dth4";
import Dth5 from "../components/dth/Dth5";

const DthStack = createStackNavigator();

const DTH = () => {
  return (
    <DthStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <DthHeader name={route.name} />;
        },
      }}
    >
      <DthStack.Screen name="dth1" component={Dth1} />
      <DthStack.Screen name="dth2" component={Dth2} />
      <DthStack.Screen name="dth3" component={Dth3} />
      <DthStack.Screen name="dth4" component={Dth4} />
      <DthStack.Screen name="dth5" component={Dth5} />
    </DthStack.Navigator>
  );
};

export default DTH;
