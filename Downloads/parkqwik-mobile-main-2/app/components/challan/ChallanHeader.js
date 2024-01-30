import React, { useContext } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import AppContext from "../../context/AppContext";

const ChallanHeader = () => {
  const { challanHeader, setChallanHeader } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setChallanHeader(1)}
        style={
          challanHeader === 1
            ? [styles.content, styles.selected]
            : styles.content
        }
      >
        <Text
          style={
            challanHeader === 1
              ? [styles.text, { color: "#1A9E75" }]
              : styles.text
          }
        >
          Pending
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setChallanHeader(2)}
        style={
          challanHeader === 2
            ? [styles.content, styles.selected]
            : styles.content
        }
      >
        <Text
          style={
            challanHeader === 2
              ? [styles.text, { color: "#1A9E75" }]
              : styles.text
          }
        >
          Paid
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#F0FFFA",
  },
  content: {
    flex: 0.5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: "#1A9E75",
  },
  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    paddingTop: 2,
  },
});

export default ChallanHeader;
