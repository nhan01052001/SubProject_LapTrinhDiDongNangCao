import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

const Size = ({ listSize }) => {
  return (
    <View
      style={{
        backgroundColor: "#bdbbbb",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
        width: 40,
        height: 40,
        borderRadius: 10,
        marginRight: 20,
        marginTop: 5,
        marginLeft: 10,
      }}
    >
      <Text style={{ color: "#000", fontSize: 13, fontWeight: "700" }}>
        {listSize}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Size;
