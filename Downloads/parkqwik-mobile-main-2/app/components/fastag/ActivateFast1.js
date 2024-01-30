import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

const ActivateFast1 = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("subscreen2");
  };
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.backDrop}>
      <ImageBackground
        style={styles.scanner}
        source={require("../assets/images/barcode.png")}
      >
        <View style={{ height: 232, width: 240, overflow: "hidden" }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 430 }}
          />
        </View>
      </ImageBackground>
      <Text style={[styles.bold]}>Point your camera on barcode</Text>
      <Image
        source={require("../assets/images/fastagimage.png")}
        style={{ maxHeight: 100, maxWidth: 200, marginTop: 20 }}
      />
      <Text style={[styles.header, { width: "60%", textAlign: "center" }]}>
        Scan barcode given on the right side of the FASTag
      </Text>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={[styles.bold, { paddingTop: 2 }]}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backDrop: {
    flex: 1,
    backgroundColor: "rgba(72, 72, 72, 0.83)",
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
    gap: 20,
  },
  scanner: {
    height: 240,
    width: 250,
    overflow: "hidden",
    paddingHorizontal: 5,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontFamily: "Poppins_500Medium",
    color: "#FFF",
  },
  bold: { fontFamily: "Poppins_600SemiBold", color: "#FFF", fontSize: 16 },
  button: {
    width: "85%",
    height: 40,
    backgroundColor: "#1A9E75",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivateFast1;
