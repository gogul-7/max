import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const details = [
  {
    id: 1,
    name: "HP Petrol Pump",
    photo: require("../assets/images/hppetrol.png"),
    location: "Kelambakkam, Chennai",
    rating: 4,
    distance: 2,
  },
  {
    id: 2,
    name: "Indian Oil",
    photo: require("../assets/images/indianoil.png"),
    location: "Kazhipattur, Chennai",
    rating: 4,
    distance: 6,
  },
  {
    id: 3,
    name: "Bharat Petroleum",
    photo: require("../assets/images/bharathpetrol.png"),
    location: "Perungudi, Chennai",
    rating: 5,
    distance: 8,
  },
  {
    id: 4,
    name: "Nayara Petrol Pump",
    photo: require("../assets/images/nayara.png"),
    location: "Nesapakkam, Chennai",
    rating: 4,
    distance: 13,
  },
];

const Fuel1 = () => {
  const [border, setBorder] = useState("#A0A0A0");
  const [key, setKey] = useState("");

  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("fuel2");
  };

  const openLocationLink = () => {
    const locationLink =
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089";

    Linking.openURL(locationLink)
      .then(() => console.log("Location link opened successfully"))
      .catch((err) => console.error("Error opening location link:", err));
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
          placeholder="Search for area"
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
        Fuel Price In Chennai
      </Text>

      <View
        style={{
          width: "90%",
          paddingHorizontal: 0,
          alignItems: "center",
          paddingTop: 50,
          backgroundColor: "#FFF",
          borderRadius: 15,
          paddingBottom: 15,
          elevation: 3,
        }}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.button2}>
            <Image
              style={{
                maxWidth: 18,
                maxHeight: 18,
              }}
              source={require("../assets/images/petrol.png")}
            />
            <Text style={[styles.bold, { color: "#393939", paddingTop: 4 }]}>
              Petrol
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.button2}>
            <Image
              style={{
                maxWidth: 18,
                maxHeight: 18,
              }}
              source={require("../assets/images/petrol.png")}
            />
            <Text style={[styles.bold, { color: "#393939", paddingTop: 4 }]}>
              Diesel
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#393939" }}>
            ₹ <Text style={styles.text}>105.65 </Text>
            <Text style={[styles.header, { color: "#00A638", fontSize: 10 }]}>
              + 0.95
            </Text>
          </Text>
          <Text style={{ color: "#393939" }}>
            ₹ <Text style={styles.text}>99.25 </Text>
            <Text style={[styles.header, { color: "#00A638", fontSize: 10 }]}>
              + 0.95
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.imageBg}>
        <ImageBackground
          style={{ flex: 1, padding: 15, gap: 5 }}
          source={require("../assets/images/referbg.png")}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "NunitoSans_600SemiBold",
              fontSize: 18,
              lineHeight: 20,
              width: "70%",
            }}
          >
            Refer Your Friend & Get 200ml Free Petrol!
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins_400Regular",
              fontSize: 10,
              width: "65%",
            }}
          >
            Share referral link and ask your friend to register vehicle details
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Refer & Win");
            }}
            style={styles.button3}
          >
            <Text style={[styles.bold, { fontSize: 10 }]}>Refer Now</Text>
          </TouchableOpacity>
          <Image
            style={{
              width: 67,
              height: 120,
              position: "absolute",
              bottom: 0,
              right: 25,
            }}
            source={require("../assets/images/person10.png")}
          />
        </ImageBackground>
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
                onPress={handleClick}
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
              onPress={openLocationLink}
              style={{ position: "absolute", right: 20, bottom: 25 }}
            >
              <FontAwesomeIcon
                icon={"diamond-turn-right"}
                size={22}
                color="rgba(26, 158, 117, 1)"
              />
            </TouchableOpacity>
            <View style={styles.distance}>
              <Text
                style={[
                  styles.header,
                  {
                    color: "#393939",
                    fontSize: 10,
                  },
                ]}
              >
                {item.distance + " km"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Fuel1;

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
    height: 19,
    width: 1,
    backgroundColor: "#E4E4E4",
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
  distance: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 15,
    top: 15,
  },
  search: { width: 20, height: 20, position: "absolute", left: 28 },
  modalContainer: {
    width: "100%",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 41,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    position: "absolute",
    top: 0,
  },
  button2: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    borderRadius: 15,
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
    elevation: 3,
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
  imageContainer: {
    height: 65,
    width: 65,
    borderRadius: 65,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  imageBg: {
    width: "90%",
    height: 136,
    marginTop: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  button3: {
    width: 80,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    paddingTop: 2,
  },
});
