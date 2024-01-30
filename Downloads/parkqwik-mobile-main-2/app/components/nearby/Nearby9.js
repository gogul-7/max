import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Tab, TabView } from "@rneui/base";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const bookings = [
  {
    id: 1,
    title: "Elite Car Parking",
    bookId: "37055101",
    details: "08 Feb 2023, 11:00 AM",
    address:
      "No. 473, Anna Street, Near HDFC Bank, Ramapuram, Chennai - 600016",
    amount: "40",
    location:
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089",
    status: "active",
    cancelled: false,
  },
  {
    id: 3,
    title: "Central Mall Car Parking",
    bookId: "89480123",
    details: "10 Jan 2023, 04:30 PM ",
    address:
      "No. 473, Anna Street, Near HDFC Bank, Ramapuram, Chennai - 600016",
    amount: "50",
    status: "past",
    cancelled: true,
    location:
      "https://www.google.com/maps?s=web&rlz=1C1RXQR_enIN960IN960&lqi=ChxjZW50cmFsIG1hbGwgcGFya2luZyBjaGVubmFpSOimqZaltoCACFo0EAAQARACGAAYAhgDIhxjZW50cmFsIG1hbGwgcGFya2luZyBjaGVubmFpKggIAxAAEAEQApIBFHB1YmxpY19wYXJraW5nX3NwYWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVIxTVVwWGEwcEJFQUWqAV8QASoYIhRjZW50cmFsIG1hbGwgcGFya2luZygAMh8QASIbl-3zLbVUoy2nw8fN4XnH3TyexTFWA4KPCu2hMiAQAiIcY2VudHJhbCBtYWxsIHBhcmtpbmcgY2hlbm5haQ&phdesc=00L-42YQdbw&vet=12ahUKEwjnvYvtqsGDAxUGTWwGHbo9BAkQ1YkKegQIHxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdVeXIIWZVI6MVUs_pSK-WuN&daddr=Chennai+Suburban+Terminal+(Moore+Market+Complex,+Kannappar+Thidal,+Poongavanapuram,+Chennai,+Tamil+Nadu+600003",
  },
  {
    id: 2,
    title: "Park Plaza ",
    bookId: "45055141",
    details: "18 Jan 2024, 11:29 AM",
    address:
      "No. 473, Anna Street, Near HDFC Bank, Ramapuram, Chennai - 600016",
    amount: "60 ",
    location:
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089",
    status: "upcoming",
    cancelled: false,
  },
  {
    id: 4,
    title: "Elite Car Parking",
    bookId: "37055141 ",
    details: "08 Feb 2023, 11:00 AM",
    address:
      "No. 473, Anna Street, Near HDFC Bank, Ramapuram, Chennai - 600016",
    amount: "40",
    location:
      "https://www.google.com/maps?rlz=1C1RXQR_enIN960IN960&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDU2OTNqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcF_So4qYVI6MebmydpUSjrT&daddr=Doctor,+No+89,+2nd+Main+Rd,+Kothari+Nagar,+Ramapuram,+Chennai,+Tamil+Nadu+600089",
    status: "past",
    cancelled: false,
  },
];

const active = bookings.filter((item) => item.status === "active");
const upcoming = bookings.filter((item) => item.status === "upcoming");
const past = bookings.filter((item) => item.status === "past");

const Nearby9 = () => {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const { setBookData } = useContext(AppContext);
  const handleChange = (text) => {
    setSearch(text);
  };

  const handleNavigate = (data) => {
    setBookData(data);
    navigation.navigate("nearby10");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Tab
        value={index}
        onChange={(e) => {
          setIndex(e);
          setSearch("");
        }}
        indicatorStyle={{
          backgroundColor: "#1A9E75",
          height: 3,
          borderTopRightRadius: 3,
          borderTopLeftRadius: 3,
        }}
      >
        <Tab.Item
          title="Active"
          titleStyle={[
            styles.header,
            { color: "#393939", paddingVertical: 0, paddingTop: 5 },
          ]}
        />
        <Tab.Item
          title="Upcoming"
          titleStyle={[
            styles.header,
            {
              color: "#393939",
              paddingVertical: 0,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: "#E4E4E4",
              paddingHorizontal: 0,
              width: "100%",
              height: 22,
              marginTop: 3,
            },
          ]}
          buttonStyle={{ paddingHorizontal: 0, alignItems: "center" }}
        />
        <Tab.Item
          title="Past"
          titleStyle={[
            styles.header,
            { color: "#393939", paddingVertical: 0, paddingTop: 5 },
          ]}
        />
      </Tab>
      <TabView
        value={index}
        onChange={(e) => {
          setIndex(e);
          setSearch("");
        }}
      >
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 20,
              gap: 10,
              alignItems: "center",
              paddingBottom: 30,
            }}
          >
            <View
              style={{
                width: "90%",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Search bookings & orders"
                onChangeText={handleChange}
              />
              <Image
                style={styles.search}
                source={require("../assets/images/search.png")}
              />
            </View>
            {search
              ? active
                  .filter(
                    (item) =>
                      item.bookId
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((data) => (
                    <TouchableOpacity
                      onPress={() => handleNavigate(data)}
                      key={data.id}
                      style={styles.container}
                    >
                      <View style={styles.topPart}>
                        <View>
                          <Text style={[styles.text, { fontSize: 16 }]}>
                            {data.title}
                          </Text>
                          <Text
                            style={[
                              styles.header,
                              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
                            ]}
                          >
                            {data.details}
                          </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                          <Text style={{ color: "#00A638", fontSize: 16 }}>
                            ₹<Text style={[styles.header]}> {data.amount}</Text>
                          </Text>
                          <LinearGradient
                            colors={["#64D51F", "#4DBB09"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.gradient}
                          >
                            <Text
                              style={[
                                styles.header,
                                {
                                  fontSize: 9,
                                  color: "#FFF",
                                  paddingBottom: 0,
                                },
                              ]}
                            >
                              Paid
                            </Text>
                          </LinearGradient>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.row,
                          { justifyContent: "space-between" },
                        ]}
                      >
                        <View style={styles.bookingId}>
                          <Text
                            style={[
                              styles.text,
                              { fontSize: 10, color: "#393939" },
                            ]}
                          >
                            Booking ID #{data.bookId}
                          </Text>
                        </View>
                        <FontAwesomeIcon
                          icon={"angle-right"}
                          size={18}
                          color="rgba(57, 57, 57, 1)"
                        />
                      </View>
                    </TouchableOpacity>
                  ))
              : active.map((data) => (
                  <TouchableOpacity
                    onPress={() => handleNavigate(data)}
                    key={data.id}
                    style={styles.container}
                  >
                    <View style={styles.topPart}>
                      <View>
                        <Text style={[styles.text, { fontSize: 16 }]}>
                          {data.title}
                        </Text>
                        <Text
                          style={[
                            styles.header,
                            { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
                          ]}
                        >
                          {data.details}
                        </Text>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ color: "#00A638", fontSize: 16 }}>
                          ₹<Text style={[styles.header]}> {data.amount}</Text>
                        </Text>
                        <LinearGradient
                          colors={["#64D51F", "#4DBB09"]}
                          start={{ x: 0, y: 0.5 }}
                          end={{ x: 1, y: 0.5 }}
                          style={styles.gradient}
                        >
                          <Text
                            style={[
                              styles.header,
                              { fontSize: 9, color: "#FFF", paddingBottom: 0 },
                            ]}
                          >
                            Paid
                          </Text>
                        </LinearGradient>
                      </View>
                    </View>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <View style={styles.bookingId}>
                        <Text
                          style={[
                            styles.text,
                            { fontSize: 10, color: "#393939" },
                          ]}
                        >
                          Booking ID #{data.bookId}
                        </Text>
                      </View>
                      <FontAwesomeIcon
                        icon={"angle-right"}
                        size={18}
                        color="rgba(57, 57, 57, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 20,
              gap: 10,
              alignItems: "center",
              paddingBottom: 30,
            }}
          >
            <View
              style={{
                width: "90%",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Search bookings & orders"
                onChangeText={handleChange}
              />
              <Image
                style={styles.search}
                source={require("../assets/images/search.png")}
              />
            </View>
            {search
              ? upcoming
                  .filter(
                    (item) =>
                      item.bookId
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((data) => (
                    <TouchableOpacity
                      onPress={() => handleNavigate(data)}
                      key={data.id}
                      style={styles.container}
                    >
                      <View style={styles.topPart}>
                        <View>
                          <Text style={[styles.text, { fontSize: 16 }]}>
                            {data.title}
                          </Text>
                          <Text
                            style={[
                              styles.header,
                              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
                            ]}
                          >
                            {data.details}
                          </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                          <Text style={{ color: "#00A638", fontSize: 16 }}>
                            ₹<Text style={[styles.header]}> {data.amount}</Text>
                          </Text>
                          <LinearGradient
                            colors={["#64D51F", "#4DBB09"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.gradient}
                          >
                            <Text
                              style={[
                                styles.header,
                                {
                                  fontSize: 9,
                                  color: "#FFF",
                                  paddingBottom: 0,
                                },
                              ]}
                            >
                              Paid
                            </Text>
                          </LinearGradient>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.row,
                          { justifyContent: "space-between" },
                        ]}
                      >
                        <View style={styles.bookingId}>
                          <Text
                            style={[
                              styles.text,
                              { fontSize: 10, color: "#393939" },
                            ]}
                          >
                            Booking ID #{data.bookId}
                          </Text>
                        </View>
                        <FontAwesomeIcon
                          icon={"angle-right"}
                          size={18}
                          color="rgba(57, 57, 57, 1)"
                        />
                      </View>
                    </TouchableOpacity>
                  ))
              : upcoming.map((data) => (
                  <TouchableOpacity
                    onPress={() => handleNavigate(data)}
                    key={data.id}
                    style={styles.container}
                  >
                    <View style={styles.topPart}>
                      <View>
                        <Text style={[styles.text, { fontSize: 16 }]}>
                          {data.title}
                        </Text>
                        <Text
                          style={[
                            styles.header,
                            { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
                          ]}
                        >
                          {data.details}
                        </Text>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ color: "#00A638", fontSize: 16 }}>
                          ₹<Text style={[styles.header]}> {data.amount}</Text>
                        </Text>
                        <LinearGradient
                          colors={["#64D51F", "#4DBB09"]}
                          start={{ x: 0, y: 0.5 }}
                          end={{ x: 1, y: 0.5 }}
                          style={styles.gradient}
                        >
                          <Text
                            style={[
                              styles.header,
                              { fontSize: 9, color: "#FFF", paddingBottom: 0 },
                            ]}
                          >
                            Paid
                          </Text>
                        </LinearGradient>
                      </View>
                    </View>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <View style={styles.bookingId}>
                        <Text
                          style={[
                            styles.text,
                            { fontSize: 10, color: "#393939" },
                          ]}
                        >
                          Booking ID #{data.bookId}
                        </Text>
                      </View>
                      <FontAwesomeIcon
                        icon={"angle-right"}
                        size={18}
                        color="rgba(57, 57, 57, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 20,
              gap: 10,
              alignItems: "center",
              paddingBottom: 30,
            }}
          >
            <View
              style={{
                width: "90%",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Search bookings & orders"
                onChangeText={handleChange}
              />
              <Image
                style={styles.search}
                source={require("../assets/images/search.png")}
              />
            </View>
            {search
              ? past
                  .filter(
                    (item) =>
                      item.bookId
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((data) => (
                    <TouchableOpacity
                      onPress={() => handleNavigate(data)}
                      key={data.id}
                      style={styles.container}
                    >
                      <View style={styles.topPart}>
                        <View>
                          <Text style={[styles.text, { fontSize: 16 }]}>
                            {data.title}
                          </Text>
                          <Text
                            style={[
                              styles.header,
                              { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
                            ]}
                          >
                            {data.details}
                          </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                          <Text style={{ color: "#00A638", fontSize: 16 }}>
                            ₹<Text style={[styles.header]}> {data.amount}</Text>
                          </Text>
                          <LinearGradient
                            colors={["#64D51F", "#4DBB09"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.gradient}
                          >
                            <Text
                              style={[
                                styles.header,
                                {
                                  fontSize: 9,
                                  color: "#FFF",
                                  paddingBottom: 0,
                                },
                              ]}
                            >
                              Paid
                            </Text>
                          </LinearGradient>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.row,
                          { justifyContent: "space-between" },
                        ]}
                      >
                        <View style={styles.bookingId}>
                          <Text
                            style={[
                              styles.text,
                              { fontSize: 10, color: "#393939" },
                            ]}
                          >
                            Booking ID #{data.bookId}
                          </Text>
                        </View>
                        <FontAwesomeIcon
                          icon={"angle-right"}
                          size={18}
                          color="rgba(57, 57, 57, 1)"
                        />
                      </View>
                    </TouchableOpacity>
                  ))
              : past.map((data) => (
                  <TouchableOpacity
                    onPress={() => handleNavigate(data)}
                    key={data.id}
                    style={styles.container}
                  >
                    <View style={styles.topPart}>
                      <View>
                        <Text style={[styles.text, { fontSize: 16 }]}>
                          {data.title}
                        </Text>
                        <Text
                          style={[
                            styles.header,
                            { fontSize: 12, color: "#A0A0A0", marginTop: -4 },
                          ]}
                        >
                          {data.details}
                        </Text>
                      </View>
                      <View style={{ alignItems: "flex-end" }}>
                        <Text
                          style={
                            data.cancelled
                              ? { color: "#A0A0A0", fontSize: 16 }
                              : { color: "#00A638", fontSize: 16 }
                          }
                        >
                          ₹<Text style={[styles.header]}> {data.amount}</Text>
                        </Text>
                        {data.cancelled ? (
                          <Text
                            style={[
                              styles.header,
                              { fontSize: 12, color: "#E44E2D", marginTop: -3 },
                            ]}
                          >
                            Cancelled
                          </Text>
                        ) : (
                          <LinearGradient
                            colors={["#64D51F", "#4DBB09"]}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.gradient}
                          >
                            <Text
                              style={[
                                styles.header,
                                {
                                  fontSize: 9,
                                  color: "#FFF",
                                  paddingBottom: 0,
                                },
                              ]}
                            >
                              Paid
                            </Text>
                          </LinearGradient>
                        )}
                      </View>
                    </View>
                    <View
                      style={[styles.row, { justifyContent: "space-between" }]}
                    >
                      <View style={styles.bookingId}>
                        <Text
                          style={[
                            styles.text,
                            { fontSize: 10, color: "#393939" },
                          ]}
                        >
                          Booking ID #{data.bookId}
                        </Text>
                      </View>
                      <FontAwesomeIcon
                        icon={"angle-right"}
                        size={18}
                        color="rgba(57, 57, 57, 1)"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default Nearby9;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 15,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 9,
    height: 40,
    paddingLeft: 35,
    position: "relative",
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    paddingTop: 3,
  },
  search: { width: 20, height: 20, position: "absolute", left: 10 },
  text: {
    fontFamily: "Poppins_400Regular",
    paddingTop: 2,
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  topPart: {
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  gradient: {
    height: 13,
    paddingHorizontal: 3,
    borderRadius: 3,
  },
  bookingId: {
    padding: 3,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
