import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Recharge1 from "../components/fastag/Recharge1";
import Recharge2 from "../components/fastag/Recharge2";
import Recharge3 from "../components/fastag/Recharge3";
import Recharge4 from "../components/fastag/Recharge4";

const RechargeStack = createStackNavigator();

const RechargeFast = () => {
  return (
    <RechargeStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <RechargeStack.Screen name="recharge1" component={Recharge1} />
      <RechargeStack.Screen name="recharge2" component={Recharge2} />
      <RechargeStack.Screen name="recharge3" component={Recharge3} />
      <RechargeStack.Screen name="recharge4" component={Recharge4} />
    </RechargeStack.Navigator>
  );
};

export default RechargeFast;
