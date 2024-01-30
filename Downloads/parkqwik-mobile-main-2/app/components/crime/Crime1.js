import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

const Crime1 = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("crime2");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 15,
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: "#F0FFFA",
              flexDirection: "row",
              gap: 10,
              elevation: 0,
            },
          ]}
        >
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/exclamation.png")}
          />
          <Text style={styles.text}>
            It’s illegal to drive a car without horn
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Report Offence</Text>
          <Text style={[styles.text, { color: "#A0A0A0" }]}>
            Promote safety vigilance by reporting nearby traffic violations
          </Text>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              height: 70,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={handleNavigate} style={styles.button1}>
              <Text style={styles.bold}>Report Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.header, { width: "90%", marginBottom: -5 }]}>
          Offences Reported Near You
        </Text>
        <ScrollView
          contentContainerStyle={{ paddingLeft: 20, paddingRight: 18, gap: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <ImageBackground
            style={styles.imagebg}
            source={require("../assets/images/group11.png")}
          >
            <FontAwesomeIcon icon={"circle-play"} color="white" size={20} />
          </ImageBackground>
          <ImageBackground
            style={styles.imagebg}
            source={require("../assets/images/group13.png")}
          >
            <FontAwesomeIcon icon={"circle-play"} color="white" size={20} />
          </ImageBackground>
          <ImageBackground
            style={styles.imagebg}
            source={require("../assets/images/group12.png")}
          >
            <FontAwesomeIcon icon={"circle-play"} color="white" size={20} />
          </ImageBackground>
        </ScrollView>
        <View
          style={{
            width: "90%",
            height: 136,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            style={{ flex: 1, padding: 13 }}
            source={require("../assets/images/crimebg.png")}
            resizeMode="cover"
          >
            <Text style={styles.text2}>Report Offence & Win 200ml</Text>
            <Text style={[styles.text2, { color: "#EF2D03" }]}>
              Free Petrol Voucher
            </Text>
            <Text
              style={[
                styles.text,
                { color: "#333", fontSize: 10, width: "60%", marginTop: 2 },
              ]}
            >
              Take responsibility and report road violations
            </Text>
            <TouchableOpacity onPress={handleNavigate} style={styles.button2}>
              <Text style={[styles.bold, { fontSize: 10, color: "black" }]}>
                Report Now
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default Crime1;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 3,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#393939",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    color: "#393939",
  },
  button1: {
    paddingHorizontal: 35,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1A9E75",
    backgroundColor: "#F0FFFA",
  },
  button2: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "white",
    width: "30%",
    marginTop: 3,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#1A9E75",
    marginTop: 2,
  },
  imagebg: {
    width: 147,
    height: 189,
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 18,
  },
});
