import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faArrowRightLong,
  faArrowLeftLong,
  faWallet,
  faBars,
  faArrowUpFromBracket,
  faCircleXmark,
  faCircle,
  faMoneyBills,
  faMinus,
  faPlus,
  faCaretDown,
  faChevronDown,
  faAngleRight,
  faUserPlus,
  faAngleDown,
  faCheck,
  faCar,
  faCirclePlay,
  faCirclePause,
  faPhone,
  faDiamondTurnRight,
  faArrowLeft,
  faEllipsisVertical,
  faBan,
  faAngleLeft,
  faCirclePlus,
  faStar,
  faAngleUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import { Store } from "./app/store/store";
import Home from "./app/pages/Home";
import Navbar from "./app/components/Navbar";
import React, { useEffect } from "react";
import Fastag from "./app/pages/AcitvateFastag";
import Header from "./app/components/Header";
import BuyFastag from "./app/pages/BuyFastag";
import { ScrollView } from "react-native-virtualized-view";
import { AppContextProvider } from "./app/context/AppContext";
import {
  Poppins_400Regular,
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { NunitoSans_600SemiBold } from "@expo-google-fonts/nunito-sans";
import Challan from "./app/pages/Challan";
import Electricity from "./app/pages/Electricity";
import Water from "./app/pages/Water";
import Mobile from "./app/pages/Mobile";
import Gas from "./app/pages/Gas";
import Loan from "./app/pages/Loan";
import DTH from "./app/pages/DTH";
import HouseRent from "./app/pages/HouseRent";
import RechargeFast from "./app/pages/RechargeFast";
import ReplaceFast from "./app/pages/ReplaceFast";
import CloseFast from "./app/pages/CloseFast";
import { Text, TextInput } from "react-native";
import Crime from "./app/pages/Crime";
import Rto from "./app/pages/Rto";
import Pucc from "./app/pages/Pucc";
import Rewards from "./app/pages/Rewards";
import Discounts from "./app/pages/Discounts";
import Refer from "./app/pages/Refer";
import Notifications from "./app/pages/Notifications";
import MyProfile from "./app/pages/MyProfile";
import Transactions from "./app/pages/Transactions";
import Bookings from "./app/pages/Bookings";
import Address from "./app/pages/Address";
import SavedCards from "./app/pages/SavedCards";
import Help from "./app/pages/Help";
import Nearby from "./app/pages/Nearby";
import Wash from "./app/pages/Wash";
import Valet from "./app/pages/Valet";
import Protocols from "./app/pages/Protocols";
import MyVehicle, { Header2 } from "./app/pages/MyVehicle";
import MyWallet from "./app/pages/MyWallet";
import Insurance from "./app/pages/Insurance";
import Toll from "./app/pages/Toll";
import Login from "./app/pages/Login";
import Helmet from "./app/pages/Helmet";
import RoadAssistance from "./app/pages/RoadAssistance";
import EvParking from "./app/pages/EvParking";
import CarShop from "./app/pages/CarShop";
import Fuel from "./app/pages/Fuel";
import RechargeFast2 from "./app/pages/RechargeFast2";
import MyVehicles2 from "./app/pages/MyVehicles2";
import Vehicle4 from "./app/components/myvehicle/Vehicle4";

library.add(
  faBars,
  faPhone,
  faBan,
  faChevronDown,
  faCaretDown,
  faBell,
  faWallet,
  faLocationDot,
  faArrowRightLong,
  faArrowLeftLong,
  faArrowUpFromBracket,
  faCircleXmark,
  faCircle,
  faMoneyBills,
  faMinus,
  faPlus,
  faAngleRight,
  faUserPlus,
  faAngleDown,
  faCheck,
  faCar,
  faCirclePlay,
  faCirclePause,
  faDiamondTurnRight,
  faArrowLeft,
  faEllipsisVertical,
  faAngleLeft,
  faCirclePlus,
  faStar,
  faAngleUp,
  faCircleCheck
);

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    if (TextInput.defaultProps) {
      TextInput.defaultProps.allowFontScaling = false;
    } else {
      TextInput.defaultProps = {};
      TextInput.defaultProps.allowFontScaling = false;
    }
  });

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    NunitoSans_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <AppContextProvider>
        <Provider store={Store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                header: ({ route }) => {
                  if (route.name === "subscreen3") {
                    return null;
                  } else if (route.name === "Home") {
                    return <Navbar />;
                  } else {
                    return <Header title={route.name.toString()} />;
                  }
                },
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Activate FASTag" component={Fastag} />
              <Stack.Screen name="Buy FASTag" component={BuyFastag} />
              <Stack.Screen name="Pay Challan" component={Challan} />
              <Stack.Screen name="Electricity Bill" component={Electricity} />
              <Stack.Screen name="Water Bill" component={Water} />
              <Stack.Screen name="Mobile Recharge" component={Mobile} />
              <Stack.Screen name="Book Gas Cylinder" component={Gas} />
              <Stack.Screen name="Loan Payment" component={Loan} />
              <Stack.Screen name="Recharge DTH" component={DTH} />
              <Stack.Screen name="Rent Payment" component={HouseRent} />
              <Stack.Screen name="FASTag Recharge" component={RechargeFast} />
              <Stack.Screen name="FASTag Recharge2" component={RechargeFast2} />
              <Stack.Screen name="Replace FASTag" component={ReplaceFast} />
              <Stack.Screen name="Close FASTag" component={CloseFast} />
              <Stack.Screen name="Crime Reporter" component={Crime} />
              <Stack.Screen name="RTO Center" component={Rto} />
              <Stack.Screen name="PUCC Center" component={Pucc} />
              <Stack.Screen name="Rewards" component={Rewards} />
              <Stack.Screen name="Discounts" component={Discounts} />
              <Stack.Screen name="Refer & Win" component={Refer} />
              <Stack.Screen name="Notification" component={Notifications} />
              <Stack.Screen name="My Profile" component={MyProfile} />
              <Stack.Screen name="Transaction" component={Transactions} />
              <Stack.Screen name="Bookings" component={Bookings} />
              <Stack.Screen name="Address" component={Address} />
              <Stack.Screen name="Cards" component={SavedCards} />
              <Stack.Screen name="Help" component={Help} />
              <Stack.Screen name="Nearby" component={Nearby} />
              <Stack.Screen name="Ev Parking" component={EvParking} />
              <Stack.Screen name="Wash" component={Wash} />
              <Stack.Screen name="Valet" component={Valet} />
              <Stack.Screen name="Protocols" component={Protocols} />
              <Stack.Screen name="My Vehicles2" component={MyVehicle} />
              <Stack.Screen name="My Vehicles" component={MyVehicles2} />
              <Stack.Screen
                options={{
                  header: () => {
                    return <Header2 title={"Add Vehicle"} />;
                  },
                }}
                name="Add Vehicle"
                component={Vehicle4}
              />
              <Stack.Screen name="Wallet" component={MyWallet} />
              <Stack.Screen name="Insurance" component={Insurance} />
              <Stack.Screen name="Toll" component={Toll} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Helmet" component={Helmet} />
              <Stack.Screen name="Road Assistance" component={RoadAssistance} />
              <Stack.Screen name="Shop" component={CarShop} />
              <Stack.Screen name="Fuel" component={Fuel} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </AppContextProvider>
    );
  }
}
function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 25, backgroundColor: "#FFF" }}
    >
      <Home />
    </ScrollView>
  );
}
