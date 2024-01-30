import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mobile1 from "../components/mobile/Mobile1";
import MobileHeader from "../components/mobile/MobileHeader";
import Mobile2 from "../components/mobile/Mobile2";
import Mobile3 from "../components/mobile/Mobile3";
import Mobile4 from "../components/mobile/Mobile4";
import MobilePaySuccess from "../components/mobile/MobilePaySuccess";

const MobileStack = createStackNavigator();

const Mobile = () => {
  return (
    <MobileStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <MobileHeader name={route.name} />;
        },
      }}
    >
      <MobileStack.Screen name="mobile1" component={Mobile1} />
      <MobileStack.Screen name="mobile2" component={Mobile2} />
      <MobileStack.Screen name="mobile3" component={Mobile3} />
      <MobileStack.Screen name="mobile4" component={Mobile4} />
      <MobileStack.Screen name="mobilesuccess" component={MobilePaySuccess} />
    </MobileStack.Navigator>
  );
};

export default Mobile;
