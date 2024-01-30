import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import style1 from "../MapStyle";

const Toll2 = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();

  const handleClose = () => {
    setModal(false);
    navigation.navigate("Home");
  };

  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={styles.headerContainer}>
        <View style={styles.input}>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("../assets/images/whitelocation.png")}
          />
          <Text style={[styles.text, { color: "white", paddingTop: 3 }]}>
            Tirupathi
          </Text>
        </View>
      </View>
      <MapView
        style={{ flex: 1, zIndex: -3 }}
        provider={PROVIDER_GOOGLE}
        // region={{
        //   longitude: locationDetails.coords.longitude,
        //   latitude: locationDetails.coords.latitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        // ref={mapRef}
        customMapStyle={style1}
      ></MapView>
      <View style={{ position: "absolute", right: 30, bottom: 200, gap: 20 }}>
        <View style={styles.circle}>
          <TouchableOpacity onPress={openLocationLink}>
            <Image
              style={{ width: 24, height: 23 }}
              source={require("../assets/images/layer.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.circle}>
          <TouchableOpacity onPress={openLocationLink}>
            <FontAwesomeIcon
              size={20}
              icon={"diamond-turn-right"}
              color="#1A9E75"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setModal(true)}
        style={[styles.button, { bottom: 30, width: "90%" }]}
      >
        <Text
          style={[styles.bold, { color: "#FFF", paddingTop: 2, fontSize: 16 }]}
        >
          Estimate
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={modal}
        backdropOpacity={0.3}
        useNativeDriver
        onBackdropPress={() => setModal(false)}
        style={{ margin: 0, justifyContent: "flex-end" }}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={{ position: "absolute", right: 20, top: 15, zIndex: 5 }}
          >
            <FontAwesomeIcon size={22} icon={"circle-xmark"} color="#1A9E75" />
          </TouchableOpacity>
          <Text style={[styles.header, { fontSize: 16 }]}>
            Tolls In Between
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "98%",
              alignItems: "center",
            }}
          >
            <Text style={[styles.text]}>Srikakulam Toll Plaza</Text>
            <Text style={{ color: "#393939", fontSize: 16, fontWeight: 500 }}>
              ₹ <Text style={styles.header}>75</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "98%",
              alignItems: "center",
              marginTop: -10,
            }}
          >
            <Text style={[styles.text]}>Renigunta Toll Plaza</Text>
            <Text style={{ color: "#393939", fontSize: 16, fontWeight: 500 }}>
              ₹ <Text style={styles.header}>85</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "98%",
              alignItems: "center",
            }}
          >
            <Text style={[styles.header, { color: "#00A638", fontSize: 16 }]}>
              Total Amount
            </Text>
            <Text style={{ color: "#00A638", fontSize: 20, fontWeight: 500 }}>
              ₹ <Text style={[styles.header, { color: "#00A638" }]}>160</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleClose}
            style={[styles.button, { bottom: 20 }]}
          >
            <Text
              style={[
                styles.bold,
                { color: "#FFF", paddingTop: 2, fontSize: 16 },
              ]}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Toll2;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: 4,
    width: "90%",
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 5,
  },
  circle: {
    backgroundColor: "#F0FFFA",
    width: 41,
    height: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 41,
    elevation: 5,
  },
  headerContainer: {
    backgroundColor: "#1A9E75",
    height: 120,
    paddingBottom: 25,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  modal: {
    height: 239,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 20,
    gap: 10,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#8E8E8E",
  },
  button: {
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    position: "absolute",
    width: "100%",
    alignSelf: "center",
  },
});
