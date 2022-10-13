import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import PizzaCalculator from '../components/PizzaCalculator'

const PizzaComparator = () => {

    return (
        <View>
            <Text style={{ padding: 10, fontSize: 32 }}>
            🍕🍕🍕🍕🍕🍕🍕
            </Text>
            <PizzaCalculator />
            <PizzaCalculator />
        </View>
    );
}

export default PizzaComparator;