import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultsPage from "../pages/ResultsPage";
import BMIPage from "../pages/BMIPage";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Calculator"
    >
      <Stack.Group>
        <Stack.Screen name="Calculator" component={BMIPage} />
        <Stack.Screen name="Results" component={ResultsPage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigator;
