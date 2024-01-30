import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const transactions = [
  {
    id: 1,
    image: require("../assets/images/airtel.png"),
    title: "Airtel Prepaid",
    amount: "839",
    details: "25 Oct 2023 at 10:30 AM",
    succes: true,
  },
  {
    id: 2,
    image: require("../assets/images/greenfast.png"),
    title: "FASTag Recharge",
    amount: "600",
    details: "20 Oct 2023 at 11:24 AM",
    succes: true,
  },
  {
    id: 3,
    image: require("../assets/images/airtel.png"),
    title: "Airtel Prepaid",
    amount: "839",
    details: "25 July 2023 at 10:00 AM",
    succes: false,
  },
];

const Transaction1 = () => {
  const { setTransData } = useContext(AppContext);
  const navigation = useNavigation();

  const handlePress = (data) => {
    setTransData(data);
    data.succes ? navigation.navigate("trans2") : navigation.navigate("trans3");
  };

  return (
    <View
      style={{
        paddingTop: 15,
        alignItems: "center",
        gap: 15,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{ width: "90%", justifyContent: "center", marginBottom: 10 }}
      >
        <TextInput style={styles.input} placeholder="Search Transactions" />
        <Image
          style={styles.search}
          source={require("../assets/images/search.png")}
        />
      </View>
      {transactions.map((data) => (
        <TouchableOpacity
          onPress={() => handlePress(data)}
          key={data.id}
          style={styles.container}
        >
          <Image source={data.image} style={{ width: 25, height: 25 }} />
          <View>
            <Text style={[styles.text, { fontSize: 16 }]}>{data.title}</Text>
            <Text
              style={[
                styles.text,
                { fontSize: 12, color: "#A0A0A0", marginTop: -3 },
              ]}
            >
              {data.details}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              right: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={
                !data.succes
                  ? { color: "#A0A0A0" }
                  : { color: "rgba(0, 166, 56, 1)" }
              }
            >
              ₹ <Text style={styles.bold}>{data.amount}</Text>
            </Text>
            {!data.succes && (
              <Text
                style={[
                  styles.bold,
                  { fontSize: 10, color: "#FF4A4A", marginTop: -5 },
                ]}
              >
                Failed
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Transaction1;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    elevation: 3,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 10 },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    paddingTop: 2,
  },
});
