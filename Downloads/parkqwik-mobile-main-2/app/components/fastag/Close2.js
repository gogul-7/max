import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Close2 = () => {
  const [value, setValue] = useState("");
  const [popup, setPopup] = useState(false);

  const handleContinue = () => {
    setPopup(true);
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 1,
        width: "100%",
      }}
    >
      <Text style={[styles.header, { fontSize: 16, width: "90%" }]}>
        Select a reason for closing your FASTag
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "100%",
          }}
        >
          <View style={{ height: 20 }}>
            <RadioButton value="first" color="#1A9E75" />
          </View>
          <View style={{ width: "100%", paddingTop: 20 }}>
            <Text style={[styles.text]}>I'm selling or sold my vehicle</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "100%",
          }}
        >
          <View style={{ height: 20 }}>
            <RadioButton value="second" color="#1A9E75" />
          </View>
          <View style={{ width: "100%", paddingTop: 20 }}>
            <Text style={[styles.text]}>My FASTag is lost/stolen/damaged</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "100%",
          }}
        >
          <View style={{ height: 20 }}>
            <RadioButton value="third" color="#1A9E75" />
          </View>
          <View style={{ width: "100%", paddingTop: 20 }}>
            <Text style={[styles.text]}>
              Iam giving my vehicle to other person
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "90%",
          }}
        >
          <View style={{ height: 20 }}>
            <RadioButton value="fourth" color="#1A9E75" />
          </View>
          <View style={{ width: "100%", paddingTop: 20 }}>
            <Text style={[styles.text]}>
              I have service related issues with my FASTag
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "100%",
          }}
        >
          <View style={{ height: 20 }}>
            <RadioButton value="fifth" color="#1A9E75" />
          </View>
          <View style={{ width: "100%", paddingTop: 20 }}>
            <Text style={[styles.text]}>FASTag is not in use</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            width: "100%",
          }}
        >
          <View style={{ height: 20 }}>
            <RadioButton value="others" color="#1A9E75" />
          </View>
          <View style={{ width: "100%", paddingTop: 20 }}>
            <Text style={[styles.text]}>Others</Text>
          </View>
        </View>
      </RadioButton.Group>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text
          style={[styles.bold, { color: "#FFF", fontSize: 16, paddingTop: 2 }]}
        >
          Continue
        </Text>
      </TouchableOpacity>
      {popup && <Popup setPopup={setPopup} />}
    </View>
  );
};

const Popup = ({ setPopup }) => {
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("close3");
  };
  return (
    <View style={[styles.backdrop, { height, width }]}>
      <View style={styles.closeContainer}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            marginBottom: 15,
          }}
        >
          <Text style={[styles.header, { fontSize: 18 }]}>Close FASTag</Text>
          <TouchableOpacity onPress={() => setPopup(false)}>
            <FontAwesomeIcon
              style={{ color: "#1A9E75", marginRight: 5 }}
              size={23}
              icon="circle-xmark"
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text]}>
          Your FASTag will be closed within 5-7 working days. Security deposit
          and minimum balance maintained will be refunded to your account.
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "98%",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <Text style={[styles.header]}>Refundable Amount</Text>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>
            ₹ <Text style={[styles.header]}>100</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { width: "100%", marginTop: 10, position: "relative" },
          ]}
          onPress={handlePress}
        >
          <Text style={[styles.bold, { color: "#FFF", fontSize: 16 }]}>
            Close FASTag
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
  },
  button: {
    width: "100%",
    alignSelf: "center",
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(183, 183, 183, 0.7)",
    zIndex: 5,
    display: "flex",
    justifyContent: "flex-end",
  },
  closeContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 370,
    backgroundColor: "#FFF",
    padding: 20,
    display: "flex",
    gap: 8,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
});

export default Close2;
