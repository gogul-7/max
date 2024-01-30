import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AppContext from "../../context/AppContext";

const Helmet7 = () => {
  const { setHam } = useContext(AppContext);
  const [border, setBorder] = useState({
    name: "#E5E5E5",
    number: "#E5E5E5",
    address1: "#E5E5E5",
    address2: "#E5E5E5",
    pincode: "#E5E5E5",
    city: "#E5E5E5",
    state: "#E5E5E5",
  });
  const [value, setValue] = useState({
    name: "",
    number: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
  });
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const [alertData, setAlertData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("addressData");

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

  const fetchData = async (text) => {
    try {
      const res = await axios.get(
        `https://api.postalpincode.in/pincode/${text}`
      );
      if (res !== null && res.data[0].Message === "No records found") {
        setAlert2(true);
      } else {
        setAlert2(false);
        setValue({
          ...value,
          ["city"]: res.data[0].PostOffice[0].District,
          ["state"]: res.data[0].PostOffice[0].State,
          ["pincode"]: res.data[0].PostOffice[0].Pincode,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = (text, key) => {
    setBorder({ ...border, [key]: "#1A9E75" });
    if (text.length === 0) setBorder({ ...border, [key]: "#E5E5E5" });
    else {
      setValue({ ...value, [key]: text });
      if (key === "pincode" && text.length === 6) {
        fetchData(text);
      }
    }
  };
  value;

  const handleSave = async () => {
    let allValuesNonEmpty = true;

    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const lengthOfValue = value[key].length;
        if (lengthOfValue === 0) {
          setAlert(true);
          setAlertData(`Please fill all detials.`);
          allValuesNonEmpty = false;
          break;
        }
      }
    }
    if (allValuesNonEmpty) {
      try {
        const arr = data.push(value);
        setData(arr);
        const address = JSON.stringify(data);
        await AsyncStorage.setItem("addressData", address);
        console.log("stored", data);
        setAlertData("Address saved Successfully.");
        setAlert(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAlert = () => {
    if (alertData === "Address saved Successfully.") {
      setAlert(false);
      navigation.navigate("helmet6");
      setHam(true);
    } else setAlert(false);
  };

  const handleBackdrop = () => {
    if (alertData === "Address saved Successfully.") {
      setAlert(false);
      navigation.navigate("helmet6");
      setHam(true);
    } else setAlert(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 20,
        gap: 15,
        paddingBottom: 20,
        backgroundColor: "#FFF",
      }}
      style={{ flex: 1 }}
    >
      <Modal
        isVisible={alert}
        onBackdropPress={handleBackdrop}
        backdropColor="white"
        backdropOpacity={0.2}
        style={{ alignItems: "center" }}
      >
        <View style={styles.alert}>
          <Pressable
            style={{ position: "absolute", right: 10, top: 10, zIndex: 5 }}
            onPress={handleAlert}
          >
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={18} />
          </Pressable>
          <Text style={[styles.header, { width: "auto" }]}>{alertData}</Text>
        </View>
      </Modal>
      <Text style={styles.header}>Full Name*</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "name")}
        style={[styles.input, { borderColor: border.name }]}
        placeholder="Enter your full name"
      />
      <Text style={styles.header}>Mobile Number</Text>
      <View style={{ width: "90%", justifyContent: "center" }}>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => handleChangeText(text, "number")}
          style={[
            styles.input,
            { width: "100%", paddingLeft: 41, borderColor: border.number },
          ]}
          placeholder="| Enter your mobile number"
          maxLength={10}
        />
        <Text style={[styles.text, { position: "absolute", left: 10 }]}>
          +91
        </Text>
      </View>
      <Text style={styles.header}>Address Line 1</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "address1")}
        style={[styles.input, { borderColor: border.address1 }]}
        placeholder="House No / Flat No , Street name"
      />
      <Text style={styles.header}>Address Line 2</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "address2")}
        style={[styles.input, { borderColor: border.address2 }]}
        placeholder="Locality name / Area name"
      />
      <Text style={styles.header}>Pincode</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "pincode")}
        style={[styles.input, { borderColor: border.pincode }]}
        placeholder="Enter your pincode"
        keyboardType="numeric"
        maxLength={6}
      />
      {alert2 && (
        <Text
          style={[
            styles.text,
            { color: "#FF4A4A", width: "90%", marginTop: -10 },
          ]}
        >
          Pincode not found.
        </Text>
      )}
      <Text style={styles.header}>City</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "city")}
        style={[styles.input, { borderColor: border.city }]}
        placeholder="Enter your city"
        value={value.city}
      />
      <Text style={styles.header}>State</Text>
      <TextInput
        onChangeText={(text) => handleChangeText(text, "state")}
        style={[styles.input, { borderColor: border.state }]}
        placeholder="Enter your state"
        value={value.state}
      />
      <Text style={styles.text}>or</Text>
      <View style={styles.button}>
        <Image
          style={{ width: 16, height: 20 }}
          source={require("../assets/images/greenlocation.png")}
        />
        <Text
          style={[
            styles.header,
            { color: "#1A9E75", width: "auto", paddingTop: 2, fontSize: 14 },
          ]}
        >
          Detect Current Location
        </Text>
      </View>
      <TouchableOpacity onPress={handleSave} style={styles.button2}>
        <Text
          style={[
            styles.bold,
            { color: "white", width: "auto", paddingTop: 2, fontSize: 16 },
          ]}
        >
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Helmet7;

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  alert: {
    paddingHorizontal: 40,
    height: 100,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "white",
    borderRadius: 15,
  },
  input: {
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 15,
    fontFamily: "Poppins_400Regular",
    paddingTop: 3,
    marginTop: -5,
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    width: "90%",
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  button2: {
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },
});
