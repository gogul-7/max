import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [headerNum, setHeaderNum] = useState(1);
  const [headerName, setHeaderName] = useState("");
  const [hideHeader, setHideHeader] = useState(false);
  const [challanHeader, setChallanHeader] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const [amount, setAmount] = useState("");
  const [headData, setHeadData] = useState({});
  const [notification, setNotification] = useState({});
  const [fastNum, setFastNum] = useState("");
  const [ham, setHam] = useState(false);
  const [nav, setNav] = useState(true);
  const [transData, setTransData] = useState({});
  const [bookData, setBookData] = useState({});
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [personalDetails, setPersonalDetails] = useState({});
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [addressDetails, setAddressDetails] = useState({});
  const [vehicleNum, setVehicleNum] = useState("");
  const [clientId, setClient] = useState("");
  const [tollDetails, setTollDetails] = useState({});

  console.log(tollDetails);

  // console.log(vehicleDetails);
  // console.log(hideHeader);

  return (
    <AppContext.Provider
      value={{
        headerNum,
        hideHeader,
        challanHeader,
        searchKey,
        amount,
        headData,
        fastNum,
        headerName,
        notification,
        ham,
        nav,
        transData,
        bookData,
        data,
        category,
        personalDetails,
        vehicleDetails,
        addressDetails,
        vehicleNum,
        clientId,
        tollDetails,
        setTollDetails,
        setClient,
        setVehicleNum,
        setAddressDetails,
        setVehicleDetails,
        setPersonalDetails,
        setCategory,
        setData,
        setBookData,
        setTransData,
        setNav,
        setHam,
        setNotification,
        setHeaderName,
        setFastNum,
        setHeadData,
        setAmount,
        setSearchKey,
        setChallanHeader,
        setHideHeader,
        setHeaderNum,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
