import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const dataPacks = [
  {
    id: 1,
    validity: "1 Month",
    amount: "99",
    details: "ROI Joy SD Pack",
    type: ["monthly"],
  },
  {
    id: 2,
    validity: "1 Month",
    amount: "179",
    details: "Tamil Joy SD Pack",
    type: ["monthly"],
  },
  {
    id: 3,
    validity: "1 Month",
    amount: "189",
    details: "Kannada Joy SD Pack",
    type: ["monthly"],
  },
  {
    id: 4,
    validity: "1 Month",
    amount: "190",
    details: "Telugu Joy SD Pack",
    type: ["monthly"],
  },
  {
    id: 5,
    validity: "1 Month / NA",
    amount: "200",
    details: "ROI Basic SD Pack or Ala carte Denominaion",
    type: ["monthly"],
  },
  {
    id: 6,
    validity: "1 Month",
    amount: "239",
    details: "Bengali Basic SD Pack",
    type: ["monthly"],
  },
  {
    id: 7,
    validity: "NA",
    amount: "5",
    details: "Ala carte Denominaion",
    type: ["topup"],
  },
  {
    id: 8,
    validity: "NA",
    amount: "10",
    details: "Ala carte Denominaion",
    type: ["topup"],
  },
  {
    id: 9,
    validity: "NA",
    amount: "20",
    details: "Ala carte Denominaion",
    type: ["topup"],
  },
  {
    id: 10,
    validity: "NA",
    amount: "25",
    details: "Ala carte Denominaion",
    type: ["topup"],
  },
  {
    id: 11,
    validity: "NA",
    amount: "30",
    details: "Ala carte Denominaion",
    type: ["topup"],
  },
  {
    id: 12,
    validity: "NA",
    amount: "35",
    details: "Ala carte Denominaion",
    type: ["topup"],
  },
  {
    id: 13,
    validity: "3 Months",
    amount: "559",
    details: "Odia Basic SD Pack",
    type: ["3month"],
  },
  {
    id: 14,
    validity: "3 Months",
    amount: "569",
    details:
      "Tamil Basic SD Pack or Bengali Basic SD Pack or Marathi Basic SD Pack",
    type: ["3month"],
  },
  {
    id: 15,
    validity: "3 Months",
    amount: "570",
    details: "ROI Basic SD Pack",
    type: ["3month"],
  },
  {
    id: 16,
    validity: "3 Months",
    amount: "599",
    details: "Malayalam Basic SD Pack",
    type: ["3month"],
  },
  {
    id: 17,
    validity: "3 Months",
    amount: "619",
    details: "Kannada Basic SD Pack",
    type: ["3month"],
  },
  {
    id: 18,
    validity: "3 Months",
    amount: "620",
    details: "Telugu Basic SD Pack",
    type: ["3month"],
  },
];

const Dth3 = () => {
  const [searchKey, setSearchKey] = useState();
  const [type, setType] = useState("monthly");
  const { setAmount } = useContext(AppContext);
  const navigation = useNavigation();

  const handleChange = (text) => {
    setSearchKey(text);
  };

  const handleSelect = (value) => {
    setAmount(value);
    navigation.navigate("dth4");
  };

  const handlePress = (value) => {
    setType(value);
  };
  return (
    <View
      style={{
        flex: 1,
        gap: 15,
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Search a plan or enter amount"
          keyboardType="numeric"
        />
        <Image
          style={styles.search}
          source={require("../assets/images/search.png")}
        />
      </View>
      {!searchKey && (
        <View style={styles.header}>
          <Pressable
            onPress={() => handlePress("monthly")}
            style={type === "monthly" && styles.selected}
          >
            <Text style={styles.text}>Monthly Pack</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("topup")}
            style={type === "topup" && styles.selected}
          >
            <Text style={styles.text}>Top Up Packs</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress("3month")}
            style={type === "3month" && styles.selected}
          >
            <Text style={styles.text}>3 Month Pack</Text>
          </Pressable>
        </View>
      )}
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {searchKey
          ? dataPacks
              .filter((item) => item.amount.includes(searchKey))
              .map((item) => (
                <Pressable
                  onPress={() => handleSelect(item.amount)}
                  key={item.id}
                  style={styles.container}
                >
                  <View style={styles.topPart}>
                    <View>
                      <Text
                        style={[
                          styles.text,
                          { color: "#8E8E8E", fontSize: 12 },
                        ]}
                      >
                        Validity
                      </Text>
                      <Text style={styles.text}>{item.validity}</Text>
                    </View>
                    <Text style={[styles.text, { fontSize: 20 }]}>
                      ₹ {item.amount}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Text style={[styles.text, { width: "90%" }]}>
                      {item.details.length > 60
                        ? `${item.details.slice(0, 60)}...`
                        : item.details}
                      {item.details.length > 60 && (
                        <Text style={styles.greentext}>See More</Text>
                      )}
                    </Text>
                    <FontAwesomeIcon icon={"angle-right"} color="#1A9E75" />
                  </View>
                </Pressable>
              ))
          : dataPacks
              .filter((item) => item.type.includes(type))
              .map((item) => (
                <Pressable
                  onPress={() => handleSelect(item.amount)}
                  key={item.id}
                  style={styles.container}
                >
                  <View style={styles.topPart}>
                    <View>
                      <Text
                        style={[
                          styles.text,
                          { color: "#8E8E8E", fontSize: 12 },
                        ]}
                      >
                        Validity
                      </Text>
                      <Text style={styles.text}>{item.validity}</Text>
                    </View>
                    <Text style={[styles.text, { fontSize: 20 }]}>
                      ₹ {item.amount}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <Text style={[styles.text, { width: "90%" }]}>
                      {item.details.length > 60
                        ? `${item.details.slice(0, 60)}...`
                        : item.details}
                      {item.details.length > 60 && (
                        <Text style={styles.greentext}>See More</Text>
                      )}
                    </Text>
                    <FontAwesomeIcon icon={"angle-right"} color="#1A9E75" />
                  </View>
                </Pressable>
              ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 10 },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  greentext: {
    fontFamily: "Poppins_400Regular",
    color: "#1A9E75",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E6E6E6",
    width: "90%",
  },
  selected: {
    borderBottomWidth: 2,
    paddingBottom: 3,
    borderBottomColor: "#1A9E75",
  },
  container: {
    marginTop: 5,
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginBottom: 15,
    gap: 8,
    elevation: 3,
  },
  topPart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#E6E6E6",
  },
});

export default Dth3;
