import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import * as Contacts from "expo-contacts";
import { useNavigation } from "@react-navigation/native";
9;
import Loader from "../Loader";

const Mobile2 = () => {
  const [contact, setContact] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleInput = (text) => {
    setSearch(text);
  };

  const handlePress = () => {
    navigation.navigate("mobile3");
  };

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContact(data.filter((item) => item.name !== "null null"));
        }
      }
    })();
  }, []);

  if (contact.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        <Loader />
        <Text style={[styles.text, { fontSize: 16, color: "#1A9E75" }]}>
          Please Wait..
        </Text>
      </View>
    );
  }

  if (contact.length > 0)
    return (
      <View
        style={{
          paddingTop: 20,
          alignItems: "center",
          gap: 20,
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={handleInput}
            placeholder="Search by name or number"
          />
          <Image
            style={styles.search}
            source={require("../assets/images/search.png")}
          />
        </View>

        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {search.length > 0
            ? contact
                .filter((data) =>
                  data.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((data) => (
                  <Pressable
                    onPress={handlePress}
                    key={data.id}
                    style={styles.contactContainer}
                  >
                    <View style={styles.circle}>
                      <Text
                        style={[
                          styles.text,
                          { fontSize: 16, color: "#1A9E75" },
                        ]}
                      >
                        {data.name.slice(0, 1)}
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.text, { fontSize: 14 }]}>
                        {data.name}
                      </Text>

                      <Text
                        style={[
                          styles.header,
                          { fontSize: 12, color: "#8E8E8E" },
                        ]}
                      >
                        {data.phoneNumbers
                          ? data.phoneNumbers[0].number
                          : "XXX"}
                      </Text>
                    </View>
                  </Pressable>
                ))
            : contact.map((data) => (
                <Pressable
                  onPress={handlePress}
                  key={data.id}
                  style={styles.contactContainer}
                >
                  <View style={styles.circle}>
                    <Text
                      style={[styles.text, { fontSize: 16, color: "#1A9E75" }]}
                    >
                      {data.name.slice(0, 1)}
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.text, { fontSize: 14 }]}>
                      {data.name}
                    </Text>

                    <Text
                      style={[styles.text, { fontSize: 12, color: "#8E8E8E" }]}
                    >
                      {data.phoneNumbers ? data.phoneNumbers[0].number : "XXX"}
                    </Text>
                  </View>
                </Pressable>
              ))}
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  lottie: {
    width: 100,
    height: 100,
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  search: { width: 20, height: 20, position: "absolute", left: 25 },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dedcdc",
    width: "85%",
    paddingVertical: 15,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
});

export default Mobile2;
