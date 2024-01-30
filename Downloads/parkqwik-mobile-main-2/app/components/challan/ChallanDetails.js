import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import PendingChallan from "./PendingChallan";
import PaidChallan from "./PaidChallan";
import AppContext from "../../context/AppContext";

const ChallanDetails = () => {
  const { challanHeader } = useContext(AppContext);

  if (challanHeader === 1) return <PendingChallan />;

  return <PaidChallan />;
};

const styles = StyleSheet.create({});

export default ChallanDetails;
