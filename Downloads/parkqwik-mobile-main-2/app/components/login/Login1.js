import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Login1 = () => {
  const [border, setBorder] = useState("#E5E5E5");
  const [disbale, setDisable] = useState(true);
  const [selected, setSelected] = useState(0);
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("login2");
  };

  const handleChangeText = (value) => {
    if (value.length === 0) setBorder("#E5E5E5");
    else setBorder("#1A9E75");
    value.length === 10 ? setDisable(false) : setDisable(true);
  };
  const { width } = useWindowDimensions();

  const handleScroll = (e) => {
    const { contentOffset } = e.nativeEvent;
    if (contentOffset.x === 0) setSelected(0);
    else if (contentOffset.x === width) setSelected(1);
    else if (contentOffset.x === width * 2) setSelected(2);
    else if (contentOffset.x === width * 3) setSelected(3);
  };

  const slider = [0, 1, 2, 3];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          alignItems: "center",
          gap: 15,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "62%",
            backgroundColor: "white",
          }}
        >
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={(event) => handleScroll(event)}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                width,
                height: "100%",
                alignItems: "center",
                paddingTop: 40,
                gap: 20,
              }}
              key={1}
            >
              <Image
                style={{ flex: 1 }}
                source={require("../assets/images/onboard1.png")}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#1A9E75",
                    fontSize: 16,
                    textAlign: "center",
                    width: "60%",
                  },
                ]}
              >
                Discover nearby parking spaces in your vicinity!
              </Text>
            </View>
            <View
              style={{
                width,
                height: "100%",
                alignItems: "center",
                paddingTop: 40,
                gap: 20,
              }}
              key={2}
            >
              <Image
                style={{ flex: 1 }}
                source={require("../assets/images/onboard2.png")}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#1A9E75",
                    fontSize: 16,
                    textAlign: "center",
                    width: "60%",
                  },
                ]}
              >
                Reserve Your EV Charging Spot in Seconds"
              </Text>
            </View>
            <View
              style={{
                width,
                height: "100%",
                alignItems: "center",
                paddingTop: 40,
                gap: 20,
              }}
              key={3}
            >
              <Image
                style={{ flex: 1 }}
                source={require("../assets/images/onboard3.png")}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#1A9E75",
                    fontSize: 16,
                    textAlign: "center",
                    width: "60%",
                  },
                ]}
              >
                Grab Your FASTag for a Speedy Commute!
              </Text>
            </View>
            <View
              style={{
                width,
                height: "100%",
                alignItems: "center",
                paddingTop: 40,
                gap: 20,
              }}
              key={4}
            >
              <Image
                style={{ flex: 1 }}
                source={require("../assets/images/onboard4.png")}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.header,
                  {
                    color: "#1A9E75",
                    fontSize: 16,
                    textAlign: "center",
                    width: "60%",
                  },
                ]}
              >
                Revitalize Your Ride with Doorstep Car Wash!
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
              flexDirection: "row",
              justifyContent: "center",
              gap: 5,
              height: 30,
            }}
          >
            {slider.map((item) => (
              <View
                key={item}
                style={selected === item ? styles.selected : styles.dot}
              ></View>
            ))}
          </View>
          <View style={styles.greenContainer}>
            <Text
              style={[
                styles.header,
                {
                  color: "#FFF",
                  fontSize: 18,
                  paddingTop: 3,
                },
              ]}
            >
              Let’s start with phone number
            </Text>
          </View>

          {/* </ImageBackground> */}
        </View>

        <Text style={[styles.header, { width: "90%" }]}>
          Enter your number for verification
        </Text>
        <View style={{ width: "90%", justifyContent: "center" }}>
          <Text
            style={[
              styles.text,
              { position: "absolute", left: 10, zIndex: 5, paddingBottom: 2 },
            ]}
          >
            +91{" "}
            <Text style={{ color: "#AFAFAF", fontSize: 16, marginRight: 10 }}>
              |
            </Text>
          </Text>

          <TextInput
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText(text)}
            maxLength={10}
            style={[
              styles.input,
              {
                borderColor: border,
                left: 5,
              },
            ]}
            placeholder="Enter Your Mobile Number"
          />
        </View>
        <View
          style={{
            width: "90%",
            position: "absolute",
            bottom: 25,
            alignItems: "center",
            gap: 15,
            zIndex: -5,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                width: "60%",
                color: "#858585",
                fontSize: 10,
                textAlign: "center",
              },
            ]}
          >
            By joining Parkqwik you agree with our Terms of services and Privacy
            policy
          </Text>
          <TouchableOpacity
            onPress={handleNavigate}
            style={disbale ? [styles.button, styles.disabled] : styles.button}
          >
            <Text
              style={disbale ? [styles.bold, styles.disabled] : styles.bold}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login1;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  greenContainer: {
    width: "100%",
    backgroundColor: "#1A9E75",
    height: 76,
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#393939",
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    color: "#FFF",
    paddingTop: 2,
    fontSize: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 40,
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
    marginTop: -5,
    backgroundColor: "white",
  },
  button: {
    width: "95%",
    paddingVertical: 7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    zIndex: -5,
  },
  disabled: {
    backgroundColor: "#DFDFDF",
    color: "#9F9F9F",
    pointerEvents: "none",
  },
  selected: {
    width: 8,
    height: 8,
    backgroundColor: "#1A9E75",
    borderRadius: 8,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
});
