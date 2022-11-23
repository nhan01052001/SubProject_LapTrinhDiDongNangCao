import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const AddProduct = () => {
  return (
    <View style={styles.container}>
      <Text>AddProduct</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
