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
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [interpretation, setInterpretation] = useState("overweight");
  const BMITableGirl = {
    2: [14.15, 18.02, 19.11],
    5: [13.34, 16.8, 18.26],
    8: [13.3, 18.32, 29.7],
    11: [14.08, 20.87, 24.14],
    14: [15.44, 23.35, 27.26],
    17: [16.84, 25.2, 29.63],
    20: [17.43, 26.48, 31.76],
  };

  const BMITableBoy = {
    2: [14.74, 18.16, 19.34],
    5: [13.84, 16.84, 17.94],
    8: [13.8, 17.96, 20.07],
    11: [14.56, 20.2, 23.21],
    14: [15.99, 22.66, 26.05],
    17: [17.7, 24.94, 28.26],
    20: [19.12, 27.05, 30.59],
  };

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

    const selectedGender = radioButtonsArray.find(
      (object) => object["selected"] === true
    )["value"];

    setGender(selectedGender);
    console.log(selectedGender);
  }

  const calculateBMI = () => {
    setIsDataValid(false);

    //check if age is number in range 1 - 150
    if (isNaN(age) || parseFloat(age) < 1 || parseFloat(age) > 150) {
      setBMI(0); //"error_age"
      return;
    }

    //check if height is number in range 20 - 300
    if (isNaN(height) || parseFloat(height) < 20 || parseFloat(height) > 300) {
      setBMI(0); //"error_height"
      return;
    }

    //check if weight is number in range 1 - 300
    if (isNaN(weight) || parseFloat(weight) < 1 || parseFloat(weight) > 300) {
      setBMI(0); //"error_weight"
      return;
    }

    //calculate BMI
    let calculatedBMI =
      parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2);
    calculatedBMI = calculatedBMI.toFixed(2);
    setBMI(calculatedBMI);

    if (age <= 20) {
      if (gender === "male") {
        setInterpretation(checkKidBoyBMI());
      } else {
        setInterpretation(checkKidGirlBMI());
      }
    } else {
      if (BMI < 16) {
        setInterpretation("Severe Thinness");
      } else if (BMI < 17) {
        setInterpretation("Moderate Thinness");
      } else if (BMI < 18.5) {
        setInterpretation("Mild Thinness");
      } else if (BMI < 25) {
        setInterpretation("Normal");
      } else if (BMI < 30) {
        setInterpretation("Overweight");
      } else if (BMI < 35) {
        setInterpretation("Obese Class I");
      } else if (BMI < 40) {
        setInterpretation("Obese Class II");
      } else {
        setInterpretation("Obese Class III");
      }
    }

    setIsDataValid(true);
  };

  const checkBodyTypeBasedOnTable = (age, BMITable) => {
    if (BMI < BMITable[age][0]) {
      return "Underweight";
    } else if (BMI < BMITable[age][1]) {
      return "Healthy weight";
    } else if (BMI < BMITable[age][2]) {
      return "At risk of overweight";
    } else {
      return "Overweight";
    }
  };

  const checkKidBoyBMI = () => {
    if (age <= 2) {
      return checkBodyTypeBasedOnTable(2, BMITableBoy);
    } else if (age <= 5) {
      return checkBodyTypeBasedOnTable(5, BMITableBoy);
    } else if (age <= 8) {
      return checkBodyTypeBasedOnTable(8, BMITableBoy);
    } else if (age <= 11) {
      return checkBodyTypeBasedOnTable(11, BMITableBoy);
    } else if (age <= 14) {
      return checkBodyTypeBasedOnTable(14, BMITableBoy);
    } else if (age <= 17) {
      return checkBodyTypeBasedOnTable(17, BMITableBoy);
    } else if (age <= 20) {
      return checkBodyTypeBasedOnTable(20, BMITableBoy);
    }
  };

  const checkKidGirlBMI = () => {
    if (age <= 2) {
      return checkBodyTypeBasedOnTable(2, BMITableGirl);
    } else if (age <= 5) {
      return checkBodyTypeBasedOnTable(5, BMITableGirl);
    } else if (age <= 8) {
      return checkBodyTypeBasedOnTable(8, BMITableGirl);
    } else if (age <= 11) {
      return checkBodyTypeBasedOnTable(11, BMITableGirl);
    } else if (age <= 14) {
      return checkBodyTypeBasedOnTable(14, BMITableGirl);
    } else if (age <= 17) {
      return checkBodyTypeBasedOnTable(17, BMITableGirl);
    } else if (age <= 20) {
      return checkBodyTypeBasedOnTable(20, BMITableGirl);
    }
  };

  return (
    <KeyboardAvoidingView style={{ padding: 50 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.text}>Age: </Text>
          <TextInput
            style={styles.textInput}
            type="number"
            keyboardType="numeric"
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
            keyboardType="numeric"
            placeholder="cm"
            onChangeText={(newText) => setHeight(newText)}
            defaultValue={height}
          />
          <Text style={styles.text}>Weight: </Text>
          <TextInput
            style={styles.textInput}
            type="number"
            keyboardType="numeric"
            placeholder="kg"
            onChangeText={(newText) => setWeight(newText)}
            defaultValue={weight}
          />

          <Button title="Calculate BMI" onPress={() => calculateBMI()} />

          <Text style={styles.BMIresult}>
            {isDataValid
              ? "YOUR BMI: " + parseFloat(BMI) + " - " + interpretation
              : ""}
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
    fontSize: 16,
    paddingTop: 20,
  },
});

export default BMICalculator;
