import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

const BMICalculator = () => {
  const [pizzaPrice, setPizzaPrice] = useState("");
  const [pizzaDiameter, setPizzaDiameter] = useState("");

  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [BMI, setBMI] = useState(0);

  const radioButtonsData = [
    {
      id: "m", // acts as primary key, should be unique and non-empty string
      label: "Male",
      value: "male",
    },
    {
      id: "f",
      label: "Female",
      value: "female",
    },
  ];

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const calculateBMI = () => {
    //check if age is number in range 1 - 150
    if (isNaN(age) || parseFloat(age) < 1 || parseFloat(age) > 150) {
      setBMI("error_age");
      return;
    }

    //check if height is number in range 20 - 300
    if (isNaN(height) || parseFloat(height) < 20 || parseFloat(height) > 300) {
      setBMI("error_height");
      return;
    }

    //check if weight is number in range 1 - 300
    if (isNaN(weight) || parseFloat(weight) < 1 || parseFloat(weight) > 300) {
      setBMI("error_weight");
      return;
    }

    //calculate BMI
    let calculatedBMI =
      parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2);
    calculatedBMI = calculatedBMI.toFixed(1);

    setBMI(calculatedBMI);
  };

  return (
    <KeyboardAvoidingView style={{ padding: 50 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text>Age: </Text>
          <TextInput
            style={{ height: 40, fontSize: 32 }}
            type="number"
            placeholder="years"
            onChangeText={(newText) => setAge(newText)}
            defaultValue={age}
          />
          <Text>Gender: </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
          <Text>Height: </Text>
          <TextInput
            style={{ height: 40, fontSize: 32 }}
            type="number"
            placeholder="cm"
            onChangeText={(newText) => setHeight(newText)}
            defaultValue={height}
          />
          <Text>Weight: </Text>
          <TextInput
            style={{ height: 40, fontSize: 32 }}
            type="number"
            placeholder="kg"
            onChangeText={(newText) => setWeight(newText)}
            defaultValue={weight}
          />

          <Button title="Calculate BMI" onPress={() => calculateBMI()} />

          <Text style={{ padding: 10, fontSize: 42 }}>YOUR BMI: {BMI}</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default BMICalculator;
