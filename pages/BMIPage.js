import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import BMICalculator from '../components/BMICalculator'

const BMIPage = () => {

    return (
        <View>
            <Text style={{ padding: 10, fontSize: 32 }}>
            BMI Calculator
            </Text>
            <BMICalculator />
        </View>
    );
}

export default BMIPage;