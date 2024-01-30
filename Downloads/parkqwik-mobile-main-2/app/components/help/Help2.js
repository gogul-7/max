import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Help2 = () => {
  const [response, setRespons] = useState(false);
  const [answer, setAnswer] = useState(false);
  const date = new Date().toDateString().split(" ");
  const { category } = useContext(AppContext);
  const time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const currentTime = hours + ":" + minutes + " " + meridiem;
  const today = `${date[2]} ${date[1]} ${date[3].slice(2, 4)}`;

  const handlePress = () => {
    setRespons(true);
    setTimeout(() => {
      setAnswer(true);
    }, 1000);
  };

  if (category === "fastag") {
    return (
      <View style={{ alignItems: "center", flex: 1, backgroundColor: "#FFF" }}>
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            paddingTop: 25,
            gap: 20,
            paddingBottom: 80,
          }}
          style={{ width: "100%" }}
        >
          <View style={styles.dateContainer}>
            <Text style={[styles.text, { fontSize: 12 }]}>{today}</Text>
          </View>
          <View style={styles.sentMsg}>
            <Text style={[styles.text, { color: "white" }]}>
              Hi, I require assistance related to FASTag
            </Text>
            <Text style={styles.time}>{currentTime}</Text>
          </View>
          <View style={styles.recievedMsg}>
            <Text style={[styles.text, { color: "#393939" }]}>
              Hi, Iam your support assistance. Please select an option below:
            </Text>
            <Text style={[styles.time, { color: "#8E8E8E" }]}>
              {currentTime}
            </Text>
          </View>
          <View style={styles.options}>
            <View style={styles.container}>
              <Text style={[styles.text, { color: "#393939" }]}>
                FASTag Recharge
              </Text>
            </View>
            <TouchableOpacity onPress={handlePress} style={styles.container}>
              <Text style={[styles.text, { color: "#393939" }]}>
                Buy FASTag
              </Text>
            </TouchableOpacity>
            <View style={styles.container}>
              <Text style={[styles.text, { color: "#393939" }]}>
                FASTag Replacement
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text, { color: "#393939" }]}>
                FASTag Activation
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={[styles.text, { color: "#393939" }]}>
                Other Questions
              </Text>
            </View>
          </View>
          {response && (
            <View style={styles.sentMsg}>
              <Text style={[styles.text, { color: "white" }]}>Buy FASTag</Text>
              <Text style={styles.time}>{currentTime}</Text>
            </View>
          )}
          {answer && (
            <>
              <View style={styles.recievedMsg}>
                <Text style={[styles.text, { color: "#393939" }]}>
                  You haven’t purshased Parkqwik FASTag
                </Text>
                <Text style={[styles.time, { color: "#8E8E8E" }]}>
                  {currentTime}
                </Text>
              </View>
              <View style={styles.recievedMsg}>
                <Text style={[styles.text, { color: "#393939" }]}>
                  Click below to buy Parkqwik FASTag
                </Text>
                <Text style={[styles.time, { color: "#8E8E8E" }]}>
                  {currentTime}
                </Text>
              </View>
              <View style={styles.options}>
                <View style={styles.container}>
                  <Text style={[styles.text, { color: "#393939" }]}>
                    Buy FASTag
                  </Text>
                  <FontAwesomeIcon icon={"angle-right"} />
                </View>
              </View>
            </>
          )}
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={{ flex: 1, height: 45, justifyContent: "center" }}>
            <Image
              style={styles.clip}
              source={require("../assets/images/paperclip.png")}
            />
            <TextInput style={styles.input} placeholder="Type something..." />
          </View>
          <View style={styles.button}>
            <Image
              source={require("../assets/images/send.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
      </View>
    );
  }
};

export default Help2;

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: "#e6e3e3",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  time: {
    fontFamily: "Poppins_500Medium",
    fontSize: 10,
    color: "white",
    position: "absolute",
    bottom: 5,
    right: 15,
  },
  sentMsg: {
    width: "70%",
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#1A9E75",
    alignSelf: "flex-end",
    right: 15,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    paddingBottom: 20,
  },
  recievedMsg: {
    width: "70%",
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#F0FFFA",
    alignSelf: "flex-start",
    left: 15,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingBottom: 20,
  },
  options: {
    alignSelf: "flex-start",
    width: "70%",
    gap: 10,
    marginTop: -10,
    left: 15,
  },
  container: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    gap: 5,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    backgroundColor: "white",
    borderRadius: 15,
    height: 45,
    paddingStart: 38,
    paddingTop: 5,
    elevation: 2,
  },
  clip: {
    width: 23,
    height: 23,
    position: "absolute",
    left: 10,
    zIndex: 15,
  },
  button: {
    width: 44,
    height: 45,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
