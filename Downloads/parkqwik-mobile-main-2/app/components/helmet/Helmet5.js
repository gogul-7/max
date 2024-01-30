import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  BackHandler,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useContext, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const types = [
  "Diesel",
  "Petrol",
  "Company Fitted CNG",
  "External CNG",
  "Electric Vehicle",
];

const cardDetails = [
  {
    id: 1,
    type: "Car",
    image: require("../assets/images/car1.png"),
    width: 26.18,
    height: 22,
  },
  {
    id: 2,
    type: "Bike",
    image: require("../assets/images/bike2.png"),
    width: 18,
    height: 26,
  },
  {
    id: 3,
    type: "Auto",
    image: require("../assets/images/auto.png"),
    width: 28,
    height: 28,
  },
  {
    id: 4,
    type: "Bus",
    image: require("../assets/images/bus.png"),
    width: 26,
    height: 26,
  },
  {
    id: 5,
    type: "Truck",
    image: require("../assets/images/truck1.png"),
    width: 30,
    height: 18,
  },
];

export default function Helmet5() {
  const { setVehicleDetails, vehicleDetails } = useContext(AppContext);
  const [disable, setDisable] = useState(false);
  const [vnum, setVnum] = useState("");
  const [alert, setAlert] = useState(false);
  const input = useRef();
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({
    type: "",
    number: "",
    fuel: "",
  });
  const [data, setData] = useState([]);

  const validation = (value) => {
    let pattern = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
    return pattern.test(value);
  };

  // console.log(details);

  useEffect(() => {
    if (
      Object.values(details).every((value) => value !== "") &&
      validation(details.number)
    ) {
      setDisable(true);
    } else setDisable(false);
  }, [details]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setVehicleDetails({});
      }
    );

    return () => {
      backHandler.remove();
    };
  }, [setVehicleDetails]);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("vehicleData");

        if (storedData !== null) {
          const parsedDataArray = JSON.parse(storedData);
          setData(parsedDataArray);
        } else {
          console.log("No array found in local storage.");
        }
      } catch (error) {
        console.error("Error retrieving array:", error);
      }
    };
    retrieveData();
  }, [setData]);

  useEffect(() => {
    if (Object.keys(vehicleDetails).length !== 0) {
      setSelected(vehicleDetails.type);
      setVnum(vehicleDetails.vnumber);
    }
  }, [vehicleDetails]);

  const handleChange = (text) => {
    if (text.length === 0) {
      input.current.setNativeProps({
        style: { borderColor: "#E5E5E5" },
      });
      setAlert(false);
    } else {
      if (validation(text)) {
        input.current.setNativeProps({
          style: { borderColor: "#1A9E75" },
        });
        setAlert(false);
        setDetails({ ...details, number: vnum });
      } else {
        input.current.setNativeProps({
          style: { borderColor: "#FC6969" },
        });
        setAlert(true);
      }
    }
    setDetails({ ...details, number: text });
  };

  const handleSubmit = async () => {
    try {
      const arr = data.push(details);
      setData(arr);
      const address = JSON.stringify(data);
      await AsyncStorage.setItem("vehicleData", address);
      console.log("stored", data);
      setDisable;
    } catch (error) {
      console.log(error);
    }

    navigation.navigate("helmet8");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          paddingTop: 15,
          gap: 15,
        }}
      >
        <Text style={styles.vehicletype}>Vehicle Type</Text>
        <View style={{ height: 65, width: "100%" }}>
          <ScrollView
            contentContainerStyle={styles.vehiclef}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {cardDetails.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={selected === item.type ? styles.red : styles.button}
                onPress={() => {
                  setSelected(item.type);
                  setDetails({
                    ...details,
                    type: item.type,
                  });
                }}
              >
                <Image
                  style={{
                    height: item.height,
                    width: item.width,
                  }}
                  source={item.image}
                />

                <Text style={styles.types2}>{item.type}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.vehicletype}>Vehicle Number</Text>

        <TextInput
          ref={input}
          style={styles.vnumber}
          placeholder="Enter vehicle number"
          maxLength={10}
          autoCapitalize="characters"
          placeholderTextColor={"#AFAFAF"}
          value={details.number}
          onChangeText={(text) => handleChange(text)}
        ></TextInput>
        {alert && (
          <Text
            style={[
              styles.types2,
              { color: "#FC6969", fontSize: 12, width: "88%", marginTop: -15 },
            ]}
          >
            Invalid format
          </Text>
        )}
        <Text style={[styles.vehicletype]}>Vehicle Number</Text>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={[
            styles.vnumber,
            {
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              borderColor: details.fuel ? "#1A9E75" : "#E5E5E5",
            },
          ]}
        >
          {details.fuel ? (
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
              }}
            >
              {details.fuel}
            </Text>
          ) : (
            <Text
              style={{
                color: "#AFAFAF",
                fontFamily: "Poppins_400Regular",
              }}
            >
              Select Fuel Type
            </Text>
          )}
          <FontAwesomeIcon
            icon={"angle-down"}
            color="rgba(57, 57, 57, 1)"
            size={12}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit}
          style={disable ? styles.btn : styles.disbaled}
        >
          <Text
            style={
              disable
                ? {
                    color: "#FFF",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 16,
                  }
                : {
                    color: "#9F9F9F",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 16,
                  }
            }
          >
            Save
          </Text>
        </TouchableOpacity>
        <Modal
          useNativeDriver
          style={{ margin: 0, justifyContent: "flex-end" }}
          isVisible={modal}
          backdropOpacity={0.3}
          useNativeDriverForBackdrop
        >
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{ position: "absolute", right: 20, top: 20, zIndex: 5 }}
            >
              <FontAwesomeIcon
                icon={"circle-xmark"}
                size={22}
                color="#1A9E75"
              />
            </TouchableOpacity>
            <Text style={[styles.headerT, { fontSize: 16 }]}>
              Select Fuel Type
            </Text>
            <RadioButton.Group
              onValueChange={(value) => {
                setDetails({ ...details, fuel: value });
                setModal(false);
              }}
              value={details.fuel}
            >
              <View style={{ gap: 5 }}>
                {types.map((item, index) => (
                  <View key={index} style={{ flexDirection: "row" }}>
                    <View style={{ height: 15 }}>
                      <RadioButton
                        value={item}
                        color="#1A9E75"
                        uncheckedColor="#1A9E75"
                      />
                    </View>
                    <View>
                      <Text
                        style={[styles.text, { paddingTop: 7, marginLeft: 5 }]}
                      >
                        {item}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </RadioButton.Group>
          </View>
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: "stretch",
    height: 5,
    width: 5,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    width: 360,
    height: 50,
    backgroundColor: "green",
  },
  header1: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  vehicletype: {
    fontFamily: "Poppins_500Medium",
    width: "92%",
    color: "black",
    fontSize: 16,
    marginTop: 5,
    marginBottom: -5,
  },
  vehiclef: {
    gap: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  red: {
    backgroundColor: "#f2fffb",
    shadowColor: "black",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: 100,
    gap: 5,
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#FFF",
    shadowColor: "black",
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    width: 100,
    gap: 5,
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 15,
  },
  types2: {
    color: "#393939",
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
  },
  vnumber: {
    borderRadius: 8,
    borderColor: "#E5E5E5",
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "Poppins_400Regular",
    paddingHorizontal: 10,
    borderWidth: 1,
    width: "90%",
    paddingTop: 2,
    height: 40,
  },
  save: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A9E75",
    top: 10,
    left: 80,
    borderWidth: 1,
    height: 50,
    width: 200,
    borderRadius: 15,
    marginBottom: 30,
  },
  savet: {
    color: "#FFF",
  },
  task: {
    padding: 10,
    height: 80,
    left: 30,
    width: 300,
    borderColor: "lightgrey",
    borderWidth: 1,
    paddingLeft: 6,
    borderRadius: 15,
    top: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 12,
    shadowColor: "grey",
    elevation: 10,
  },
  itemList: {
    fontSize: 19,
    color: "black",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  headerT: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  modal: {
    backgroundColor: "#FFF",
    height: 243,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  taskButtons: {
    flexDirection: "row",
    gap: 0,
  },
  editButton: {
    padding: 6,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    color: "green",
    borderColor: "green",
    fontWeight: "bold",
    fontSize: 10,
    width: 51,
    height: 30,
  },
  deleteButton: {
    padding: 6,
    width: 51,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    color: "red",
    fontWeight: "bold",
    fontSize: 10,
  },
  btn: {
    width: 317,
    height: 40,
    backgroundColor: "#1A9E75",
    alignSelf: "center",
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  disbaled: {
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    position: "absolute",
    bottom: 25,
    pointerEvents: "none",
  },
});
