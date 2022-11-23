import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Color = ({ colorName }) => {
  const bgColor = {
    backgroundColor: colorName.colorName,
  };

  return (
    <Pressable style={[bgColor, style.box]}>
      {colorName.colorName === "blue" ||
      colorName.colorName === "black" ||
      colorName.colorName === "red" ? (
        <Text style={{ color: "white" }}>✓</Text>
      ) : (
        <Text style={{ color: "black" }}>✓</Text>
      )}
    </Pressable>
  );
};

const style = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 10,
    marginTop: 5,
  },
});

export default Color;
