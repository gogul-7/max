import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Counter = ({ count, setCount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginRight: 20,
      }}
    >
      <Pressable
        onPress={() => setCount(count - 1)}
        style={count == 1 ? [styles.function, styles.disable] : styles.function}
      >
        <FontAwesomeIcon
          icon="minus"
          size={13}
          color={count == 1 ? "#CECECE" : "#1A9E75"}
        />
      </Pressable>
      <View style={{ minWidth: 10, display: "flex", alignItems: "center" }}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <Pressable onPress={() => setCount(count + 1)} style={styles.function}>
        <FontAwesomeIcon icon="plus" size={13} color="#1A9E75" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  function: {
    width: 26,
    height: 26,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#CECECE",
  },
  disable: {
    pointerEvents: "none",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 5,
  },
});

export default Counter;
