import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Loan1 from "../components/loan/Loan1";
import LoanHeader from "../components/loan/LoanHeader";
import Loan2 from "../components/loan/Loan2";
import Loan3 from "../components/loan/Loan3";
import Loan4 from "../components/loan/Loan4";
import Loan5 from "../components/loan/Loan5";

const LoanStack = createStackNavigator();

const Loan = () => {
  return (
    <LoanStack.Navigator
      screenOptions={{
        header: ({ route }) => {
          return <LoanHeader name={route.name} />;
        },
      }}
    >
      <LoanStack.Screen name="loan1" component={Loan1} />
      <LoanStack.Screen name="loan2" component={Loan2} />
      <LoanStack.Screen name="loan3" component={Loan3} />
      <LoanStack.Screen name="loan4" component={Loan4} />
      <LoanStack.Screen name="loan5" component={Loan5} />
    </LoanStack.Navigator>
  );
};

export default Loan;
