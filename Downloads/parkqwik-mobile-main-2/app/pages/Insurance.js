import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Insurance1 from "../components/insurance/Insurance1";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import Insurance2 from "../components/insurance/Insurance2";
import Insurance3 from "../components/insurance/Insurance3";
import Insurance4 from "../components/insurance/Insurance4";
import Insurance5 from "../components/insurance/Insurance5";
import Insurance7 from "../components/insurance/Insurance7";
import Insurance8 from "../components/insurance/Insurance8";
import Insurance9 from "../components/insurance/Insurance9";
import Insurance10 from "../components/insurance/Insurance10";
import Insurance11 from "../components/insurance/Insurance11";
import Insurance12 from "../components/insurance/Insurance12";
import Insurance13 from "../components/insurance/Insurance13";
import Insurance14 from "../components/insurance/Insurance14";
import Insurance15 from "../components/insurance/Insurance15";
import Insurance16 from "../components/insurance/Insurance16";
import Insurance17 from "../components/insurance/Insurance17";

const InsuranceStack = createStackNavigator();

const Insurance = () => {
  const { setHideHeader } = useContext(AppContext);
  useEffect(() => {
    setHideHeader(true);
    return () => {
      setHideHeader(false);
    };
  });
  return (
    <InsuranceStack.Navigator
      screenOptions={{
        header: () => {
          return null;
        },
      }}
    >
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance1"
        component={Insurance1}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance3"
        component={Insurance3}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance2"
        component={Insurance2}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance4"
        component={Insurance4}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance5"
        component={Insurance5}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Checkout"} />;
          },
        }}
        name="insurance7"
        component={Insurance7}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Payment Options"} />;
          },
        }}
        name="insurance8"
        component={Insurance8}
      />
      <InsuranceStack.Screen name="insurance9" component={Insurance9} />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Personal Details"} />;
          },
        }}
        name="insurance10"
        component={Insurance10}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Add vehicle Details"} />;
          },
        }}
        name="insurance11"
        component={Insurance11}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Select Address"} />;
          },
        }}
        name="insurance12"
        component={Insurance12}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Add Address"} />;
          },
        }}
        name="insurance13"
        component={Insurance13}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Select Vehicle"} />;
          },
        }}
        name="insurance14"
        component={Insurance14}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance15"
        component={Insurance15}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header2 title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance16"
        component={Insurance16}
      />
      <InsuranceStack.Screen
        options={{
          header: () => {
            return <Header2 title={"Vehicle Insurance"} />;
          },
        }}
        name="insurance17"
        component={Insurance17}
      />
    </InsuranceStack.Navigator>
  );
};

export default Insurance;

const Header = ({ title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={handlePress}>
        <Image
          style={{ width: 23, height: 23 }}
          source={require("../assets/images/arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const Header2 = ({ title }) => {
  const navigation = useNavigation();
  const { headData } = useContext(AppContext);

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.headerContainer,
        { flexDirection: "column", height: "auto", paddingBottom: 20, gap: 5 },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          width: "100%",
          height: 60,
        }}
      >
        <Pressable onPress={handlePress}>
          <Image
            style={{ width: 23, height: 23 }}
            source={require("../assets/images/arrowleft.png")}
          />
        </Pressable>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={{
            maxWidth: 35,
            maxHeight: 35,
          }}
          source={headData.image}
        />
        <View>
          <Text style={[styles.header, { fontSize: 12, color: "#A0A0A0" }]}>
            Provider
          </Text>
          <Text style={[styles.header, { marginTop: -5, width: 120 }]}>
            {headData.title}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("insurance15")}
        >
          <Text style={[styles.header, { fontSize: 10, color: "#1A9E75" }]}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    paddingTop: 20,
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingTop: 3,
  },
  container: {
    width: "98%",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    elevation: 3,
    flexDirection: "row",
    gap: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  button: {
    height: 25,
    width: 61,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    position: "absolute",
    right: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 1,
  },
});
