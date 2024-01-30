import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Loader from "../Loader";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Notification2 = () => {
  const { hideHeader, notification } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const [value, setValue] = useState(false);
  const [alert, setAlert] = useState("");
  const [blocked, setBlocked] = useState(false);
  const navigation = useNavigation();

  const size = useRef(new Animated.Value(0)).current;

  const scale = size.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 16],
  });

  const height = size.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const width = size.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 122],
  });

  const opacity = size.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handleBackdrop = () => {
    if (menu) {
      Animated.timing(size, {
        useNativeDriver: false,
        toValue: 0,
        duration: 200,
      }).start(() => {
        setMenu(false);
        setValue(false);
      });
    } else {
      setValue(!value);
      setMenu(!menu);
      Animated.timing(size, {
        useNativeDriver: false,
        toValue: 1,
        duration: 100,
      }).start();
    }
  };

  const handleMenu = (value) => {
    setMenu(false);
    setValue(false);
    setAlert(value);
  };

  const handleUnblock = () => {
    setMenu(false);
    setValue(false);
    setBlocked(false);
  };

  const handleAlertButton = () => {
    if (alert === "block") {
      setAlert(false);
      setBlocked(true);
    }
  };

  if (hideHeader) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          gap: 15,
          backgroundColor: "#FFF",
        }}
      >
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 23, height: 23 }}
              source={require("../assets/images/arrowleft.png")}
            />
          </Pressable>
          <Pressable onPress={handleBackdrop}>
            <FontAwesomeIcon
              icon={"ellipsis-vertical"}
              color="white"
              size={18}
            />
          </Pressable>
        </View>
        <View style={styles.date}>
          <Text style={[styles.header, { fontSize: 12, color: "#393939" }]}>
            {notification.date}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={{ maxHeight: 30, maxWidth: 30 }}
              source={notification.image}
            />
          </View>
          <View style={{ width: "80%" }}>
            <Text style={styles.header}>{notification.title}</Text>
            <Text style={styles.text}>{notification.message}</Text>
            {notification.category == "dth" && (
              <View
                style={{ alignItems: "center", flexDirection: "row", gap: 5 }}
              >
                <Text style={styles.bold}>Recharge Now</Text>
                <FontAwesomeIcon
                  icon={"angle-right"}
                  color="#1A9E75"
                  size={12}
                />
              </View>
            )}
          </View>
          <Text
            style={[
              styles.text,
              { fontSize: 10, position: "absolute", right: 10, bottom: 5 },
            ]}
          >
            {notification.time}
          </Text>
        </View>

        {menu && (
          <Pressable onPress={handleBackdrop} style={[styles.backDrop]}>
            <Animated.View
              style={[
                styles.menuContainer,
                { borderRadius: scale, width, height, opacity },
              ]}
            >
              <Pressable
                onPress={() => handleMenu("delete")}
                style={styles.row}
              >
                <Image
                  style={{ width: 15, height: 20 }}
                  source={require("../assets/images/delete.png")}
                />
                <Text
                  style={[styles.text, { color: "#393939", paddingTop: 2 }]}
                >
                  Delete
                </Text>
              </Pressable>
              {blocked ? (
                <Pressable onPress={handleUnblock} style={styles.row}>
                  <FontAwesomeIcon icon={"ban"} color="#393939" />
                  <Text
                    style={[styles.text, { color: "#393939", paddingTop: 2 }]}
                  >
                    Unblock
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => handleMenu("block")}
                  style={styles.row}
                >
                  <FontAwesomeIcon icon={"ban"} color="#393939" />
                  <Text
                    style={[styles.text, { color: "#393939", paddingTop: 2 }]}
                  >
                    Block
                  </Text>
                </Pressable>
              )}
            </Animated.View>
          </Pressable>
        )}
        {alert && (
          <View style={styles.backDrop2}>
            <View style={styles.alertContainer}>
              <Pressable
                onPress={() => setAlert(false)}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <FontAwesomeIcon
                  color="#1A9E75"
                  icon={"circle-xmark"}
                  size={18}
                />
              </Pressable>
              <Text
                style={[
                  styles.header,
                  { fontSize: 14, color: "#393939", textAlign: "center" },
                ]}
              >
                {alert === "delete"
                  ? `Are you sure you want to delete it?`
                  : `Are you sure you want to block this ?`}
              </Text>
              <Pressable style={styles.button} onPress={handleAlertButton}>
                <Text style={[styles.bold, { fontSize: 16, color: "white" }]}>
                  {alert === "delete" ? "Delete" : "Block"}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        {blocked && (
          <Text
            style={[
              styles.text,
              {
                position: "absolute",
                bottom: 10,
                width: "63%",
                textAlign: "center",
              },
            ]}
          >
            You have blocked this notification. You can also unblock it if you
            needed.
          </Text>
        )}
      </View>
    );
  } else {
    return <Loader />;
  }
};

export default Notification2;

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "#1A9E75",
    paddingHorizontal: 15,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    paddingBottom: 25,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },
  imageContainer: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: "#F0FFFA",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Poppins_500Medium",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#8E8E8E",
  },
  date: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  bold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    marginTop: 3,
    color: "#1A9E75",
  },
  backDrop: {
    backgroundColor: "rgba(255, 255, 255, .3)",
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "100%",
  },
  backDrop2: {
    backgroundColor: "rgba(57, 57, 57, .7)",
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    backgroundColor: "white",
    position: "absolute",
    top: 40,
    right: 15,
    overflow: "hidden",
    padding: 13,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  alertContainer: {
    width: "70%",
    height: 150,
    borderRadius: 16,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    gap: 10,
  },
  button: {
    width: "90%",
    paddingVertical: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#1A9E75",
  },
});
