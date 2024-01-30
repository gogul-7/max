import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useNavigation } from "@react-navigation/native";

const details = [
  {
    id: 1,
    name: "Phoenix Mall",
    photo: require("../assets/images/phoenix.png"),
    location: "Velachery, Chennai",
    rating: 5,
  },
  {
    id: 2,
    name: "Palladium",
    photo: require("../assets/images/palladium.png"),
    location: "Velachery, Chennai",
    rating: 4,
  },
  {
    id: 3,
    name: "ITC Grand Chola",
    photo: require("../assets/images/ITC.png"),
    location: "Little Mount, Chennai",
    rating: 5,
  },
  {
    id: 4,
    name: "Park Plaza",
    photo: require("../assets/images/parkplaza.png"),
    location: "Thoraipakkam, Chennai",
    rating: 4,
  },
];

const Valet1 = () => {
  const [border, setBorder] = useState("#A0A0A0");
  const [key, setKey] = useState("");
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [dateArray, setDateArray] = useState([]);
  const [hourArray, setHourArray] = useState([]);
  const [minArray, setMinArray] = useState([]);
  const navigation = useNavigation();
  const [date, setDate] = useState("");

  const handleNavigate = () => {
    setModal(false);
    setModal2(false);
    navigation.navigate("valet2");
  };

  const formatDate = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const newDate = new Date(date).toLocaleDateString("en-US", options);
    return newDate.slice(0, 3) + newDate.slice(4);
  };

  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
  };

  const generateArray = () => {
    const today = new Date();
    const dateArray = ["Today"];
    const newHours = [];
    const newMinutes = [];

    for (let i = 1; i <= 20; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const formattedDate = formatDate(nextDate);
      dateArray.push(formattedDate);
    }

    for (let i = 1; i <= 24; i++) {
      const formattedHours = i < 10 ? `0${i}` : `${i}`;
      newHours.push(formattedHours);
    }

    for (let i = 0; i <= 60; i++) {
      const formattedMinutes = i < 10 ? `0${i}` : `${i}`;
      newMinutes.push(formattedMinutes);
    }
    setDateArray(dateArray);
    setHourArray(newHours);
    setMinArray(newMinutes);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleClick = () => {
    setModal(true);
  };

  const handleChange = (text) => {
    setBorder("#1A9E75");
    if (text.length == 0) setBorder("#A0A0A0");
    setKey(text);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 15,
        alignItems: "center",
        gap: 10,
        paddingBottom: 20,
        backgroundColor: "#FFF",
      }}
    >
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
          placeholder="Search area "
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
      <Text
        style={[
          styles.header,
          { color: "#393939", fontSize: 16, width: "88%" },
        ]}
      >
        How it works?
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
        }}
      >
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 47, height: 37 }}
              source={require("../assets/images/personlocation.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 1</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                width: "90%",
                textAlign: "center",
                color: "#A0A0A0",
              },
            ]}
          >
            Search valet parking locations
          </Text>
        </View>
        <FontAwesomeIcon
          style={{ marginTop: 20 }}
          icon={"arrow-right-long"}
          color="#1A9E75"
          size={18}
        />
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/images/alarm.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 2</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                width: "100%",
                textAlign: "center",
                color: "#A0A0A0",
              },
            ]}
          >
            Schedule valet parking time
          </Text>
        </View>
        <FontAwesomeIcon
          style={{ marginTop: 20 }}
          icon={"arrow-right-long"}
          color="#1A9E75"
          size={18}
        />
        <View style={{ alignItems: "center", gap: 3, flex: 1 }}>
          <View style={[styles.imageContainer]}>
            <Image
              style={{ width: 48, height: 36 }}
              source={require("../assets/images/carperson.png")}
            />
          </View>
          <Text style={[styles.header, { color: "black" }]}>Step 3</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 10,
                textAlign: "center",
                color: "#A0A0A0",
                width: "80%",
              },
            ]}
          >
            Our team will park your car
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../assets/images/exclamation.png")}
        />
        <Text
          style={[
            styles.text,
            {
              color: "#434343",
              paddingTop: 3,
            },
          ]}
        >
          We provide assistance within 500 meters of your valet booking
        </Text>
      </View>
      <View style={{ width: "90%", gap: 5 }}>
        {details.map((item) => (
          <TouchableOpacity
            onPress={handleClick}
            key={item.id}
            style={[styles.container2]}
          >
            <Image style={styles.banner} source={item.photo} />
            <View>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                  },
                ]}
              >
                {item.name}
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: "#A0A0A0",
                    fontSize: 12,
                    marginTop: -3,
                  },
                ]}
              >
                {item.location}
              </Text>
              <Rating rating={item.rating} />
            </View>
            <TouchableOpacity
              style={{ position: "absolute", right: 20, bottom: 25 }}
              onPress={openLocationLink}
            >
              <FontAwesomeIcon
                icon={"diamond-turn-right"}
                size={22}
                color="rgba(26, 158, 117, 1)"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        isVisible={modal}
        backdropColor="#B7B7B7"
        style={{ margin: 0, justifyContent: "flex-end" }}
        onBackdropPress={() => setModal(false)}
        useNativeDriver
        useNativeDriverForBackdrop
        onBackButtonPress={() => setModal(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={{
              height: 30,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <View style={styles.line} />
          </TouchableOpacity>
          <Text
            style={[
              styles.header,
              {
                color: "#393939",
                fontSize: 16,
                backgroundColor: "#FFF",
              },
            ]}
          >
            Select Date For Valet Parking
          </Text>
          <View style={{ marginTop: -40, zIndex: -10 }}>
            <WheelPickerExpo
              height={230}
              width={100}
              selectedStyle={{ borderColor: "#1A9E75", borderWidth: 1 }}
              initialSelectedIndex={1}
              haptics
              items={dateArray.map((name) => ({
                label: (
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins_400Regular",
                      color: "#393939",
                      paddingTop: 2,
                    }}
                  >
                    {name}
                  </Text>
                ),
                value: { name },
              }))}
              onChange={({ item }) => setDate(item.value.name)}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 110,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => setModal2(true)}
              style={styles.button}
            >
              <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={modal2}
        backdropColor="#B7B7B7"
        style={{ margin: 0, justifyContent: "flex-end" }}
        useNativeDriver
        useNativeDriverForBackdrop
        onBackButtonPress={() => setModal2(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModal2(false)}
            style={{
              height: 30,
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
            }}
          >
            <View style={styles.line} />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              backgroundColor: "#FFF",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.header,
                {
                  color: "#393939",
                  fontSize: 16,
                  backgroundColor: "#FFF",
                },
              ]}
            >
              Schedule Time
            </Text>
          </View>
          <View
            style={{
              marginTop: -40,
              zIndex: -10,
              justifyContent: "space-between",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 1 }}
                initialSelectedIndex={1}
                haptics
                items={hourArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#000",
                  paddingTop: 2,
                }}
              >
                :
              </Text>
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 1 }}
                initialSelectedIndex={30}
                haptics
                items={minArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 1 }}
                initialSelectedIndex={5}
                haptics
                items={hourArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#000",
                  paddingTop: 2,
                }}
              >
                :
              </Text>
              <WheelPickerExpo
                height={230}
                width={36}
                selectedStyle={{ borderColor: "#1A9E75", borderWidth: 1 }}
                initialSelectedIndex={30}
                haptics
                items={minArray.map((name) => ({
                  label: (
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Poppins_400Regular",
                        color: "#393939",
                        paddingTop: 2,
                      }}
                    >
                      {name}
                    </Text>
                  ),
                  value: { name },
                }))}
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 110,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <TouchableOpacity onPress={handleNavigate} style={styles.button}>
              <Text style={[styles.bold, { fontSize: 16, color: "#FFF" }]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Valet1;

const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <View style={{ flexDirection: "row", gap: 5, marginTop: 3 }}>
      <View style={{ flexDirection: "row" }}>
        {arr.map((item) =>
          item <= rating ? (
            <Image
              key={item}
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/star.png")}
            />
          ) : (
            <Image
              key={item}
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/nostar.png")}
            />
          )
        )}
      </View>
      <Text
        style={[
          styles.text,
          {
            color: "#A0A0A0",
            fontSize: 12,
            paddingTop: 1,
          },
        ]}
      >
        {`${rating}.0`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#D6D6D6",
    borderRadius: 2,
    width: 29,
    height: 4,
  },
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
  search: { width: 20, height: 20, position: "absolute", left: 28 },
  modalContainer: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
    overflow: "hidden",
  },
  button: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    marginTop: 25,
    width: "90%",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  imageContainer: {
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#F0FFFA",
    borderRadius: 15,
    width: "90%",
    paddingVertical: 11,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container2: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    borderRadius: 15,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    elevation: 3,
  },
  banner: {
    width: 87,
    height: 58,
    borderRadius: 8,
  },
});
