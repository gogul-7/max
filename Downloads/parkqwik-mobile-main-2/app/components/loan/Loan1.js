import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const Loan1 = () => {
  const navigation = useNavigation();
  const { searchKey, setSearchKey, setHeadData } = useContext(AppContext);
  useEffect(() => {
    return () => {
      setSearchKey("");
    };
  }, []);
  const handlePress = (value) => {
    navigation.navigate("loan2");
    setHeadData(value);
  };

  const waterBoard = [
    {
      id: 1,
      name: "121 Finance Private Limited",
      image: require("../assets/images/121.png"),
    },
    {
      id: 2,
      name: "Aadhar Housing Finance Ltd",
      image: require("../assets/images/aadhar.png"),
    },
    {
      id: 3,
      name: "Aavas Financiers Limited",
      image: require("../assets/images/aayas.png"),
    },
    {
      id: 4,
      name: "Adani Capital Private Limited",
      image: require("../assets/images/adani.png"),
    },
    {
      id: 5,
      name: "Adani Housing Finance",
      image: require("../assets/images/adanih.png"),
    },
    {
      id: 6,
      name: "APAC Financial Services Pvt Ltd",
      image: require("../assets/images/apacfin.png"),
    },
    {
      id: 7,
      name: "ARTH",
      image: require("../assets/images/arth.png"),
    },
    {
      id: 8,
      name: "AU Small Finance Bank Limited",
      image: require("../assets/images/au.png"),
    },
    {
      id: 9,
      name: "Bajaj Finance Limited",
      image: require("../assets/images/bajaj.png"),
    },
    {
      id: 10,
      name: "DMI Finance Private Limited",
      image: require("../assets/images/dmi.png"),
    },
    {
      id: 11,
      name: "HDB Financial Services",
      image: require("../assets/images/adanih.png"),
    },
    {
      id: 12,
      name: "IDFC FIRST Bank Limited",
      image: require("../assets/images/idfc.png"),
    },
  ];

  return (
    <View
      style={{
        alignItems: "center",
        gap: 15,
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ width: "90%" }}>
        <Text style={[styles.text, { fontSize: 16 }]}>Select Lender</Text>
      </View>
      <ScrollView
        style={{
          width: "100%",
          paddingTop: 10,
        }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
          paddingBottom: 20,
        }}
      >
        {searchKey.length !== 0
          ? waterBoard
              .filter((data) =>
                data.name.toLowerCase().includes(searchKey.toLowerCase())
              )
              .map((item) => (
                <Pressable
                  onPress={() => handlePress(item)}
                  key={item.id}
                  style={styles.container}
                >
                  <Image style={styles.image} source={item.image} />
                  <Text
                    style={[styles.text, { maxWidth: "70%", marginTop: 3 }]}
                  >
                    {item.name}
                  </Text>
                  <FontAwesomeIcon
                    style={{ position: "absolute", right: 15 }}
                    icon={"angle-right"}
                    color="#1A9E75"
                    size={18}
                  />
                </Pressable>
              ))
          : waterBoard.map((item) => (
              <Pressable
                onPress={() => handlePress(item)}
                key={item.id}
                style={styles.container}
              >
                <Image style={styles.image} source={item.image} />
                <Text style={[styles.text, { maxWidth: "70%", marginTop: 3 }]}>
                  {item.name}
                </Text>
                <FontAwesomeIcon
                  style={{ position: "absolute", right: 15 }}
                  icon={"angle-right"}
                  color="#1A9E75"
                  size={18}
                />
              </Pressable>
            ))}
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            gap: 5,
            bottom: 10,
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text style={[styles.text, { fontSize: 12, marginTop: 4 }]}>
            Secured by Bharat BillPay
          </Text>
          <Image
            style={{ width: 48, height: 24 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  image: {
    width: 35,
    height: 35,
  },
});

export default Loan1;
