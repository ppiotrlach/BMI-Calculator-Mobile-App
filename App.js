
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import PizzaComparator from './pages/PizzaComparator';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <PizzaComparator />
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
  titleText: {
    fontSize: 50,
    fontWeight: "bold"
  }
});
