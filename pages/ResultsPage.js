import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ResultsPage = ({ route }) => {
  const navigation = useNavigation();

  const BMIvalue = route.params.BMIvalue;

  const interpretation = route.params.BMIInterpretation;

  const gender = route.params.gender;

  const age = route.params.age;

  return (
    <View style={styles.container}>
      <Text style={styles.BMIScore}>
        BMI = {BMIvalue} - {interpretation}.
      </Text>

      <Image
        style={styles.BMIequation}
        source={require("../images/equation.png")}
      />

      {age > 20 && (
        <Image
          style={styles.BMIAdultImage}
          source={require("../images/graph_adults.png")}
        />
      )}

      {age <= 20 && gender === "male" && (
        <Image
          style={styles.BMIKidImage}
          source={require("../images/graph_boys.png")}
        />
      )}

      {age <= 20 && gender === "female" && (
        <Image
          style={styles.BMIKidImage}
          source={require("../images/graph_girls.png")}
        />
      )}

      <Button onPress={() => navigation.navigate("Calculator")} title="back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  BMIScore: {
    paddingTop: 30,
    fontSize: 25,
    fontFamily: "PoppinsBold",
  },
  description: {
    paddingTop: 40,
    paddingBottom: 40,
    fontSize: 14,
  },
  titleText: {
    paddingTop: 30,
    fontSize: 30,
  },
  BMIKidImage: {
    flex: 1,
    margin: 25,
    resizeMode: "contain",
  },
  BMIAdultImage: {
    flex: 1,
    margin: 90,
    resizeMode: "contain",
  },
  BMIequation: {
    resizeMode: "center",
  },
});

export default ResultsPage;
