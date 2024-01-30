import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login1 from "../components/login/Login1";
import Login2 from "../components/login/Login2";

const LoginStack = createStackNavigator();

const Login = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <LoginStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <LoginStack.Screen name="login1" component={Login1} />
      <LoginStack.Screen name="login2" component={Login2} />
    </LoginStack.Navigator>
  );
};

export default Login;
