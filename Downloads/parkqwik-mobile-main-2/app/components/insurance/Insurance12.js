import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import { RadioButton } from "react-native-paper";
import AppContext from "../../context/AppContext";

const Insurance12 = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [options, setOptions] = useState(-1);
  const [reload, setReload] = useState(false);
  const [alert, setAlert] = useState(false);
  const [value, setValue] = useState({});
  const [disable, setDisable] = useState(false);
  const { setAddressDetails, addressDetails } = useContext(AppContext);

  const handleContinue = () => {
    setAddressDetails(value);
    navigation.navigate("insurance7");
  };

  const handleSelect = (value) => {
    setValue(value);
    setOptions(false);
  };

  const handleReload = () => {
    setReload(!reload);
  };

  const handleNavigate = () => {
    navigation.navigate("insurance13");
    setOptions(-1);
  };

  useEffect(() => {
    if (Object.keys(value).length === 0) {
      setDisable(true);
    } else setDisable(false);
  }, [value]);

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

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveData();
    });

    return unsubscribe;
  }, [navigation]);

  const handleDelete = async () => {
    try {
      const arr = data.filter((_, index) => index !== options);
      setData(arr);
      const address = JSON.stringify(arr);
      await AsyncStorage.setItem("addressData", address);
      setAlert(false);
      handleReload();
      setOptions(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView
        contentContainerStyle={{
          gap: 15,
          paddingBottom: 30,
          flex: 1,
          alignItems: "center",
        }}
        style={{ paddingTop: 15 }}
      >
        <View style={{ width: "90%", gap: 15 }}>
          <RadioButton.Group value={value}>
            <View style={{ gap: 10 }}>
              {data !== null &&
                data.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    key={index}
                    style={[
                      styles.container,
                      {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        paddingLeft: 40,
                      },
                    ]}
                  >
                    <View style={{ position: "absolute", top: 3, left: 3 }}>
                      <RadioButton
                        onPress={() => handleSelect(item)}
                        value={item}
                        color="#1A9E75"
                        uncheckedColor="#1A9E75"
                      />
                    </View>
                    <Text style={styles.header}>{item.name}</Text>
                    <Text
                      style={[styles.text, { marginTop: -5 }]}
                    >{`${item.address1}, ${item.address2}`}</Text>
                    <Text
                      style={[styles.text, { marginTop: -5 }]}
                    >{`${item.city}, ${item.state}`}</Text>
                    <Text style={[styles.text, { marginTop: -5 }]}>
                      {item.number}
                    </Text>
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
                  </TouchableOpacity>
                ))}
            </View>
          </RadioButton.Group>
        </View>
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
              Delete this address?
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
          onPress={handleNavigate}
          style={[styles.container, { paddingVertical: 13 }]}
        >
          <Text style={[styles.header, { color: "#A0A0A0", paddingTop: 2 }]}>
            Tap to add delivery address
          </Text>
          <FontAwesomeIcon
            icon={"circle-plus"}
            color="rgba(26, 158, 117, 1)"
            size={18}
          />
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={handleContinue}
        style={disable ? styles.disbaled : styles.button2}
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
    </View>
  );
};

export default Insurance12;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
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
    top: 38,
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
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
  button2: {
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
