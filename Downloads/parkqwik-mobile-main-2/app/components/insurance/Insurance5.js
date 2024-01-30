import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import Layer from "../assets/logos/Search.png";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Insurance6 from "./Insurance6";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const comprehensive = [
  {
    id: 1,
    logo: require("../assets/logos/oriental.png"),
    idv: "1,15,193",
    amount: "2,431",
    desc: "24X7 Roadside Assistance..",
    claim: "94",
  },
  {
    id: 2,
    logo: require("../assets/logos/shriram.png"),
    idv: "1,00,342",
    amount: "2,608",
    desc: "Accidental Damage to the.. ",
    claim: "96",
  },
  {
    id: 3,
    logo: require("../assets/logos/kotak.png"),
    idv: "1,14,736",
    amount: "2,746",
    desc: "Accidental Damage to the.. ",
    claim: "98",
  },
  {
    id: 4,
    logo: require("../assets/logos/bajaj1.png"),
    idv: "1,43,775",
    amount: "3,465",
    desc: "24X7 Roadside Assistance..",
    claim: "98.5",
  },
];

const thirdparty = [
  {
    id: 1,
    logo: require("../assets/logos/oriental.png"),
    amount: "2,094",
  },
  {
    id: 2,
    logo: require("../assets/logos/kotak.png"),
    amount: "2,094",
  },
  {
    id: 3,
    logo: require("../assets/logos/bajaj.png"),
    amount: "2,094",
  },
  {
    id: 4,
    logo: require("../assets/logos/zuno.png"),
    amount: "2,094",
  },
  {
    id: 5,
    logo: require("../assets/logos/royal.png"),
    amount: "1,994",
  },
  {
    id: 6,
    logo: require("../assets/logos/reliance.png"),
    amount: "1,994",
  },
];

const Insurance5 = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const { vehicleDetails } = useContext(AppContext);

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        alignItems: "center",
        flex: 1,
        gap: 15,
      }}
    >
      <View
        style={{
          minheight: 100,
          paddingBottom: 15,
          backgroundColor: "#1A9E75",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "90%",
            paddingVertical: 10,
            backgroundColor: "#FFF",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            paddingHorizontal: 15,
            gap: 10,
          }}
        >
          <Image
            source={require("../assets/logos/car1.png")}
            style={{ width: 37.39, height: 28, marginBottom: 4 }}
          />
          <View>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 16,
                color: "#393939",
                marginBottom: -3,
              }}
            >
              {vehicleDetails.number}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 12,
                color: "#A0A0A0",
                width: 170,
              }}
            >
              {vehicleDetails.brand} {vehicleDetails.model} |{" "}
              {vehicleDetails.fuel} | {vehicleDetails.regYear}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("insurance1")}
            style={{
              width: 61,
              height: 25,
              borderWidth: 1,
              position: "absolute",
              right: 15,
              borderColor: "#1A9E75",
              borderRadius: 15,
              backgroundColor: "#F0FFFA",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#1A9E75",
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
                paddingTop: 1,
              }}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Image source={Layer} style={styles.searchIcon} />
        <TextInput
          placeholder="Search a plan or enter amount"
          placeholderTextColor="#A0A0A0"
          style={{
            height: 40,
            width: "90%",
            fontFamily: "Poppins_400Regular",
            paddingTop: 3,
          }}
        />
      </View>
      <Tab.Navigator
        initialRouteName="Item1"
        style={{ width: "100%", height: "100%" }}
        screenOptions={{
          tabBarPressColor: "#FFF",
          tabBarGap: 0,
          tabBarInactiveTintColor: "black",
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: "none",
            fontFamily: "Poppins_500Medium",
            top: 3,
            margin: 0,
          },
          tabBarStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E6E6E6",
            shadowColor: "#FFF",
          },
          tabBarIndicatorStyle: { borderWidth: 1, borderColor: "#1A9E75" },
        }}
      >
        <Tab.Screen
          name="Item1"
          component={Item1Screen}
          options={{
            tabBarLabel: "Comprehensive Plans",
            tabBarIndicatorStyle: {
              borderWidth: 2,
              borderColor: "#1A9E75",
              borderTopRightRadius: 3,
              borderTopLeftRadius: 3,
            },
          }}
        />
        <Tab.Screen
          name="Item2"
          component={Item2Screen}
          options={{
            tabBarLabel: "Third Party Plans",
            tabBarIndicatorStyle: {
              borderWidth: 2,
              borderColor: "#1A9E75",
              borderTopStartRadius: 5,
              borderTopRightRadius: 5,
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const Item1Screen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#FFF",
        alignItems: "center",
        paddingBottom: 30,
        paddingTop: 15,
        gap: 10,
      }}
    >
      <Insurance6 show={isModalVisible} setShow={setModalVisible} />
      {comprehensive.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.card}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={item.logo} style={styles.oriental} />
            <View>
              <Text
                style={[
                  styles.header,
                  { fontSize: 12, color: "#8E8E8E", marginBottom: -3 },
                ]}
              >
                IDV: ₹ {item.idv}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 10,
                  color: "#00A638",
                }}
              >
                {item.claim}% Claims Settled
              </Text>
            </View>

            <Text
              style={{
                color: "black",
                fontSize: 20,
                position: "absolute",
                right: 0,
              }}
            >
              ₹ <Text style={styles.header}>{item.amount}</Text>
            </Text>
          </View>
          <View style={styles.line} />
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "#393939",
                paddingTop: 2,
              }}
            >
              {item.desc}
              <Text style={{ color: "#1A9E75" }}>See More</Text>
            </Text>
            <FontAwesomeIcon
              style={{ position: "absolute", right: 0 }}
              icon={"angle-right"}
              color="#1A9E75"
            />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const Item2Screen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#FFF",
        alignItems: "center",
        paddingBottom: 30,
        paddingTop: 15,
        gap: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      {thirdparty.map((item) => (
        <View
          key={item.id}
          style={[
            styles.card,
            { flexDirection: "row", alignItems: "center", gap: 20 },
          ]}
        >
          <Image source={item.logo} style={styles.oriental} />
          <Text
            style={[
              styles.header,
              { color: "#8E8E8E", fontSize: 12, paddingTop: 2 },
            ]}
          >
            Third Party
          </Text>
          <Text style={{ color: "#393939", fontSize: 20, marginTop: 3 }}>
            ₹ <Text style={[styles.header]}>{item.amount}</Text>
          </Text>
          <FontAwesomeIcon
            style={{ position: "absolute", right: 15 }}
            icon={"angle-right"}
            color="#1A9E75"
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Insurance5;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 9,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "90%",
    height: 40,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  line: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#E6E6E6",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  oriental: {
    width: 87,
    height: 34,
  },
  modal: {
    top: "50%",
    padding: 20,
    shadowColor: "black",
    elevation: 10,
    height: "90%",
    backgroundColor: "#FFF",
    width: "100%",
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "black",
  },
  card: {
    width: "90%",
    gap: 15,
    borderRadius: 15,
    backgroundColor: "#FFF",
    elevation: 3,
    padding: 17,
  },
});
