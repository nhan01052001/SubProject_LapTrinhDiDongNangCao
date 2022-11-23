import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Bell = () => {
  return (
    <View style={styles.container}>
      <Text>Bell</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
