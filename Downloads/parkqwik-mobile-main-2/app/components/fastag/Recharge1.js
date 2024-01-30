import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../context/AppContext";
import { useNavigation } from "@react-navigation/native";

const banks = [
  {
    id: 1,
    name: "HDFC Bank",
    image: require("../assets/images/hdfc.png"),
  },
  {
    id: 2,
    name: "IDFC Bank",
    image: require("../assets/images/idfc2.png"),
  },
  {
    id: 3,
    name: "Kotak Mahindra Bank",
    image: require("../assets/images/kotak.png"),
  },
  {
    id: 4,
    name: "Karur Vysya Bank",
    image: require("../assets/images/kvb.png"),
  },
  {
    id: 5,
    name: "South Indian Bankk",
    image: require("../assets/images/south.png"),
  },
  {
    id: 6,
    name: "Union Bank of India",
    image: require("../assets/images/union.png"),
  },
  {
    id: 7,
    name: "ICICI Bank",
    image: require("../assets/images/icici.png"),
  },
  {
    id: 8,
    name: "Paytm Payments Bank",
    image: require("../assets/images/paytm.png"),
  },
  {
    id: 9,
    name: "Indian Overseas Bank",
    image: require("../assets/images/iob.png"),
  },
  {
    id: 10,
    name: "Yes Bank",
    image: require("../assets/images/yesbank.png"),
  },
  {
    id: 11,
    name: "Indian Bank",
    image: require("../assets/images/indian.png"),
  },
  {
    id: 12,
    name: "IDBI Bank",
    image: require("../assets/images/idbi.png"),
  },
];

const Recharge1 = () => {
  const [searchKey, setSearchKey] = useState();
  const { setHeaderName, setHeadData } = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    setHeaderName("Select Your FASTag Bank");
    return () => {
      setHeaderName("");
    };
  }, []);

  const handleChange = (text) => {
    setSearchKey(text);
  };

  const handleSelect = (value) => {
    setHeadData(value);
    navigation.navigate("recharge2");
  };

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <View
        style={{
          height: 70,
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          placeholder="Search a plan or enter amount"
        />
        <Image
          style={styles.search}
          source={require("../assets/images/search.png")}
        />
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {searchKey
          ? banks
              .filter((item) => item.name.includes(searchKey))
              .map((item) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  key={item.id}
                  style={styles.container}
                >
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={item.image}
                  ></Image>

                  <Text
                    style={[styles.text, { color: "#8E8E8E", fontSize: 12 }]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))
          : banks.map((item) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                key={item.id}
                style={styles.container}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={item.image}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
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
  container: {
    width: "90%",
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: "#E6E6E6",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
});

export default Recharge1;
