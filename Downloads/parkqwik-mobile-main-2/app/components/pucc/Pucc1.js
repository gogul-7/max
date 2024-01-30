import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";

const centers = [
  {
    id: 1,
    name: "Avantika Vehicle Emission Testing Center",
    address: "No.1/249B, OMR, Kelambakkam, Chennai, 603103",
    type: ["Petrol", "Diesel", "CNG", "LPG"],
  },
  {
    id: 2,
    name: "Amman Vehicle Pollution Testing Center",
    address: "No.239, OMR Road, Lcard Avenue, Sholinganallur, Chennai, 600119",
    type: ["Petrol", "Diesel", "CNG", "LPG"],
  },
  {
    id: 3,
    name: "Kanchi Vehicle Emission Testing Center",
    address: "No.275, OMR Road, Shollinganallur, Chennai, 600119",
    type: ["Petrol", "Diesel", "CNG", "LPG"],
  },
  {
    id: 4,
    name: "Sri Vinayaga PCT Center",
    address:
      "Plot No -G, Prithigiradevi Kovil Street, KTK Town ECR Link Road, Chennai, 600119",
    type: ["Petrol", "Diesel", "CNG", "LPG"],
  },
  {
    id: 5,
    name: "Thirumurugan Environmental Service Center",
    address: "No.3/121, Velachery Main Road, Chennai, 600100",
    type: ["Petrol", "Diesel", "CNG", "LPG"],
  },
  {
    id: 6,
    name: "Ariista Tedi PUC Center",
    address:
      "SF704/2A, Tambaram Main Road, Pattunool Chathiram, Sriperumbudur, 602105",
    type: ["Petrol", "Diesel", "CNG", "LPG"],
  },
];

const Pucc1 = () => {
  const [border, setBorder] = useState("#EEE");
  const [search, setSearch] = useState([]);
  const [key, setKey] = useState("");
  const [toggle, setToggle] = useState(false);
  const [toggleId, setToggleId] = useState(1);
  const [selected, setSelected] = useState("All");

  const handleChange = (text) => {
    setBorder("#1A9E75");
    if (text.length == 0) setBorder("#EEE");
    setKey(text);
    setSearch(
      centers.filter(
        (item) =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.address.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  const handleToggle = (id) => {
    setToggle(true);
    setToggleId(id);
  };

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 15,
        alignItems: "center",
        gap: 10,
        backgroundColor: "#FFF",
      }}
    >
      <Popup id={toggleId} toggle={toggle} setToggle={setToggle} />
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        }}
      >
        <TextInput
          style={[styles.input, { borderColor: border }]}
          placeholder="Search PUCC Center"
          onChangeText={handleChange}
        />
        <Image
          style={styles.search}
          source={
            key
              ? require("../assets/images/greensearch.png")
              : require("../assets/images/search.png")
          }
        />
      </View>
      {!key && (
        <View style={styles.navbar}>
          <Pressable onPress={() => handleSelect("All")}>
            <Text
              style={selected == "All" ? [styles.highlighted] : styles.header}
            >
              All
            </Text>
          </Pressable>
          <Pressable onPress={() => handleSelect("Petrol")}>
            <Text
              style={
                selected == "Petrol" ? [styles.highlighted] : styles.header
              }
            >
              Petrol
            </Text>
          </Pressable>
          <Pressable onPress={() => handleSelect("Diesel")}>
            <Text
              style={
                selected == "Diesel" ? [styles.highlighted] : styles.header
              }
            >
              Diesel
            </Text>
          </Pressable>
          <Pressable onPress={() => handleSelect("CNG")}>
            <Text
              style={selected == "CNG" ? [styles.highlighted] : styles.header}
            >
              CNG
            </Text>
          </Pressable>
          <Pressable onPress={() => handleSelect("LPG")}>
            <Text
              style={selected == "LPG" ? [styles.highlighted] : styles.header}
            >
              LPG
            </Text>
          </Pressable>
        </View>
      )}
      {key && (
        <View style={{ width: "90%" }}>
          <Text style={styles.text}>
            {search.length} results for "{key}"
          </Text>
        </View>
      )}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          gap: 10,
          paddingBottom: 10,
          paddingTop: 5,
        }}
        style={{ width: "100%", flex: 1 }}
      >
        {key
          ? search.map((item) => (
              <View key={item.id} style={styles.container}>
                <Pressable onPress={() => handleToggle(item.id)}>
                  <Text style={styles.header}>
                    {item.name.length > 31
                      ? item.name.slice(0, 31) + "..."
                      : item.name}
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 12, color: "#A0A0A0", width: "90%" },
                    ]}
                  >
                    {item.address}
                  </Text>
                  <FontAwesomeIcon
                    icon={"angle-right"}
                    color={"#1A9E75"}
                    style={{ position: "absolute", right: 15, top: 16 }}
                  />
                </Pressable>
                <View style={styles.downPart}>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "70%",
                      gap: 10,
                    }}
                  >
                    {selected !== "All" ? (
                      <View
                        style={{
                          backgroundColor: "#F5F5F5",
                          borderRadius: 10,
                          padding: 5,
                          width: 42,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              color: "#393939",
                              fontSize: 10,
                            },
                          ]}
                        >
                          {selected}
                        </Text>
                      </View>
                    ) : (
                      item.type.map((data) => (
                        <View
                          key={data}
                          style={{
                            backgroundColor: "#F5F5F5",
                            borderRadius: 10,
                            padding: 5,
                            width: 42,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={[
                              styles.text,
                              {
                                color: "#393939",
                                fontSize: 10,
                              },
                            ]}
                          >
                            {data}
                          </Text>
                        </View>
                      ))
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 20,
                      alignItems: "center",
                      paddingBottom: 4,
                    }}
                  >
                    <FontAwesomeIcon icon={"phone"} color="#1A9E75" size={18} />
                    <TouchableOpacity onPress={openLocationLink}>
                      <FontAwesomeIcon
                        icon={"diamond-turn-right"}
                        color="#1A9E75"
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          : centers.map((item) => (
              <View key={item.id} style={styles.container}>
                <Pressable onPress={() => handleToggle(item.id)}>
                  <Text style={styles.header}>
                    {item.name.length > 31
                      ? item.name.slice(0, 31) + "..."
                      : item.name}
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 12, color: "#A0A0A0", width: "90%" },
                    ]}
                  >
                    {item.address}
                  </Text>
                  <FontAwesomeIcon
                    icon={"angle-right"}
                    color={"#1A9E75"}
                    style={{ position: "absolute", right: 15, top: 16 }}
                  />
                </Pressable>
                <View style={styles.downPart}>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "70%",
                      gap: 10,
                    }}
                  >
                    {selected !== "All" ? (
                      <View
                        style={{
                          backgroundColor: "#F5F5F5",
                          borderRadius: 10,
                          padding: 5,
                          width: 42,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              color: "#393939",
                              fontSize: 10,
                            },
                          ]}
                        >
                          {selected}
                        </Text>
                      </View>
                    ) : (
                      item.type.map((data) => (
                        <View
                          key={data}
                          style={{
                            backgroundColor: "#F5F5F5",
                            borderRadius: 10,
                            padding: 5,
                            width: 42,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={[
                              styles.text,
                              {
                                color: "#393939",
                                fontSize: 10,
                              },
                            ]}
                          >
                            {data}
                          </Text>
                        </View>
                      ))
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 20,
                      alignItems: "center",
                      paddingBottom: 4,
                    }}
                  >
                    <FontAwesomeIcon icon={"phone"} color="#1A9E75" size={18} />
                    <TouchableOpacity onPress={openLocationLink}>
                      <FontAwesomeIcon
                        icon={"diamond-turn-right"}
                        color="#1A9E75"
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
      </ScrollView>
    </View>
  );
};

export default Pucc1;

const Popup = ({ id, toggle, setToggle }) => {
  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  const details = centers.find((item) => item.id == id);
  return (
    <Modal isVisible={toggle} style={[styles.backDrop]}>
      <View style={styles.popContainer}>
        <Text style={[styles.header, { width: "80%" }]}>{details.name}</Text>
        <Text
          style={[
            styles.text,
            { fontSize: 12, color: "#A0A0A0", width: "90%" },
          ]}
        >
          {details.address}
        </Text>
        <View
          style={{ width: "70%", flexDirection: "row", gap: 10, marginTop: 10 }}
        >
          {details.type.map((item) => (
            <View
              key={item}
              style={{
                backgroundColor: "#F5F5F5",
                borderRadius: 10,
                padding: 5,
                width: 42,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: "#393939",
                    fontSize: 10,
                  },
                ]}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
          }}
        >
          <View style={styles.button1}>
            <FontAwesomeIcon icon={"phone"} color="#1A9E75" size={16} />
            <Text style={styles.bold}>Call</Text>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity onPress={openLocationLink}>
              <FontAwesomeIcon
                icon={"diamond-turn-right"}
                color="#1A9E75"
                size={22}
              />
            </TouchableOpacity>
            <Text style={[styles.bold, { color: "white" }]}>Get Direction</Text>
          </View>
        </View>
        <Pressable
          style={{ position: "absolute", right: 20, top: 20 }}
          onPress={() => setToggle(false)}
        >
          <FontAwesomeIcon icon={"circle-xmark"} color="#1A9E75" size={22} />
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 25 },
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    elevation: 3,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    color: "#1A9E75",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },
  highlighted: {
    fontFamily: "Poppins_500Medium",
    borderBottomColor: "#1A9E75",
    borderBottomWidth: 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  downPart: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 40,
    borderTopColor: "#E6E6E6",
    borderTopWidth: 1,
    marginTop: 5,
    justifyContent: "space-between",
  },
  navbar: {
    height: 40,
    flexDirection: "row",
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
    width: "90%",
    marginBottom: 10,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  backDrop: {
    margin: 0,
    justifyContent: "flex-end",
  },
  popContainer: {
    backgroundColor: "white",
    height: 220,
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    gap: 5,
  },
  button1: {
    width: "44%",
    height: 38,
    borderRadius: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#F0FFFA",
    borderWidth: 1,
    borderColor: "#1A9E75",
  },
  button2: {
    width: "44%",
    height: 38,
    borderRadius: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "#1A9E75",
  },
});
