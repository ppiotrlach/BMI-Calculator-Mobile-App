import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BMICalculator from "../components/BMICalculator";

const BMIPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <BMICalculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    paddingTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default BMIPage;
