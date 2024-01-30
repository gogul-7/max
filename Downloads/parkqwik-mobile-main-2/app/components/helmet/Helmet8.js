import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import { React, useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";
import AppContext from "../../context/AppContext";

const Helmet8 = () => {
  const [isModalvisible, setModalVisible] = useState(-1);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [alert, setAlert] = useState(false);
  const [value, setValue] = useState({});
  const [disable, setDisable] = useState(false);
  const { setVehicleDetails, vehicleDetails } = useContext(AppContext);
  const handleContinue = () => {
    setVehicleDetails(value);
    navigation.navigate("helmet1");
  };

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

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveData();
    });

    return unsubscribe;
  }, [navigation]);

  const handleSelect = (value) => {
    setValue(value);
    setModalVisible(false);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.navigate("helmet1");
        return true;
      }
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    if (Object.keys(value).length === 0) {
      setDisable(true);
    } else setDisable(false);
  }, [value]);

  const handleDelete = async () => {
    try {
      const arr = data.filter((_, index) => index !== isModalvisible);
      setData(arr);
      const address = JSON.stringify(arr);
      await AsyncStorage.setItem("vehicleData", address);
      setAlert(false);
      handleReload();
      setModalVisible(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <RadioButton.Group value={value}>
        <View style={{ gap: 20 }}>
          {data.map((item, index) => (
            <View key={index} style={styles.card}>
              <RadioButton
                color="#1A9E75"
                uncheckedColor="#1A9E75"
                value={item}
                onPress={() => handleSelect(item)}
              />
              <ImageContainer type={item.type} />
              <View>
                <Text
                  style={{ fontFamily: "Poppins_400Regular", color: "black" }}
                >
                  {item.number}
                </Text>
                <Text
                  style={[
                    styles.header,
                    {
                      color: "#A0A0A0",
                      fontSize: 12,
                      marginTop: -3,
                      width: 120,
                    },
                  ]}
                >
                  {item.type} | {item.fuel}
                </Text>
              </View>

              <View style={styles.menu}>
                <View style={styles.row}>
                  <Image
                    source={require("../assets/images/greenedit.png")}
                    style={{ width: 15, height: 15 }}
                  />
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#1A9E75",
                        fontSize: 12,
                      },
                    ]}
                  >
                    Edit
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </RadioButton.Group>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("helmet5");
        }}
        style={styles.card2}
      >
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            color: "#A0A0A0",
            paddingTop: 2,
          }}
        >
          {" "}
          Tap to add new vehicle
        </Text>
        <FontAwesomeIcon
          icon={"circle-plus"}
          color="rgba(26, 158, 117, 1)"
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleContinue}
        style={disable ? styles.disbaled : styles.button3}
      >
        <Text
          style={
            disable
              ? [
                  styles.bold,
                  {
                    color: "#9F9F9F",
                    fontSize: 16,
                    paddingTop: 1,
                  },
                ]
              : [
                  styles.bold,
                  {
                    color: "#FFF",
                    fontSize: 16,
                    paddingTop: 1,
                  },
                ]
          }
        >
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Helmet8;

const ImageContainer = ({ type }) => {
  if (type === "Car") {
    return (
      <Image
        source={require("../assets/images/car1.png")}
        style={{
          width: 27,
          height: 22,
          marginLeft: -8,
        }}
      />
    );
  }
  if (type === "Bike") {
    return (
      <Image
        source={require("../assets/images/bike2.png")}
        style={{
          width: 18,
          height: 26,
          marginLeft: -5,
        }}
      />
    );
  }
  if (type === "Auto") {
    return (
      <Image
        source={require("../assets/images/auto.png")}
        style={{
          width: 28,
          height: 28,
          marginLeft: -8,
        }}
      />
    );
  }
  if (type === "Bus") {
    return (
      <Image
        source={require("../assets/images/bus.png")}
        style={{
          width: 26,
          height: 26,
          marginLeft: -8,
        }}
      />
    );
  }
  if (type === "Truck") {
    return (
      <Image
        source={require("../assets/images/truck1.png")}
        style={{
          width: 30,
          height: 18,
          marginLeft: -8,
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    paddingTop: 20,
    gap: 20,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  card: {
    width: "90%",
    height: 63,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 13,
  },
  img: {
    width: 26.18,
    height: 22,
    resizeMode: "stretch",
    left: 20,
  },
  menu: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#1A9E75",
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    right: 13,
    top: 17,
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  card2: {
    width: "90%",
    height: 55,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    zIndex: 10,
  },
  delete: {
    height: 172,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 20,
  },
  button: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    flex: 1,
    paddingVertical: 5,
    alignItems: "center",
  },
  button2: {
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    flex: 1,
    paddingVertical: 5,
    alignItems: "center",
    gap: 10,
  },
  button3: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#1A9E75",
    justifyContent: "center",
    paddingVertical: 7,
    borderRadius: 14,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  disbaled: {
    width: "90%",
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    pointerEvents: "none",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
});
