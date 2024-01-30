import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../context/AppContext";

const discover = [
  {
    id: 1,
    title: "Buy FASTag",
    image: require("../assets/images/shopping.png"),
    route: "Buy FASTag",
  },
  {
    id: 2,
    title: "Replace FASTag",
    image: require("../assets/images/published.png"),
    route: "Replace FASTag",
  },
  {
    id: 3,
    title: "Active FASTag",
    image: require("../assets/images/done.png"),
    route: "Activate FASTag",
  },
  {
    id: 4,
    title: "Close FASTag",
    image: require("../assets/images/scan.png"),
    route: "Close FASTag",
  },
];

const Recharge5 = () => {
  const { setHideHeader } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingTop: 15,
        gap: 15,
      }}
    >
      <View style={{ height: 130 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
          horizontal
        >
          <LinearGradient
            colors={["#4E34F0", "#6753E3"]}
            start={{ x: 0.5, y: 0.0 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text
              style={[
                styles.text,
                { color: "#FBFF29", fontSize: 18, marginBottom: -8 },
              ]}
            >
              Get 15% off on
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 20 }]}>
              FASTag recharge
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 9 }]}>
              Pay using Axis Bank Credit & Debit Cards
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("recharge6")}
                style={[styles.button, { marginTop: 10 }]}
              >
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "#393939", paddingTop: 1 },
                  ]}
                >
                  Recharge Now
                </Text>
              </TouchableOpacity>
              <Image
                style={{ maxWidth: 90, maxHeight: 20, marginTop: 5 }}
                source={require("../assets/images/fastag.png")}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#F2691B", "#FFBF74"]}
            start={{ x: 0.5, y: 0.0 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0.1149, 0.923]}
            style={styles.banner}
          >
            <Text style={[styles.text, { color: "white", fontSize: 16 }]}>
              Buy FASTag & Get Free Petrol Worth
            </Text>
            <Text style={[styles.text, { color: "white", fontSize: 8 }]}>
              Win Free Petrol On FASTag Activation
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("recharge6")}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.bold,
                    { fontSize: 10, color: "#393939", paddingTop: 1 },
                  ]}
                >
                  Recharge Now
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{
                maxWidth: 85,
                maxHeight: 53,
                marginTop: 5,
                position: "absolute",
                right: 10,
                bottom: 10,
              }}
              source={require("../assets/images/banner22.png")}
            />
          </LinearGradient>
        </ScrollView>
      </View>
      <View
        style={[
          styles.container,
          { flexDirection: "column", alignItems: "flex-start", gap: 10 },
        ]}
      >
        <Text style={[styles.header, { fontSize: 16, marginBottom: -5 }]}>
          FASTag Recharge
        </Text>
        <Text style={[styles.text, { color: "#A0A0A0", fontSize: 14 }]}>
          Get upto 100% cashback on first 3 Fastag Recharge
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("recharge6")}
          style={[styles.greenCard]}
        >
          <Text
            style={[
              styles.header,
              { color: "#1A9E75", paddingTop: 3, fontSize: 12 },
            ]}
          >
            Add vehicle or chassis number
          </Text>
          <FontAwesomeIcon
            icon={"arrow-right-long"}
            style={{ position: "absolute", right: 15 }}
            size={16}
            color="#1A9E75"
          />
        </TouchableOpacity>
        <View style={styles.bannerContainer2}>
          <Text style={[styles.text, { color: "#393939", fontSize: 12 }]}>
            Powered by
          </Text>
          <Image
            style={{ maxWidth: 50, maxHeight: 20 }}
            source={require("../assets/images/netc.png")}
          />
          <Image
            style={{ maxWidth: 40, maxHeight: 15, marginBottom: 4 }}
            source={require("../assets/images/bps.png")}
          />
        </View>
      </View>
      <Text
        style={[
          styles.header,
          { fontSize: 16, marginBottom: -5, width: "88%" },
        ]}
      >
        Discover
      </Text>
      <View style={styles.discContainer}>
        {discover.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              navigation.navigate(item.route);
              setHideHeader(false);
            }}
          >
            <View style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <View style={styles.icon}>
                <Image
                  style={{ maxHeight: 25, maxWidth: 30 }}
                  source={item.image}
                />
              </View>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Recharge5;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 3,
  },
  discContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FFFA",
    width: 60,
    borderRadius: 9,
    height: 50,
    elevation: 1,
  },
  iconText: {
    width: 50,
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  greenCard: {
    height: 40,
    width: "100%",
    backgroundColor: "#F0FFFA",
    borderRadius: 8,
    borderColor: "#1A9E75",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  banner: {
    width: 230,
    height: 130,
    borderRadius: 15,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  bannerContainer: {
    paddingLeft: "5%",
  },
  bannerContainer2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  button: {
    width: 90,
    height: 25,
    borderRadius: 15,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#393939",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
  },
});
