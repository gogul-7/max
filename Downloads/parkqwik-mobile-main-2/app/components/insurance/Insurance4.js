import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { React, useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AppContext from "../../context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fuels = ["Diesel", "Petrol", "Company Fitted CNG", "External CNG Kit"];

const Insurance4 = () => {
  const navigation = useNavigation();
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { vehicleDetails, setVehicleDetails } = useContext(AppContext);

  const handlePress = (value) => {
    setModal1(true);
    setVehicleDetails({ ...vehicleDetails, fuel: value });
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
        <Text style={[styles.header]}>Select Fuel Type</Text>
        <View
          style={{
            width: "90%",
            gap: 10,
          }}
        >
          {fuels.map((item, index) => (
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
      <Modal1 modal1={modal1} setModal1={setModal1} setModal2={setModal2} />
      <Modal2 modal2={modal2} setModal2={setModal2} />
    </View>
  );
};

export default Insurance4;

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
    width: "100%",
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
  modalContainer: {
    width: "100%",
    height: 388,
    backgroundColor: "#FFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
  },
  button: {
    width: "88%",
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 3,
  },
  selected: {
    backgroundColor: "#F0FFFA",
  },
});

const variants = [
  "LDI (1248 CC)",
  "Tour S (1248 cc)",
  "VDI (1248 cc)",
  "VDI AMT (1248 cc)",
  "ZDI (1248 cc)",
  "ZDI+ (1248 cc)",
];

const Modal1 = ({ modal1, setModal1, setModal2 }) => {
  const [selected, setSelected] = useState(-1);
  const { vehicleDetails, setVehicleDetails } = useContext(AppContext);
  const handlePress = () => {
    setModal1(false);
    setModal2(true);
  };

  const handleChange = (index, item) => {
    setSelected(index);
    setVehicleDetails({ ...vehicleDetails, variant: item });
  };

  return (
    <Modal
      isVisible={modal1}
      style={{ margin: 0, justifyContent: "flex-end" }}
      useNativeDriver
      backdropColor="black"
      backdropOpacity={0.2}
    >
      <View style={styles.modalContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Text style={[styles.header]}>Select Car Variant</Text>
          <TouchableOpacity onPress={() => setModal1(false)}>
            <FontAwesomeIcon
              icon={"circle-xmark"}
              color="rgba(26, 158, 117, 1)"
              size={22}
              style={{ right: 5 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "95%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          {variants.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleChange(index, item)}
              key={index}
              style={
                selected === index
                  ? [
                      styles.container,
                      { width: "45%", marginVertical: 5 },
                      styles.selected,
                    ]
                  : [styles.container, { width: "45%", marginVertical: 5 }]
              }
            >
              <Text style={[styles.text]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={[styles.button]} onPress={handlePress}>
          <Text style={[styles.bold, { color: "white" }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const year = ["2023", "2022", "2021", "2020", "2019", "2018"];

const Modal2 = ({ modal2, setModal2 }) => {
  const [selected, setSelected] = useState(-1);
  const { vehicleDetails, setVehicleDetails } = useContext(AppContext);
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("recentSearch");

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

  const handleSave = async () => {
    const isAlready = data.find(
      (item) => item.number === vehicleDetails.number
    );
    if (!isAlready) {
      try {
        const arr = data.push(vehicleDetails);
        setData(arr);
        const searchData = JSON.stringify(data);
        await AsyncStorage.setItem("recentSearch", searchData);
        console.log("stored", data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = (index, item) => {
    setSelected(index);
    setVehicleDetails({ ...vehicleDetails, regYear: item });
  };

  const handleContinue = () => {
    handleSave();
    setModal2(false);
    navigation.navigate("insurance5");
  };

  return (
    <Modal
      isVisible={modal2}
      style={{ margin: 0, justifyContent: "flex-end" }}
      useNativeDriver
      backdropColor="black"
      backdropOpacity={0.2}
    >
      <View style={styles.modalContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Text style={[styles.header]}>Select Car Registration Year</Text>
          <TouchableOpacity onPress={() => setModal2(false)}>
            <FontAwesomeIcon
              icon={"circle-xmark"}
              color="rgba(26, 158, 117, 1)"
              size={22}
              style={{ right: 5 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "95%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 10,
          }}
        >
          {year.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleChange(index, item)}
              key={index}
              style={
                selected === index
                  ? [
                      styles.container,
                      { width: "45%", marginVertical: 5 },
                      styles.selected,
                    ]
                  : [styles.container, { width: "45%", marginVertical: 5 }]
              }
            >
              <Text style={[styles.text]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={handleContinue} style={[styles.button]}>
          <Text style={[styles.bold, { color: "white" }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
