import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  BackHandler,
  TouchableWithoutFeedback,
} from "react-native";
import { React, useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import AppContext from "../../context/AppContext";

const Vehicle2 = () => {
  const [isModalvisible, setModalVisible] = useState(-1);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [alert, setAlert] = useState(false);
  const { setClient } = useContext(AppContext);

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

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.navigate("Home");
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

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

  const handleEdit = (value) => {
    setClient(value);
    setModalVisible(-1);
    navigation.navigate("vehicle1");
  };

  return (
    <TouchableWithoutFeedback onPress={() => setModalVisible(-1)}>
      <SafeAreaView style={styles.fullscreen}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  color: "#393939",
                  fontSize: 16,
                }}
              >
                {item.rc_number}
              </Text>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                    marginTop: -3,
                    width: 210,
                  },
                ]}
              >
                {item.maker_model} | {item.fuel_type}
              </Text>
            </View>
            <View style={styles.greenCard}>
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 12,
                    color: "#A0A0A0",
                  }}
                >
                  Owner’s Name
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    color: "#393939",
                  }}
                >
                  {item.owner_name.split(" ").splice(0, 2).join(" ")}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    fontSize: 12,
                    color: "#A0A0A0",
                  }}
                >
                  Registered On
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_500Medium",
                    color: "#393939",
                  }}
                >
                  {item.registration_date.slice(8)}{" "}
                  {item.registration_date.slice(5, 7)}{" "}
                  {item.registration_date.slice(0, 4)}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{ position: "absolute", right: 10, top: 15 }}
              onPress={() => setModalVisible(index)}
            >
              <FontAwesomeIcon icon={"ellipsis-vertical"} />
            </TouchableOpacity>
            {isModalvisible === index && (
              <View
                style={{
                  height: 75,
                  width: 122,
                  backgroundColor: "white",
                  borderRadius: 15,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  shadowColor: "black",
                  elevation: 10,
                  position: "absolute",
                  justifyContent: "space-evenly",
                  gap: 5,
                  zIndex: 200,
                  right: 10,
                  top: 5,
                }}
              >
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <Image
                    style={{ width: 18, height: 18 }}
                    source={require("../assets/images/edit.png")}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,
                      color: "black",
                    }}
                    onPress={() => handleEdit(item.client_id)}
                  >
                    Edit
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
                >
                  <Image
                    style={{ width: 18, height: 18 }}
                    source={require("../assets/images/delete.png")}
                  ></Image>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: 12,

                      paddingTop: 2,
                    }}
                    onPress={() => {
                      setAlert(true);
                    }}
                  >
                    Delete
                  </Text>
                </View>
              </View>
            )}
          </View>
        ))}
        <Modal
          isVisible={alert}
          style={{ justifyContent: "flex-end", margin: 0 }}
          backdropColor="#B1B1B1"
          backdropOpacity={0.5}
        >
          <View style={styles.delete}>
            <TouchableOpacity
              onPress={() => setAlert(false)}
              style={{ position: "absolute", right: 20, top: 20 }}
            >
              <FontAwesomeIcon
                icon={"circle-xmark"}
                color="#1A9E75"
                size={20}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.header,
                { color: "#393939", paddingTop: 2, fontSize: 16 },
              ]}
            >
              Delete this vehicle?
            </Text>
            <Text style={[styles.text, { color: "#A0A0A0", paddingTop: 2 }]}>
              Are you sure, you want to delete it?
            </Text>
            <View
              style={[styles.row, { width: "90%", marginTop: 25, gap: 15 }]}
            >
              <TouchableOpacity
                onPress={() => setAlert(false)}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.bold,
                    {
                      color: "#1A9E75",
                      width: "auto",
                      paddingTop: 2,
                      fontSize: 14,
                    },
                  ]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete} style={styles.button2}>
                <Text
                  style={[
                    styles.bold,
                    {
                      color: "white",
                      width: "auto",
                      marginTop: 3,
                      fontSize: 14,
                    },
                  ]}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => navigation.navigate("vehicle3")}
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Vehicle2;

const ImageContainer = ({ type }) => {
  if (type === "Car") {
    return (
      <Image
        source={require("../assets/images/car1.png")}
        style={{
          width: 27,
          height: 22,
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
          marginLeft: 5,
          marginRight: 5,
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
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    paddingBottom: 15,
    elevation: 5,
    alignSelf: "center",
    borderRadius: 15,
    padding: 20,
    gap: 13,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },

  greenCard: {
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    height: 57,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  img: {
    width: 26.18,
    height: 22,
    resizeMode: "stretch",
    left: 20,
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
  delete: {
    height: 172,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 20,
  },
});
