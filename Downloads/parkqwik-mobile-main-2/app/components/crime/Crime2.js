import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import AppContext from "../../context/AppContext";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as ImagePicker from "expo-image-picker";
import { Video, ResizeMode } from "expo-av";
import { Pressable } from "react-native";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useNavigation } from "@react-navigation/native";

const types = ["Rash Driving", "DrunK Driving"];

const Crime2 = () => {
  const { setHeaderName } = useContext(AppContext);
  const [image, setImage] = useState(null);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [border, setBorder] = useState("#EEE");
  const [vehicleNum, setVehicleNum] = useState("");
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleChange = (text) => {
    setBorder("#1A9E75");
    setVehicleNum(text);
    if (text.length == 0) setBorder("#EEE");
  };

  useEffect(() => {
    setHeaderName("null");
    return () => {
      setHeaderName("");
    };
  });

  const hanldeSubmit = () => {
    navigation.navigate("crime3");
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 30,
        gap: 10,
        backgroundColor: "#FFF",
      }}
    >
      <SelectDropdown
        data={types}
        defaultButtonText="Select Violation Type"
        buttonStyle={styles.dropdown}
        buttonTextStyle={[
          styles.text,
          {
            fontSize: 14,
            color: "#A0A0A0",
            textAlign: "left",
            flex: 0.7,
          },
        ]}
        renderDropdownIcon={() => {
          return <FontAwesomeIcon icon="caret-down" color="#1A9E75" />;
        }}
      />
      <Text style={[styles.header, { width: "90%" }]}>
        Upload or Capture Now
      </Text>
      {image ? (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: image,
            }}
            resizeMode={ResizeMode.COVER}
            useNativeControls
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          ></Video>
          <Pressable
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
            style={{ width: 30, height: 30, position: "absolute" }}
          >
            {status.isPlaying ? (
              <FontAwesomeIcon icon={"circle-pause"} size={30} color="white" />
            ) : (
              <FontAwesomeIcon icon={"circle-play"} size={30} color="white" />
            )}
          </Pressable>
        </View>
      ) : (
        <TouchableOpacity
          onPress={pickImage}
          style={[
            styles.container,
            {
              borderWidth: 1,
              borderColor: "#EBE9E9",
              height: 260,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Text style={[styles.text, { color: "#9A9A9A", fontSize: 16 }]}>
            Upload
          </Text>
        </TouchableOpacity>
      )}
      <Text style={[styles.text, { color: "#434343", fontSize: 16 }]}>or</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.bold}>Record Now</Text>
      </TouchableOpacity>
      <View style={[styles.container, { marginTop: 20, marginBottom: 25 }]}>
        <Text style={styles.header}>Add Car Number</Text>
        <Text style={[styles.text, { color: "#787474" }]}>
          Vehicle Number will help us authenticate the violation
        </Text>
        <TextInput
          style={[styles.input, { borderColor: border }]}
          placeholder="Enter Vehicle Number"
          onChangeText={handleChange}
        />
      </View>
      {image && vehicleNum.length !== 0 ? (
        <TouchableOpacity style={styles.button} onPress={hanldeSubmit}>
          <Text style={styles.bold}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.button, { backgroundColor: "#DFDFDF" }]}>
          <Text style={[styles.bold, { color: "#9F9F9F" }]}>Submit</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Crime2;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    elevation: 3,
  },
  dropdown: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#EEE",
    height: 40,
    marginBottom: 5,
    paddingTop: 2,
    backgroundColor: "#FFF",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  video: {
    height: 260,
    width: "90%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#A0A0A0",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
    width: "90%",
    marginTop: 3,
    paddingVertical: 6,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "white",
    marginTop: 2,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    paddingLeft: 10,
    marginTop: 8,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
});
