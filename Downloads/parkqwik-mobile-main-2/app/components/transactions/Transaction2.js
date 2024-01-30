import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Modal from "react-native-modal";

const Transaction2 = () => {
  const { transData } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleBackdrop = () => {
    setMenu(true);
  };

  const handleFeedBack = () => {
    setMenu(false);
    setFeedback(true);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 40,
        backgroundColor: "#FFF",
      }}
    >
      <View style={[styles.greenCircle]}></View>
      <View style={styles.headerContainer}>
        <Image
          style={{ width: 23, height: 23 }}
          source={require("../assets/images/arrowleft.png")}
        />
        <Pressable onPress={handleBackdrop}>
          <FontAwesomeIcon icon={"ellipsis-vertical"} color="white" size={18} />
        </Pressable>
      </View>

      <Modal
        isVisible={menu}
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        onBackdropPress={() => setMenu(false)}
        backdropColor="white"
        backdropOpacity={0.1}
        useNativeDriver
      >
        <View style={styles.menuContainer}>
          <Pressable style={styles.row}>
            <Image
              style={{ width: 17, height: 20 }}
              source={require("../assets/images/blackshare.png")}
            />
            <Text style={[styles.text, { color: "#393939", paddingTop: 2 }]}>
              Share
            </Text>
          </Pressable>
          <Pressable style={styles.row}>
            <Image
              style={{ width: 17, height: 20 }}
              source={require("../assets/images/blackhelp.png")}
            />
            <Text style={[styles.text, { color: "#393939", paddingTop: 2 }]}>
              Get Help
            </Text>
          </Pressable>
          <Pressable style={styles.row} onPress={handleFeedBack}>
            <Image
              style={{ width: 17, height: 20 }}
              source={require("../assets/images/feedback.png")}
            />
            <Text style={[styles.text, { color: "#393939", paddingTop: 2 }]}>
              Feedback
            </Text>
          </Pressable>
        </View>
      </Modal>

      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          height: 190,
        }}
      >
        <View style={[styles.circle1]}></View>
        <View style={[styles.circle2]}></View>
        <View style={[styles.circle3]}>
          <Image
            style={{
              width: 50,
              height: 30,
            }}
            source={require("../assets/images/check.png")}
          />
        </View>
      </View>
      <Text
        style={[
          styles.bold,
          {
            color: "white",
            fontSize: 20,
          },
        ]}
      >
        Payment Successful
      </Text>
      <Text style={{ color: "white", fontSize: 26, marginTop: 10 }}>
        ₹{" "}
        <Text
          style={[
            styles.bold,
            {
              fontSize: 28,
            },
          ]}
        >
          {transData.amount}
        </Text>
      </Text>
      <Text style={[styles.text, { color: "white", marginTop: -5 }]}>
        FASTag Recharge
      </Text>
      <View style={styles.details}>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View>
            <Text style={[styles.text, { fontSize: 16 }]}>FASTag Recharge</Text>
            <Text
              style={[
                styles.header,
                { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
              ]}
            >
              20 Oct 2023 at 11:24 AM
            </Text>
          </View>
          <Text style={{ color: "#00A638", fontSize: 16 }}>
            ₹<Text style={[styles.header]}> 600</Text>
          </Text>
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>Payment From</Text>
          <Text
            style={[
              styles.header,
              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
            ]}
          >
            krishna@okhdfcbank
          </Text>
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>Transaction ID</Text>
          <Text
            style={[
              styles.header,
              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
            ]}
          >
            538901388015
          </Text>
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>Vehicle Number</Text>
          <Text
            style={[
              styles.header,
              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
            ]}
          >
            TN01B5230
          </Text>
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 16 }]}>FASTag ID</Text>
          <Text
            style={[
              styles.header,
              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
            ]}
          >
            7891256784390762
          </Text>
        </View>
      </View>
      <Modal
        isVisible={feedback}
        onBackdropPress={() => setFeedback(false)}
        backdropColor="#B1B1B1"
        backdropOpacity={0.5}
        style={{ margin: 0 }}
      >
        <FeedBack setFeedback={setFeedback} setAlert={setAlert} />
      </Modal>
      <Modal
        isVisible={alert}
        onBackdropPress={() => setAlert(false)}
        backdropColor="#B1B1B1"
        backdropOpacity={0.5}
        style={{ margin: 30 }}
      >
        <View style={styles.alert}>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 10,
            }}
            onPress={() => setAlert(false)}
          >
            <FontAwesomeIcon
              color="rgba(26, 158, 117, 1)"
              icon={"circle-xmark"}
              size={18}
            />
          </TouchableOpacity>
          <Text style={[styles.header]}>Thanks For Your Feedback</Text>
          <Text
            style={[
              styles.text,
              { fontSize: 10, color: "#8E8E8E", marginTop: -4 },
            ]}
          >
            Your feedback is valuable to us
          </Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

const stars = [1, 2, 3, 4, 5];

const FeedBack = ({ setFeedback, setAlert }) => {
  const [star, setStar] = useState(0);
  const [borderColor, setBorder] = useState("#EBEBEB");
  const [alertText, setAlertText] = useState("");
  const [feed, setFeed] = useState("");

  const handleChange = (text) => {
    setBorder("#1A9E75");
    setFeed(text);
    if (text.length === 0) setBorder("#EBEBEB");
  };

  const handleSubmit = () => {
    if (feed.length === 0) setAlertText("Please enter your feedback.");
    else if (star === 0) setAlertText("Please select stars(Min 1).");
    else {
      setFeedback(false);
      setAlert(true);
    }
  };

  return (
    <View style={styles.feedContainer}>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          zIndex: 10,
        }}
        onPress={() => setFeedback(false)}
      >
        <FontAwesomeIcon
          color="rgba(26, 158, 117, 1)"
          icon={"circle-xmark"}
          size={20}
        />
      </TouchableOpacity>
      <Text style={[styles.header, { fontSize: 18 }]}>Feedback</Text>
      <Text style={[styles.header, { color: "#8E8E8E" }]}>
        Rate your experience with us
      </Text>
      <View
        style={{
          width: "100%",
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {stars.map((item) => (
          <Pressable key={item} onPress={() => setStar(item)}>
            <FontAwesomeIcon
              size={26}
              icon={"star"}
              color={
                star >= item
                  ? "rgba(237, 217, 40, 1)"
                  : "rgba(216, 216, 216, 1)"
              }
            />
          </Pressable>
        ))}
      </View>
      <TextInput
        multiline
        numberOfLines={7}
        style={[styles.feedInput, { borderColor }]}
        placeholder="Write your feedback here"
        placeholderTextColor={"#8E8E8E"}
        onChangeText={handleChange}
      />
      {alertText.length !== 0 && (
        <Text
          style={[
            styles.text,
            { color: "#FF4A4A", fontSize: 12, marginTop: 3, marginLeft: 5 },
          ]}
        >
          {alertText}
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={[styles.bold, { color: "white", fontSize: 16 }]}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction2;

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "#1A9E75",
    paddingHorizontal: 18,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  greenCircle: {
    height: 650,
    width: 500,
    backgroundColor: "#1A9E75",
    borderRadius: 600,
    position: "absolute",
    top: -180,
  },
  circle1: {
    width: 130,
    height: 130,
    backgroundColor: "#6ADEB9",
    borderRadius: 150,
    position: "absolute",
  },
  circle2: {
    width: 112,
    height: 112,
    backgroundColor: "#DAFFF3",
    borderRadius: 150,
    position: "absolute",
  },
  circle3: {
    width: 85,
    height: 85,
    backgroundColor: "white",
    borderRadius: 150,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    paddingTop: 2,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    marginTop: 2,
  },
  alert: {
    borderRadius: 16,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  menuContainer: {
    backgroundColor: "white",
    position: "absolute",
    top: 15,
    right: 0,
    overflow: "hidden",
    padding: 13,
    justifyContent: "space-between",
    borderRadius: 16,
    paddingRight: 25,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  details: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    padding: 20,
    width: "90%",
    marginTop: 90,
    gap: 10,
  },
  feedContainer: {
    backgroundColor: "white",

    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  feedInput: {
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    backgroundColor: "#FFF",
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: "100%",
    marginTop: 25,
    marginBottom: 10,
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
