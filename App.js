import { StyleSheet, View } from "react-native";
import React from "react";
import BMIPage from "./pages/BMIPage";
import AppNavigator from "./components/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
