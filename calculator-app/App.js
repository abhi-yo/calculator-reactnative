import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const handleBackspacePress = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const isOperator = (value) => {
    return ["/", "*", "-", "+", "="].includes(value);
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={isOperator(button) ? styles.operatorButton : styles.button}
                onPress={() => handleButtonPress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={styles.utilityButtonRow}>
          <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delButton} onPress={handleBackspacePress}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  resultContainer: {
    alignItems: "flex-end",
    margin: 10,
  },
  resultText: {
    fontSize: 48, // Current: 30
    color: "#2c3e50",
  },
  inputContainer: {
    alignItems: "flex-end",
    margin: 10,
  },
  inputText: {
    fontSize: 36,
    color: "#7f8c8d",
  },
  buttonContainer: {
    flexDirection: "column",
  },
  utilityButtonRow: {
    flexDirection: "row",
    justifyContent: "center", // Center the buttons in the row
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  operatorButton: {
    width: 60,
    height: 60,
    backgroundColor: "#f39c12", // orange
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  clearButton: {
    width: 60,
    height: 60,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10, // Add horizontal margin
  },
  delButton: {
    width: 60,
    height: 60,
    backgroundColor: "#e74c3c", // Same red as Clear
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10, // Add horizontal margin
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});
