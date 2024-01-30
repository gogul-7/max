import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { React, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const models = [
  "Alto",
  "Alto 800",
  "Alto K10",
  "Baleno",
  "Ertiga",
  "Swift",
  "Swift Dzire",
  "Wagon R",
  "Celerio",
  "Ciaz",
  "Dzire",
  "Eeco",
  "Fronz",
  "Ignis",
];

const Insurance2 = () => {
  const navigation = useNavigation();
  const { vehicleDetails, setVehicleDetails } = useContext(AppContext);

  const handlePress = (value) => {
    setVehicleDetails({ ...vehicleDetails, model: value });
    navigation.navigate("insurance4");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 30,
          gap: 15,
        }}
      >
        <View style={{ width: "90%", justifyContent: "center" }}>
          <TextInput style={styles.input} placeholder="Search Your Car Brand" />
          <Image
            style={styles.search}
            source={require("../assets/images/search.png")}
          />
        </View>
        <Text style={[styles.header]}>Select Your Car Model</Text>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          {models.map((item, index) => (
            <TouchableOpacity
              onPress={() => handlePress(item)}
              key={index}
              style={styles.container}
            >
              <Text style={[styles.text]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Insurance2;

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
  container: {
    width: "45%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 59,
    elevation: 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#393939",
    width: "90%",
  },
});
