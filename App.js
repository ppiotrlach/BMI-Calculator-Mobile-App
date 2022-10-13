import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import PizzaCalculator from './components/PizzaCalculator';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ padding: 10, fontSize: 36 }}>
        🍕PIZZA CALC🍕
      </Text>
      <PizzaCalculator />
      <PizzaCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
