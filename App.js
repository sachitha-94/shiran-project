import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";

export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secoendValue, setSecoendValue] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <View style={styles.view}>
      <Text>First Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstValue}
        value={firstValue}
        keyboardType="numeric"
      />
      <Text>Secoend Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSecoendValue}
        value={secoendValue}
        keyboardType="numeric"
      />
      <Text>Result</Text>
      <TextInput style={styles.input} value={result} placeholder="Result" />
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
          title="ADD"
          onPress={() =>
            setResult(
              (Math.floor(firstValue) + Math.floor(secoendValue)).toString()
            )
          }
        />
        <Button
          style={styles.button}
          title="SUBTRACT"
          onPress={() =>
            setResult(
              (Math.floor(firstValue) - Math.floor(secoendValue)).toString()
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  button: {
    backgroundColor: "#0000FF",
  },
  buttonView: {
    padding: 20,
    display: "flex",
  },
});
