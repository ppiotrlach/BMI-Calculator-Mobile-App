import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultsPage = ({ route }) => {
  const navigation = useNavigation();

  const BMIvalue = route.params.BMIvalue;

  return (
    <View style={styles.container}>
      <Text style={styles.BMIScore}>Your BMI is {BMIvalue}</Text>
      <Text style={styles.description}>
        BMI Ranges:
        {"\n"}
        {"\n"}
        below 18.5 – you're in the underweight range.
        {"\n"}
        between 18.5 and 24.9 – you're in the healthy weight range.
        {"\n"}
        between 25 and 29.9 – you're in the overweight range.
        {"\n"}
        between 30 and 39.9 – you're in the obese range.
        {"\n"}
        {"\n"}
        {"\n"}
        BMI Formula
        {"\n"}
        {"\n"}
        weight (kg) / [height (m)]^2 {"\n"}
      </Text>
      <Button onPress={() => navigation.navigate("Calculator")} title="back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  BMIScore: {
    paddingTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
  description: {
    paddingTop: 40,
    paddingBottom: 40,
    fontSize: 14,
  },
  titleText: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ResultsPage;
