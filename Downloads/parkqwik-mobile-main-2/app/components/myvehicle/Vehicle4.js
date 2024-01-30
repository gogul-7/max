import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRcDetails } from "../../store/slices/RcSlice";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Vehicle4 = () => {
  const [alert, setAlert] = useState(false);
  const [display, setDisplay] = useState(true);
  const [isModalvisible, setModalVisible] = useState(-1);
  const input = useRef();
  const [disable, setDisable] = useState(true);
  const [num, setNum] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState([]);
  const [array, setArray] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const handleChangeText = (text) => {
    if (text.length === 0) {
      setAlert(false);
      setDisable(true);
    } else {
      if (validation(text)) {
        setAlert(false);
        setDisable(false);
      } else {
        setAlert(true);
        setDisable(true);
      }
    }
    setNum(text);
  };

  const validation = (value) => {
    let pattern = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
    return pattern.test(value);
  };
  const data = useSelector((state) => state.rcData);

  const handleAdd = () => {
    dispatch(fetchRcDetails(num));
    setDisable(true);
  };

  //   console.log(data);

  const retrieveData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("vehicleData");
      if (storedData !== null) {
        const parsedDataArray = JSON.parse(storedData);
        setArray(parsedDataArray);
      } else {
        console.log("No array found in local storage.");
        setDisplay(true);
      }
    } catch (error) {
      console.error("Error retrieving array:", error);
    }
  };

  useEffect(() => {
    array.length !== 0 ? setDisplay(false) : setDisplay(true);
  }, [array]);

  useEffect(() => {
    retrieveData();
  }, []);

  const handleDelete = async () => {
    try {
      const arr = array.filter((_, index) => index !== isModalvisible);
      setArray(arr);
      const address = JSON.stringify(arr);
      await AsyncStorage.setItem("vehicleData", address);
      setModal2(false);
      setModalVisible(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const value = data.data.data;
    try {
      const arr = array.push(value);
      setArray(arr);
      const address = JSON.stringify(array);
      const data = JSON.stringify(value);
      await AsyncStorage.setItem("vehicleData", address);
      await AsyncStorage.setItem("selectedVehicle", data);
      setModal(false);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data.data !== null) {
      if (data && data.data?.success) setModal(true);
      // else setError(true);
    }
  }, [data]);

  // console.log(data);

  useEffect(() => {
    return () => {
      dispatch(fetchRcDetails(null));
    };
  }, []);

  //   console.log(display);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        paddingTop: 10,
        gap: 15,
        paddingBottom: 20,
      }}
    >
      <View style={[styles.container, { marginTop: 15 }]}>
        <Text style={[styles.header, { color: "#393939", fontSize: 16 }]}>
          Add Your Vehicle
        </Text>
        <Text style={[styles.text, { color: "#A0A0A0", marginTop: -18 }]}>
          The vehicle number should match with your RC document
        </Text>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Eg: ACXXGXXXX"
            placeholderTextColor={"#AFAFAF"}
            style={styles.input}
            ref={input}
            onChangeText={handleChangeText}
            autoCapitalize="characters"
          />
        </View>
        <TouchableOpacity
          style={disable ? styles.disabled : styles.button2}
          onPress={handleAdd}
        >
          <Text
            style={
              disable
                ? [
                    styles.bold,
                    { color: "#9F9F9F", paddingTop: 2, fontSize: 16 },
                  ]
                : [styles.bold, { color: "white", paddingTop: 2, fontSize: 16 }]
            }
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>

      {display ? (
        <>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Image
              style={{ flex: 1 }}
              source={require("../assets/images/vehiclebg.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.header, { color: "#393939", fontSize: 16 }]}>
            No saved Vehicles
          </Text>
          <Text style={[styles.text, { color: "#A0A0A0", marginTop: -18 }]}>
            Add vehicle details in single step
          </Text>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("vehicle2")}
          style={styles.greenContainer}
        >
          <Image
            style={{ width: 30, height: 19 }}
            source={require("../assets/images/greeninsure2.png")}
          />
          <Text style={[styles.text, { color: "#393939", paddingTop: 4 }]}>
            View My Vehicles
          </Text>
          <FontAwesomeIcon
            icon={"angle-right"}
            color="#1A9E75"
            style={{ position: "absolute", right: 15 }}
          />
        </TouchableOpacity>
      )}

      <Modal
        isVisible={error}
        useNativeDriver
        style={{ margin: 0, justifyContent: "center", alignItems: "center" }}
        backdropOpacity={0.3}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 10,
            gap: 10,
            width: "60%",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text
            style={[styles.text, { color: "#393939", textAlign: "center" }]}
          >
            Server Error. Try again after sometime.
          </Text>
          <TouchableOpacity
            style={[styles.button2, { height: 30 }]}
            onPress={() => {
              setError(false);
              navigation.navigate("Home");
              //   dispatch(fetchRcDetails(null));
            }}
          >
            <Text style={[styles.bold, { color: "white", paddingTop: 2 }]}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        isVisible={modal}
        useNativeDriver
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 15, zIndex: 5 }}
            onPress={() => setModal(false)}
          >
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={22} />
          </TouchableOpacity>
          {/* <Text style={[styles.header, { color: "#393939", fontSize: 16 }]}>
              Confirm your car
            </Text> */}
          <ImageContainer
            type={data.data?.data?.vehicle_category_description}
          />
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={[styles.text, { color: "#A0A0A0" }]}>
              {data.data?.data?.rc_number.slice(0, 2) +
                "-" +
                data.data?.data?.rc_number.slice(2, 4) +
                "-" +
                data.data?.data?.rc_number.slice(4, 6) +
                "-" +
                data.data?.data?.rc_number.slice(6)}
            </Text>
            <Text style={[styles.bold, { fontSize: 18 }]}>
              {data.data?.data?.maker_model}
            </Text>
            <Text style={[styles.text, { color: "#393939" }]}>
              Registration in {data.data?.data?.registration_date.slice(0, 4)}
            </Text>
          </View>
          <Text
            onPress={() => setModal(false)}
            style={[styles.bold, { color: "#1A9E75", marginBottom: 15 }]}
          >
            Edit Vehicle Number
          </Text>
          <TouchableOpacity
            style={[
              styles.button2,
              { width: "90%", borderRadius: 15, height: 40 },
            ]}
            onPress={handleSubmit}
          >
            <Text
              style={[
                styles.bold,
                { color: "white", paddingTop: 2, fontSize: 16 },
              ]}
            >
              Yes, It's my vehicle
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        isVisible={modal2}
        style={{ justifyContent: "flex-end", margin: 0 }}
        backdropColor="#B1B1B1"
        backdropOpacity={0.5}
      >
        <View style={styles.delete}>
          <TouchableOpacity
            onPress={() => setAlert(false)}
            style={{ position: "absolute", right: 20, top: 20 }}
          >
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={20} />
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
          <View style={[styles.row, { width: "90%", marginTop: 25, gap: 15 }]}>
            <TouchableOpacity
              onPress={() => setModal2(false)}
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
            <TouchableOpacity
              onPress={handleDelete}
              style={[styles.button2, { flex: 1 }]}
            >
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
    </View>
  );
};

const ImageContainer = ({ type }) => {
  const value = type?.toLowerCase();
  if (value?.includes("car")) {
    return (
      <View style={styles.imageCIrcle}>
        <Image
          source={require("../assets/images/car1.png")}
          style={{
            width: 35,
            height: 30,
          }}
        />
      </View>
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
      <View style={styles.imageCIrcle}>
        <Image
          source={require("../assets/images/auto.png")}
          style={{
            width: 28,
            height: 28,
          }}
        />
      </View>
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

const ImageContainer2 = ({ type }) => {
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

export default Vehicle4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    width: "90%",
    overflow: "hidden",
    gap: 15,
    height: 215,
  },
  greenContainer: {
    width: "90%",
    height: 59,
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 8,
  },
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
    paddingHorizontal: 20,
    gap: 13,
  },
  input: {
    width: "100%",
    height: 46,
    borderColor: "#1A9E75",
    color: "#1A9E75",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Poppins_500Medium",
    paddingTop: 2,
    fontSize: 20,
    textAlign: "center",
  },
  button2: {
    width: "100%",
    height: 41,
    backgroundColor: "#1A9E75",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    width: "100%",
    height: 41,
    backgroundColor: "#DFDFDF",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  modal: {
    width: "100%",
    paddingVertical: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    gap: 15,
    paddingBottom: 30,
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
  imageCIrcle: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
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
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
