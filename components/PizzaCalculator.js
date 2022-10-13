import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaCalculator = ({backgroundColor}) => {
    const [pizzaPrice, setPizzaPrice] = useState('');
    const [pizzaDiameter, setPizzaDiameter] = useState('');

    let pizzaPriceForCm2 = pizzaPrice / Math.pow((pizzaDiameter / 2), 2) * Math.PI;
    pizzaPriceForCm2 = pizzaPriceForCm2.toFixed(2);

    return (
        <View style={{ padding: 50}}>
            <TextInput
                style={{ height: 40, fontSize: 32 }}
                type="number"
                placeholder="pizza price"
                onChangeText={newText => setPizzaPrice(newText)}
                defaultValue={pizzaPrice}
            />
            <TextInput
                style={{ height: 40, fontSize: 32 }}
                type="number"
                placeholder="pizza diameter"
                onChangeText={newText => setPizzaDiameter(newText)}
                defaultValue={pizzaDiameter}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {/* {text.split(' ').map((word) => word && '🍕').join(' ')} */}

                {isNaN(parseFloat(pizzaPriceForCm2)) ? (
                    0.00
                ) : (
                    pizzaPriceForCm2
                )}

                $/cm^2
            </Text>
        </View>
    );
}

export default PizzaCalculator;