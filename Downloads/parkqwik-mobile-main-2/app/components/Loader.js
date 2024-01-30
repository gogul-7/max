import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

const Loader = () => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 700,
        easing: Easing.linear,
      })
    ).start();
  });
  return (
    <Animated.Image
      style={{
        height: 50,
        alignSelf: "center",
        width: 50,
        transform: [
          {
            rotate: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      }}
      source={require("./assets/images/loader.png")}
    />
  );
};

export default Loader;
