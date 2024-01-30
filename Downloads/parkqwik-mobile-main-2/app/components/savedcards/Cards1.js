import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Cards1 = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("cards2");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        gap: 10,
        paddingBottom: 30,
        paddingTop: 15,
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("../assets/images/cc1.png")}
        />
        <View style={{ flexDirection: "row", gap: 30 }}>
          <View style={styles.button}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/images/delete.png")}
            />
            <Text style={[styles.text, { fontSize: 12 }]}>Delete</Text>
          </View>
          <View style={styles.button}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/images/edit.png")}
            />
            <Text style={[styles.text, { fontSize: 12 }]}>Edit</Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("../assets/images/cc2.png")}
        />
        <View style={{ flexDirection: "row", gap: 30 }}>
          <View style={styles.button}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/images/delete.png")}
            />
            <Text style={[styles.text, { fontSize: 12 }]}>Delete</Text>
          </View>
          <View style={styles.button}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/images/edit.png")}
            />
            <Text style={[styles.text, { fontSize: 12 }]}>Edit</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleNavigate}
        style={[styles.container, { paddingVertical: 13 }]}
      >
        <Text style={[styles.header, { color: "#A0A0A0", paddingTop: 2 }]}>
          Tap to add new card
        </Text>
        <FontAwesomeIcon
          icon={"circle-plus"}
          color="rgba(26, 158, 117, 1)"
          size={18}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cards1;

const styles = StyleSheet.create({
  line: {
    backgroundColor: "rgba(57, 57, 57, .1)",
    width: "90%",
    height: 3,
    marginVertical: 30,
  },
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  bold: { fontFamily: "Poppins_600SemiBold" },
  button: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 4,
    width: 107,
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    elevation: 2,
  },
});
