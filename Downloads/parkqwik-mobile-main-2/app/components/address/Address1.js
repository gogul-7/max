import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";

const Address1 = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [options, setOptions] = useState(-1);
  const [reload, setReload] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleNavigate = () => {
    navigation.navigate("address2");
    setOptions(-1);
  };

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

  const animate = (index) => {
    setOptions(index);
  };

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
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        gap: 10,
        paddingBottom: 30,
        backgroundColor: "#FFF",
        flex: 1,
      }}
      style={{ paddingTop: 15 }}
    >
      {data !== null &&
        data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.container,
              { flexDirection: "column", alignItems: "flex-start" },
            ]}
          >
            <Text style={styles.header}>{item.name}</Text>
            <Text
              style={[styles.text, { marginTop: -5 }]}
            >{`${item.address1}, ${item.address2}`}</Text>
            <Text
              style={[styles.text, { marginTop: -5 }]}
            >{`${item.city}, ${item.state}`}</Text>
            <Text style={[styles.text, { marginTop: -5 }]}>{item.pincode}</Text>
            <TouchableOpacity
              onPress={() => animate(index)}
              style={{ position: "absolute", right: 10, top: 15 }}
            >
              <FontAwesomeIcon icon={"ellipsis-vertical"} />
            </TouchableOpacity>
            {options === index && (
              <View style={[styles.menu]}>
                <View style={styles.row}>
                  <Image
                    style={{ width: 18, height: 18, marginTop: 2 }}
                    source={require("../assets/images/edit.png")}
                  />
                  <Text style={[styles.text, { fontSize: 12 }]}>Edit</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setAlert(true);
                  }}
                  style={styles.row}
                >
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/images/delete.png")}
                  />
                  <Text style={[styles.text, { fontSize: 12 }]}>Delete</Text>
                </TouchableOpacity>
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
            <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={20} />
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
          <View style={[styles.row, { width: "90%", marginTop: 25, gap: 15 }]}>
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
  );
};

export default Address1;

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
    width: 112,
    height: 70,
    backgroundColor: "white",
    borderRadius: 15,
    position: "absolute",
    justifyContent: "center",
    right: 10,
    top: 10,
    elevation: 2,
    padding: 10,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 5,
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
});
