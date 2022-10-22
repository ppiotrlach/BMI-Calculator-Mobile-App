import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import BMICalculator from "../components/BMICalculator";
import { useNavigation } from "@react-navigation/native";

const BMIPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>BMI Calculator</Text>
      <BMICalculator />
      <Button
        onPress={() => navigation.navigate("Results")}
        title="Check results"
      />
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
  titleText: {
    paddingTop: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default BMIPage;
