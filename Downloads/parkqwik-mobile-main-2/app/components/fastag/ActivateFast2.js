import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const ActivateFast2 = () => {
  const [toggle, setToggle] = useState(false);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("subscreen3");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCotainer}>
        <Text style={styles.header}>Tag ID</Text>
        <TextInput style={styles.input} value="123135454654" />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.header}>Vehicle Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Vehicle Number"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.header}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Full Name"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.header}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Date of Birth"
          placeholderTextColor="#AFAFAF"
        />
      </View>
      <View style={styles.inputCotainer}>
        <Text style={styles.header}>Upload RC</Text>
        <Pressable onPress={() => setToggle(true)}>
          <View style={styles.rcContainer}>
            <FontAwesomeIcon
              style={{ color: "#1A9E75" }}
              icon="fa-arrow-up-from-bracket"
            />
            <Text
              style={[
                styles.header,
                { color: "#1A9E75", fontSize: 12, paddingTop: 2 },
              ]}
            >
              Upload RC
            </Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        onPress={handlePress}
        style={[styles.button, { position: "absolute", bottom: 20 }]}
      >
        <Text style={[styles.text, { color: "white" }]}>Next</Text>
      </Pressable>
      <Modal
        isVisible={toggle}
        useNativeDriver
        style={styles.uploadRc}
        backdropOpacity={0.2}
        coverScreen
      >
        <View style={styles.uploadRcContainer}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "100%",
              marginBottom: 5,
            }}
          >
            <Text style={[styles.header, { fontSize: 18 }]}>Upload RC</Text>
            <Pressable onPress={() => setToggle(false)}>
              <FontAwesomeIcon
                style={{ color: "#1A9E75", marginRight: 5 }}
                size={23}
                icon="circle-xmark"
              />
            </Pressable>
          </View>
          <Text style={[styles.text]}>
            Please ensure the following when you upload your RC
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              gap: 8,
            }}
          >
            <FontAwesomeIcon size={4} icon="circle" />
            <Text style={[styles.text]}>Ensure that the text is readable</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              gap: 8,
            }}
          >
            <FontAwesomeIcon
              style={{ marginBottom: 16 }}
              size={4}
              icon="circle"
            />
            <Text style={[styles.text, { width: "85%" }]}>
              Make sure images is in either JPEG or PNG format
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={styles.card}>
              <FontAwesomeIcon
                style={{ color: "#1A9E75" }}
                icon="fa-arrow-up-from-bracket"
                size={18}
              />
              <Text style={[styles.header, { color: "#1A9E75", fontSize: 12 }]}>
                Front Side of RC
              </Text>
            </View>
            <View style={styles.card}>
              <FontAwesomeIcon
                style={{ color: "#1A9E75" }}
                icon="fa-arrow-up-from-bracket"
                size={18}
              />
              <Text style={[styles.header, { color: "#1A9E75", fontSize: 12 }]}>
                Back Side of RC
              </Text>
            </View>
          </View>
          <Pressable
            style={[
              styles.button,
              {
                width: "100%",
                marginTop: 10,
                position: "absolute",
                bottom: 25,
                alignSelf: "center",
              },
            ]}
            onPress={handlePress}
          >
            <Text style={[styles.bold, { color: "white", fontSize: 16 }]}>
              Done
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    gap: 15,
    flex: 1,
  },
  inputCotainer: {
    width: "90%",
    display: "flex",
    gap: 5,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#393939",
    fontSize: 16,
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  input: {
    width: "100%",
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: "#1A9E75",
  },
  button: {
    width: "85%",
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 60,
  },
  rcContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
    flexDirection: "row",
    alignItems: "center",
    width: 108,
    gap: 5,
  },
  uploadRc: {
    margin: 0,
    justifyContent: "flex-end",
  },
  uploadRcContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 468,
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    gap: 8,
  },
  card: {
    width: 146,
    height: 155,
    borderWidth: 1,
    borderStyle: "dashed",
    backgroundColor: "#F0FFFA",
    borderRadius: 13,
    borderColor: "#1A9E75",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default ActivateFast2;
