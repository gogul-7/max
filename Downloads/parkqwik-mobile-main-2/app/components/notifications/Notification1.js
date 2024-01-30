import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const data = [
  {
    id: 1,
    title: "Refer & Win Rewards",
    message:
      "Simply refer your friend to download parkqwik app and add vehicle details",
    date: "27 Oct 23",
    time: "07:29 AM",
    image: require("../assets/images/greenrefer.png"),
    category: "refer",
  },
  {
    id: 2,
    title: "DTH Recharge Expired",
    message:
      "Your Recharge Plan for 70535558905 has expired. Tap to recharge now. Ignore if recharged ",
    date: "25 Oct 23",
    time: "07:29 AM",
    image: require("../assets/images/greendish.png"),
    category: "dth",
  },
];

const Notification1 = () => {
  const { setNotification } = useContext(AppContext);
  const navigation = useNavigation();
  const handlePress = (value) => {
    setNotification(data.find((item) => item.id == value));
    navigation.navigate("notification2");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 15,
        gap: 10,
        backgroundColor: "#FFF",
      }}
    >
      {data.map((item) => (
        <Pressable
          onPress={() => handlePress(item.id)}
          key={item.id}
          style={styles.container}
        >
          <View style={styles.imageContainer}>
            <Image
              style={{ maxHeight: 30, maxWidth: 30 }}
              source={item.image}
            />
          </View>
          <View style={{ width: "80%" }}>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.text}>
              {item.message.length > 70
                ? item.message.slice(0, 70) + "..."
                : item.message}
            </Text>
          </View>
          <View style={styles.date}>
            <Text style={[styles.header, { fontSize: 8, color: "#393939" }]}>
              {item.date}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Notification1;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  imageContainer: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#8E8E8E",
  },
  date: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    position: "absolute",
    right: 4,
    top: 4,
  },
});
