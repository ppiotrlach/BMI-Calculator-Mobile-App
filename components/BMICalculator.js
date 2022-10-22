import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { useNavigation } from "@react-navigation/native";

const BMICalculator = () => {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const [BMI, setBMI] = useState(0);

  const [isDataValid, setIsDataValid] = useState(false);

  const navigation = useNavigation();

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
    setIsDataValid(false);

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
    console.log(calculatedBMI);
    setBMI(calculatedBMI);
    console.log(BMI);
    setIsDataValid(true);
  };

  return (
    <KeyboardAvoidingView style={{ padding: 50 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.text}>Age: </Text>
          <TextInput
            style={styles.textInput}
            type="number"
            placeholder="years"
            onChangeText={(newText) => setAge(newText)}
            defaultValue={age}
          />
          <Text style={styles.text}>Gender: </Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
          <Text style={styles.text}>Height: </Text>
          <TextInput
            style={styles.textInput}
            type="number"
            placeholder="cm"
            onChangeText={(newText) => setHeight(newText)}
            defaultValue={height}
          />
          <Text style={styles.text}>Weight: </Text>
          <TextInput
            style={styles.textInput}
            type="number"
            placeholder="kg"
            onChangeText={(newText) => setWeight(newText)}
            defaultValue={weight}
          />

          <Button title="Calculate BMI" onPress={() => calculateBMI()} />

          <Text style={styles.BMIresult}>
            {isDataValid ? "YOUR BMI: " + parseFloat(BMI) : ""}
          </Text>

          <Button
            onPress={() =>
              navigation.navigate("Results", { BMIvalue: parseFloat(BMI) })
            }
            title="Check results"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  textInput: {
    height: 60,
    fontSize: 32,
    paddingTop: 10,
    paddingBottom: 10,
  },
  BMIresult: {
    height: 60,
    fontSize: 32,
    paddingTop: 20,
  },
});

export default BMICalculator;
