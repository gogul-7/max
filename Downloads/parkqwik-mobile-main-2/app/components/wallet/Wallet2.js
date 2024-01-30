import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import AppContext from "../../context/AppContext";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title: "Google Pay",
    value: "googlepay",
    image: require("../assets/images/googlepay.png"),
  },
  {
    id: 2,
    title: "Phone Pe",
    value: "phonepay",
    image: require("../assets/images/phonepay.png"),
  },
  {
    id: 3,
    title: "Paytm",
    value: "paytm",
    image: require("../assets/images/paytm.png"),
  },
  {
    id: 4,
    title: "Mobikwik",
    value: "mobikwik",
    image: require("../assets/images/mobipay.png"),
  },
];

const Wallet2 = () => {
  const { setHeaderNum, amount } = useContext(AppContext);
  const [checked, setChecked] = useState(false);
  const [checkedCard, setCheckedCard] = useState(false);
  const [value, setValue] = useState("first");
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("challan4");
  };

  useEffect(() => {
    setHeaderNum(3);
    return () => {
      setHeaderNum(2);
    };
  }, []);

  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.header]}>Preferred Payment Option</Text>
          <Pressable
            onPress={() => setChecked(!checked)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              marginTop: 10,
            }}
          >
            <View style={{ height: 15 }}>
              <RadioButton
                onPress={() => setChecked(!checked)}
                status={checked ? "checked" : "unchecked"}
                color="#1A9E75"
              />
            </View>
            <View>
              <Text style={[styles.text]}>Merchent 1-Click UPI</Text>
              <Text style={[styles.text, { color: "#A0A0A0" }]}>
                ******1515
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image
                style={{ height: 20, width: 50 }}
                source={require("../assets/images/upi.png")}
              />
            </View>
          </Pressable>
          <View style={{ width: "100%", alignItems: "center", marginTop: 15 }}>
            <View style={[styles.button, { width: 200 }]}>
              <Text
                style={[
                  styles.header,
                  { fontSize: 14, color: "#FFF", paddingTop: 2 },
                ]}
              >
                Pay ₹ 2,869 In Single Click{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={[styles.header]}>UPI</Text>
          {data.map((item) => (
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
              key={item.id}
            >
              <View
                style={
                  item.id !== 4
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 50,
                        marginTop: 10,
                        borderBottomWidth: 1,
                        borderColor: "#F4F4F4",
                      }
                    : {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: 50,
                        marginTop: 10,
                      }
                }
              >
                <View style={{ height: 15 }}>
                  <RadioButton value={item.value} color="#1A9E75" />
                </View>
                <View>
                  <Text style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Image
                    style={{ maxHeight: 38, maxWidth: 50 }}
                    source={item.image}
                  />
                </View>
              </View>
            </RadioButton.Group>
          ))}
        </View>
        <View style={[styles.content, { marginBottom: 100 }]}>
          <Text style={[styles.header]}>Cards</Text>
          <Pressable
            onPress={() => setCheckedCard(!checkedCard)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              marginTop: 10,
              height: 40,
            }}
          >
            <View style={{ height: 15 }}>
              <RadioButton
                status={checkedCard ? "checked" : "unchecked"}
                color="#1A9E75"
              />
            </View>
            <View>
              <Text style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}>
                Debit/Credit Cards
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image
                style={{ height: 25, width: 50 }}
                source={require("../assets/images/greencard.png")}
              />
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.payment}>
        <Text style={[{ fontSize: 20, color: "#393939", paddingTop: 3 }]}>
          ₹ <Text style={[styles.header, { fontSize: 20 }]}>2,869</Text>
        </Text>
        <Pressable style={styles.button} onPress={handleContinue}>
          <Text
            style={[
              styles.bold,
              { color: "#FFF", fontSize: 16, paddingTop: 2 },
            ]}
          >
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
  },
  content: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: 178,
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  payment: {
    position: "absolute",
    height: 60,
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 70,
    },
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
});

export default Wallet2;
