import { StyleSheet, View } from "react-native";
import React from "react";
import BMIPage from "./pages/BMIPage";

export default function App() {
  return (
    <View style={styles.container}>
      <BMIPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
