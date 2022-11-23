import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const ListOfMe = () => {
  return (
    <View style={styles.container}>
      <Text>ListOfMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
