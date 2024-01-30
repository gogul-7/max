import React, { useEffect, useRef, useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Pressable,
  Image,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const PaySuccess = () => {
  const { setHideHeader } = useContext(AppContext);
  const navigation = useNavigation();
  const [enable, setEnable] = useState(false);

  const handleDone = () => {
    navigation.navigate("Home");
  };
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  setTimeout(() => {
    setEnable(true);
  }, 1500);

  const animation = useRef(new Animated.Value(0)).current;
  const resize1 = useRef(new Animated.Value(0)).current;
  const resize2 = useRef(new Animated.Value(0)).current;
  const resize3 = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 800,
    }).start();
    Animated.stagger(200, [
      Animated.timing(resize1, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(resize2, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(resize3, {
        toValue: 1,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.stagger(200, [
        Animated.timing(opacity2, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  });

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Animated.View
        style={[
          styles.greenCircle,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-200, 0],
                }),
              },
            ],
          },
        ]}
      ></Animated.View>
      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          height: 190,
          marginTop: 60,
        }}
      >
        <Animated.View
          style={[
            styles.circle1,
            {
              transform: [
                {
                  scale: resize1.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            styles.circle2,
            {
              transform: [
                {
                  scale: resize2.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            styles.circle3,
            {
              transform: [
                {
                  scale: resize3.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <Animated.Image
            style={{
              width: 50,
              height: 30,
              opacity: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}
            source={require("../assets/images/check.png")}
          />
        </Animated.View>
      </View>
      <Animated.Text
        style={[
          styles.bold,
          {
            color: "white",
            fontSize: 20,
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        Payment Successful
      </Animated.Text>
      <Animated.Text
        style={[
          styles.text,
          {
            color: "white",
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        Transaction ID: 538901388
      </Animated.Text>
      <Animated.View
        style={[
          styles.button,
          {
            opacity: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        <Text style={[styles.bold, { color: "#1A9E75", paddingTop: 2 }]}>
          View Details
        </Text>
      </Animated.View>
      {enable && (
        <View
          style={{ marginTop: 70, width: "90%", alignItems: "center", flex: 1 }}
        >
          <View style={styles.change}>
            <Image
              style={{ height: 22, width: 22 }}
              source={require("../assets/images/gift.png")}
            />
            <Text style={[styles.header, { color: "#1A9E75", paddingTop: 2 }]}>
              Reward Earned
            </Text>
            <FontAwesomeIcon
              style={{ position: "absolute", right: 10 }}
              icon={"angle-right"}
              color="#1A9E75"
            />
          </View>
          <Pressable
            onPress={handleDone}
            style={[
              styles.button,
              {
                backgroundColor: "#1A9E75",
                width: "95%",
                position: "absolute",
                bottom: 30,
              },
            ]}
          >
            <Text style={[styles.bold, { color: "#FFF", fontSize: 16 }]}>
              Done
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  greenCircle: {
    height: 600,
    width: 500,
    backgroundColor: "#1A9E75",
    borderRadius: 600,
    position: "absolute",
    top: -180,
  },
  circle1: {
    width: 130,
    height: 130,
    backgroundColor: "#6ADEB9",
    borderRadius: 150,
    position: "absolute",
  },
  circle2: {
    width: 112,
    height: 112,
    backgroundColor: "#DAFFF3",
    borderRadius: 150,
    position: "absolute",
  },
  circle3: {
    width: 85,
    height: 85,
    backgroundColor: "white",
    borderRadius: 150,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  button: {
    width: 120,
    height: 40,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  change: {
    borderWidth: 1,
    borderColor: "#1A9E75",
    borderRadius: 8,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FFFA",
    paddingHorizontal: 10,
    height: 40,
    marginTop: 30,
    gap: 5,
  },
  loaderCard: {
    width: 262,
    height: 226,
    backgroundColor: "white",
    borderRadius: 16,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});

export default PaySuccess;
